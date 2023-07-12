import { fetchNotificationsSucess, markAsRead, setNotificationFilter } from "../actions/notificationActionCreators"
import { initialState } from './notificationReducer';
import { notificationReducer } from "./notificationReducer";

describe("notificationReducer function", () => {
  // Test for default state
  it("the default state returns the right data", () => {
    const currentState = notificationReducer(undefined, {});
    expect(currentState).toEqual(initialState);
  });

  // Test for FETCH_NOTIFICATIONS_SUCCESS action
  it("FETCH_NOTIFICATIONS_SUCCESS action returns the data passed with isRead property set to false", () => {
    const currentState = notificationReducer(undefined, fetchNotificationsSucess());
    const state = currentState.toJS();
    Object.keys(state.notifications).forEach((id) => {
      expect(state.notifications[id].isRead).toBe(false);
    });
  });

  // Test for MARK_AS_READ action
  it("MARK_AS_READ action updates the specified item's isRead property to true", () => {
    const state = notificationReducer(undefined, fetchNotificationsSucess());
    const index = 2;
    const currentState = notificationReducer(state, markAsRead(index));
    expect(currentState.notifications[index].isRead).toEqual(true);
  });

  // Test for SET_TYPE_FILTER action
  it("SET_TYPE_FILTER action updates the filter property with the specified value", () => {
    const currentState = notificationReducer(undefined, setNotificationFilter("URGENT"));
    expect(currentState.toJS().filter).toEqual("URGENT");
  });
});
