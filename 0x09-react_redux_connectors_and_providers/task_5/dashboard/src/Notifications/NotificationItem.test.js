import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress Aphrodite styles before each test
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// Restore all mocks after each test
afterEach(() => {
  jest.restoreAllMocks();
});

describe('NotificationItem component', () => {
  // Test for rendering without crashing
  it('renders without crashing',() => {
    const wrapper = shallow(<NotificationItem/>);
    expect(wrapper.exists()).toBe(true);
  });

  // Test for rendering the correct HTML with given type and value props
  it('renders the correct HTML with given type and value props', () => {
    const wrapper = shallow(<NotificationItem type="urgent" value="test"/>);
    const html = wrapper.html();
    expect(html).toBe('<li class="urgent_1uqgzdq-o_O-listItem_1fp99j6" data-notification-type="urgent">test</li>');
  });

  // Test for rendering the correct HTML with given html prop
  it('renders the correct HTML with given html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    const html = wrapper.html();
    expect(html).toBe('<li class="default_1y9uryn-o_O-listItem_1fp99j6" data-notification-type="default"><u>test</u></li>');
  });
});
