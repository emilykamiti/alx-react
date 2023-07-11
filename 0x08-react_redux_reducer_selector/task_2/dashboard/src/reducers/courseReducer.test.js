import Immutable from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { courseReducer } from '../reducers/courseReducer';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(Immutable.List([]));
  });

  it('should return the data passed in the FETCH_COURSE_SUCCESS action', () => {
    const data = [
      {
        id: 1,
        name: 'ES6',
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        credit: 40
      }
    ];
    const state = courseReducer(undefined, {
      type: FETCH_COURSE_SUCCESS,
      data
    });
    expect(state).toEqual(Immutable.List(data));
  });

  it('should update the isSelected property of the course at the specified index when the SELECT_COURSE action is received', () => {
    const state = Immutable.List([
      {
        id: 1,
        name: 'ES6',
        credit: 60,
        isSelected: false
      },
      {
        id: 2,
        name: 'Webpack',
        credit: 20,
        isSelected: false
      },
      {
        id: 3,
        name: 'React',
        credit: 40,
        isSelected: false
      }
    ]);
    const action = {
      type: SELECT_COURSE,
      index: 1
    };
    const newState = courseReducer(state, action);
    expect(newState).toEqual(Immutable.List([
      {
        id: 1,
        name: 'ES6',
        credit: 60,
        isSelected: true
      },
      {
        id: 2,
        name: 'Webpack',
        credit: 20,
        isSelected: false
      },
