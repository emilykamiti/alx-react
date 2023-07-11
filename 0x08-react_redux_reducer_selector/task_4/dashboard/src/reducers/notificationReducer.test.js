import { Map, fromJS } from "immutable";
import notificationReducer, { initialNotificationState } from "./notificationReducer";
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import notificationsNormalizer from "../schema/notifications";

describe("courseReducer tests", function () {
  /**
   * Test case: Tests that the default state returns an initial state
   */
  it("Tests that the default state returns an initial state", function () {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(Map(initialNotificationState));
  });

  /**
   * Test case: Tests that FETCH_NOTIFICATIONS_SUCCESS returns the data passed
   */
  it("Tests that FETCH_NOTIFICATIONS_SUCCESS returns the data passed", function () {
    // Set up the test data and expected data
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        // Array of notification objects
      ],
    };
    const data = [
      // Array of notification objects
    ];
    const normalizedData = notificationsNormalizer(data);
    const expectedData = {
      filter: "DEFAULT",
      ...normalizedData,
    };
    expectedData.notifications.forEach((notification) => (notification.isRead = false));

    // Apply the action and check the result
    const state = notificationReducer(undefined, action);
    expect(state.toJS()).toEqual(expectedData);
  });

  /**
   * Test case: Tests that MARK_AS_READ returns the data with the right item updated
   */
  it("Tests that MARK_AS_READ returns the data with the right item updated", function () {
    // Set up the initial state, action, and expected data
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        // Array of notification objects
      ],
    };
    initialState.notifications = notificationsNormalizer(initialState.notifications).notifications;
    const action = {
      type: MARK_AS_READ,
      index: 2,
    };
    const data = [
      // Array of notification objects
    ];
    const normalizedData = notificationsNormalizer(data);
    const expectedData = {
      filter: "DEFAULT",
      ...normalizedData,
    };
    expectedData.notifications.forEach((notification) => (notification.isRead = false));
    expectedData.notifications[2].isRead = true;

    // Apply the action and check the result
    const state = notificationReducer(fromJS(initialState), action);
    expect(state.toJS()).toEqual(expectedData);
  });

  /**
   * Test case: Tests that SET_TYPE_FILTER returns the data with the right item updated
   */
  it("Tests that SET_TYPE_FILTER returns the data with the right item updated", function () {
    // Set up the initial state, action, and expected data
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        // Array of notification objects
      ],
    };
    initialState.notifications = notificationsNormalizer(initialState.notifications).notifications;
    const action = {
      type: SET_TYPE_FILTER,
      filter: "URGENT",
    };
    const data = [
      // Array of notification objects
    ];
    const normalizedData = notificationsNormalizer(data);
    const expectedData = {
      filter: "URGENT",
      ...normalizedData,
    };

    // Apply the action and check the result
    const state = notificationReducer(fromJS(initialState), action);
    expect(state.toJS()).toEqual(expectedData);
  });
});
