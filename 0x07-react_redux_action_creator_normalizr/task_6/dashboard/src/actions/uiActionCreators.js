import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';


export const login = (email, password) => {
    return {
        type: LOGIN,
        user: { email, password }
    }
}

/**
 * Action creator function for the logout action.
 * 
 * @returns {Object} An action object with the type.
 */
export const logout = () => {
    return {
        type: LOGOUT,
    }
}

/**
 * Action creator function for displaying the notification drawer.
 * 
 * @returns {Object} An action object with the type.
 */

export const boundLogin = (email, password) => dispatch(login(email, password))

export const displayNotificationDrawer = () => {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER,
    }
}

/**
 * Action creator function for hiding the notification drawer.
 * 
 * @returns {Object} An action object with the type.
 */

export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer())

export const hideNotificataionDrawer = () => {
    return {
        type: HIDE_NOTIFICATION_DRAWER,
    }
}

export const boundHideNotificataionDrawer = () => dispatch(hideNotificataionDrawer())
