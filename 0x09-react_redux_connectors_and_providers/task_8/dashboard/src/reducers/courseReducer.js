import { Map } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionsTypes';

const initialState = [];

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS: {
            const courses = action.data.map(course => {
                return Map({
                    ...course,
                    isSelected: false
                });
            });
            return courses;
        }
        case SELECT_COURSE: {
            const index = action.index;
            if (index >= 0 && index < state.length) {
                return state.update(index, course => course.set('isSelelcted', true));
            }
            return state;
        }
        case UNSELECT_COURSE: {
            const index = action.index;
            if (index >= 0 && index < state.length) {
                return state.update(index, course => course.set('isSelected', false));
            }
            return state;
        }
        default:
            return state;
    }
};

export default courseReducer;