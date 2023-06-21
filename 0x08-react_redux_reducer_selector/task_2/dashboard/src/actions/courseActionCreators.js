import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

/**
 * Action creator function to select a course.
 * 
 * @param {number} index - The index of the course to be selected.
 * @returns {Object} An action object with the type and index.
 */
export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index,
  };
};

/**
 * Action creator function to unselect a course.
 * 
 * @param {number} index - The index of the course to be unselected.
 * @returns {Object} An action object with the type and index.
 */

export const boundSelectCourse = (index) => dispatch(selectCourse(index));

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index,
  };
};
export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));
