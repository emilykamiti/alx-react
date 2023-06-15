import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_FAILURE,
    LOGIN_SUCCESS
  } from './uiActionTypes';
  
  /**
   * Action creator for the login action.
   * @param {string} email - The user's email.
   * @param {string} password - The user's password.
   * @returns {object} - The login action object.
   */
  export const login = (email, password) => {
    return {
      type: LOGIN,
      user: { email, password }
    }
  }
  
  /**
   * Bound action creator for the login action.
   * @param {string} email - The user's email.
   * @param {string} password - The user's password.
   * @returns {function} - The function that dispatches the login action.
   */
  export const boundLogin = (email, password) => dispatch(login(email, password))
  
  /**
   * Action creator for the logout action.
   * @returns {object} - The logout action object.
   */
  export const logout = () => {
    return {
      type: LOGOUT,
    }
  }
  
  /**
   * Bound action creator for the logout action.
   * @returns {function} - The function that dispatches the logout action.
   */
  export const boundLogout = () => dispatch(logout())
  
  /**
   * Action creator for the displayNotificationDrawer action.
   * @returns {object} - The displayNotificationDrawer action object.
   */
  export const displayNotificationDrawer = () => {
    return {
      type: DISPLAY_NOTIFICATION_DRAWER,
    }
  }
  
  /**
   * Bound action creator for the displayNotificationDrawer action.
   * @returns {function} - The function that dispatches the displayNotificationDrawer action.
   */
  export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer())
  
  /**
   * Action creator for the hideNotificationDrawer action.
   * @returns {object} - The hideNotificationDrawer action object.
   */
  export const hideNotificationDrawer = () => {
    return {
      type: HIDE_NOTIFICATION_DRAWER,
    }
  }
  
  /**
   * Bound action creator for the hideNotificationDrawer action.
   * @returns {function} - The function that dispatches the hideNotificationDrawer action.
   */
  export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer())
  
  /**
   * Action creator for the loginSuccess action.
   * @returns {object} - The loginSuccess action object.
   */
  export const loginSuccess = () => {
    return {
      type: LOGIN_SUCCESS
    }
  }
  
  /**
   * Action creator for the loginFailure action.
   * @returns {object} - The loginFailure action object.
   */
  export const loginFailure = () => {
    return {
      type: LOGIN_FAILURE
    }
  }
  
  /**
   * Async action creator for the loginRequest action.
   * @param {string} email - The user's email.
   * @param {string} password - The user's password.
   * @returns {function} - The async function that dispatches the loginRequest action.
   */
  export const loginRequest = (email, password) => {
    return async (dispatch) => {
      dispatch(login(email, password));
      try {
        const res = await fetch("http://localhost:8564/login-success.json"); // Replace with the actual API endpoint
        const json = await res.json();
        return dispatch(loginSuccess());
      } catch (error) {
        return dispatch(loginFailure());
      }
    };
  };
  