import Immutable from 'immutable';

export const initialState = Immutable.List([]);

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return state.merge(
        action.data.map((course) => Immutable.fromJS({
          id: course.id,
          name: course.name,
          credit: course.credit,
          isSelected: false
        }))
      );
    case SELECT_COURSE:
      const index = action.index;
      const course = state.get(index);
      return state.set(index, course.set('isSelected', true));
    case UNSELECT_COURSE:
      const index = action.index;
      const course = state.get(index);
      return state.set(index, course.set('isSelected', false));
    default:
      return state;
  }
}
