import { fetchNotifications, markAsRead, setLoadingState, setNotificationFilter, setNotifications } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes'
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import fetchMock from "fetch-mock-jest"

const mockStore = configureStore([thunk])

afterEach(() => {
  fetchMock.restore();
});

// Test for markAsRead() action creator
test('markAsRead()', () => {
  const action = markAsRead(1);
  expect(action).toEqual({ type: MARK_AS_READ, index: 1 });
});

// Test for setNotificationFilter() action creator
test('setNotificationFilter()', () => {
  const action = setNotificationFilter(NotificationTypeFilters.DEFAULT);
  expect(action).toEqual({ type: SET_TYPE_FILTER, filter: "DEFAULT" });
});

// Test for setLoadingState() action creator
test("setLoadingState(true) returns right action object", () => {
  const action = setLoadingState(true);
  expect(action).toEqual({ type: SET_LOADING_STATE, loading: true });
});

// Test for setNotifications() action creator
test("setNotifications()", () => {
  const action = setNotifications(undefined);
  expect(action).toEqual({ type: FETCH_NOTIFICATIONS_SUCCESS, data: [] });
});

// Test for fetchNotifications() asynchronous action
test("fetchNotifications()", () => {
  const store = mockStore({});
  const expectedActions = [
    { type: 'SET_LOADING_STATE', loading: true },
    { type: 'FETCH_NOTIFICATIONS_SUCCESS', data: [] },
    { type: 'SET_LOADING_STATE', loading: false }
  ];
  fetchMock.get("/notifications.json", []);
  return store.dispatch(fetchNotifications()).then(() => {
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });
});
