import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress style injection before each test
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// Clear style buffer and resume style injection after each test
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// Shallow render the Footer component for each test
const wrapper = shallow(<Footer />);

describe('Footer component', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the text "Copyright" when context is set to (user defined, isLoggedIn is false, and an email is set)', () => {
    // Shallow render the Footer component
    const wrapper = shallow(<Footer />);

    // Expect the text in the paragraph element to contain "Copyright"
    expect(wrapper.find('p').text()).toContain('Copyright');
  });

  it('renders the text "Contact us" when context is set to (user defined, isLoggedIn is true, and an email is set)', () => {
    // Update the isLoggedIn value of the defaultUser object to true
    defaultUser.isLoggedIn = true;

    // Shallow render the Footer component with isLoggedIn prop set to true
    const wrapper = shallow(<Footer isLoggedIn={true} />);

    // Expect the text in the paragraph element to contain "Contact us"
    expect(wrapper.find('p').text()).toContain('Contact us');
  });
});
