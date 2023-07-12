import React from 'react';
import {Notifications} from "./Notifications";
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  jest.restoreAllMocks();
});

// Define sample messages for testing
const messages = [
  {
    guid: "89",
    isRead: true,
    type: "urgent",
    value: "Odio pellentesque"
  }
]

// Calculate the length of the messages array
const notifLength = Object.values(messages).length

// Create a shallow wrapper of the Notifications component with displayDrawer and messages props
const wrapper = shallow(<Notifications displayDrawer={true} messages={messages}/>);

describe(`Notifications Component when displayDrawer prop is true
and messages prop is not empty`, () => {
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true)
  })

  it("renders Notifications div", () => {
    expect(wrapper.find('.Notifications_95aj9m').exists()).toEqual(true)
  })

  it("renders list items", () => {
    expect(wrapper.find('ul').children().length).toEqual(notifLength);
  })

  it("renders the text: 'Here is the list of notifications:'", () => {
    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications:</p>)).toEqual(true);
  })

  it("renders first NotificationItem element with the right html", () => {
    const firstChild = wrapper.find('ul').children().first();
    expect(firstChild.html()).toBe('<li class="urgent_1uqgzdq-o_O-listItem_1fp99j6" data-notification-type="urgent">\
Odio pellentesque</li>');
  })

})

// Create another shallow wrapper of the Notifications component with displayDrawer prop set to true
const wrapper2 = shallow(<Notifications displayDrawer={true}/>);

describe(`Notifications Component when displayDrawer prop is true
and messages prop is empty (or not used)`, () => {
  it("renders without crashing", () => {
    expect(wrapper2.exists()).toBe(true)
  })

  it("renders the text: 'No new notification for now'", () => {
    expect(wrapper2.containsMatchingElement(<p>No new notification for now</p>)).toEqual(true);
  })

})

// Test scenarios when displayDrawer prop is false
describe('Notifications Component when displayDrawer prop is false', () => {
  it("calls handleDisplayDrawer() when menuItem is clicked", () => {
    const showDrawer = jest.fn()
    const comp = shallow(<Notifications showDrawer={showDrawer} displayDrawer={false}/>);
    const menuItem = comp.find('.menuItem_1ron99v')
    menuItem.simulate('click')
    expect(showDrawer).toHaveBeenCalled()
  })

  it("calls handleHideDrawer() when close-btn is clicked", () => {
    const hideDrawer = jest.fn()
    const comp = shallow(<Notifications hideDrawer={hideDrawer} displayDrawer={true}/>);
    const menuItem = comp.find({id: "close-btn"})
    menuItem.simulate('click')
    expect(hideDrawer).toHaveBeenCalled()
  })

  // Create a shallow wrapper of the Notifications component with displayDrawer prop set to false
  const component = shallow(<Notifications displayDrawer={false}/>);

  it("renders div with menuItem class", () => {
    expect(component.find('.menuItem_1ron99v').exists()).toEqual(true)
  })

  it("does not render Notifications div", () => {
    expect(component.find('.Notifications').exists()).toEqual(false)
  })
})
