import React from 'react';
import { Header } from './Header';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress style injection before each test
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// Clear style buffer and resume style injection after each test
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  jest.restoreAllMocks();
});

describe('Header Component', () => {
  it('renders without crashing and logoutSection is not created with a default context value', () => {
    // Shallow render the Header component
    const wrapper = shallow(<Header />);
    
    // Expect the component to exist
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Context value tests', () => {
  it('renders img and h1 tags', () => {
    // Shallow render the Header component
    const wrapper = shallow(<Header />);
    
    // Expect img and h1 tags to exist
    expect(wrapper.find('img').exists()).toEqual(true);
    expect(wrapper.find('h1').exists()).toEqual(true);
  });

  it('logoutSection is not created with a default context value set (isLoggedIn is false and an email is set)', () => {
    // Shallow render the Header component
    const wrapper = shallow(<Header />);
    
    // Expect logoutSection not to exist
    expect(wrapper.find('#logoutSection').exists()).toEqual(false);
  });

  it('logoutSection is created when user defined (isLoggedIn is true and an email is set)', () => {
    // Shallow render the Header component with isLoggedIn prop set to true
    const wrapper = shallow(<Header isLoggedIn={true} />);
    
    // Expect logoutSection to exist
    expect(wrapper.find('#logoutSection').exists()).toEqual(true);
  });

  it('calls spy function when logOut is clicked (user defined, isLoggedIn is true and an email is set)', () => {
    // Create a mock function
    const logOut = jest.fn();

    // Shallow render the Header component with isLoggedIn prop set to true and logOut prop set to the mock function
    const wrapper = shallow(<Header isLoggedIn={true} logOut={logOut} />);

    // Simulate click on the logout button
    const logoutBtn = wrapper.find('#logoutSection a');
    logoutBtn.simulate('click');

    // Expect the logOut function to have been called
    expect(logOut).toHaveBeenCalled();
  });
});
