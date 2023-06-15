import React from 'react';
import CourseList from './CourseList';
import { shallow } from 'enzyme';

describe('CourseList component', () => {
 /**
   * Test to check if the CourseList component renders without crashing.
   */    
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList/>);
    expect(wrapper.exists()).toBe(true);
  })

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />)
    expect(wrapper.find('table thead').children().length).toEqual(2);
    expect(wrapper.find('table tbody').children().length).toEqual(1);
  })
})