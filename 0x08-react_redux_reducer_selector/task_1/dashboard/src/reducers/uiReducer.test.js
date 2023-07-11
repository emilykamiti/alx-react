import Immutable from 'immutable';
import { DISPLAY_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, HIDE_NOTIFICATION_DRAWER, LOGOUT } from '../actions/uiActionTypes';
import { uiReducer } from '../reducers/uiReducer';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(Immutable.Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    }));
  });

  it('should set the isNotificationDrawerVisible property to true', () => {
    const state = uiReducer(undefined, {
      type: DISPLAY_NOTIFICATION_DRAWER
    });
    expect(state.get('isNotificationDrawerVisible')).toBe(true);
  });

  it('should set the isUserLoggedIn property to true', () => {
    const state = uiReducer(undefined, {
      type: LOGIN_SUCCESS
    });
    expect(state.get('isUserLoggedIn')).toBe(true);
  });

  it('should set the isUserLoggedIn property to false', () => {
    const state = uiReducer(undefined, {
      type: LOGOUT
    });
    expect(state.get('isUserLoggedIn')).toBe(false);
  });
});
