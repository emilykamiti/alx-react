import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

// Test suite for action creators
describe("action creators tests", function () {
  // Test case for selectCourse action creator
  it("selectCourse should return: { type: SELECT_COURSE, index: 1 }", function () {
    // Calling the selectCourse action creator
    const result = selectCourse(1);

    // Expecting the returned value to match the expected action object
    expect(result).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  // Test case for unSelectCourse action creator
  it("unSelectCourse should return: { type: UNSELECT_COURSE, index: 1 }", function () {
    // Calling the unSelectCourse action creator
    const result = unSelectCourse(1);

    // Expecting the returned value to match the expected action object
    expect(result).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
