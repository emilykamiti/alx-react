import { getListCourses } from "./courseSelector"
import { Map } from "immutable";

test("getListCourses", ()=> {
  // Create a mock state with courses data
  let state = {
    courses: Map({
      "2":{
        "id": "2",
        "name": "Webpack",
        "credit": 20
      }
    })
  }

  // Call the getListCourses selector with the mock state
  const selectCourses = getListCourses(state)

  // Assert that the selector returns the expected result
  expect(selectCourses.toJS()).toEqual([ { "id": "2", "name": "Webpack", "credit": 20 } ])
})
