import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";

/**
 * Action creator function to mark a notification as read.
 * 
 * @param {number} index - The index of the notification to mark as read.
 * @returns {Object} An action object with the type and index.
 */
export const markAsRead = (index) => {
    return {
        type: MARK_AS_READ,
        index
    }
}

/**
 * Action creator function to set the notification type filter.
 * 
 * @param {string} filter - The notification type filter.
 * @returns {Object} An action object with the type and filter.
 */
export const boundMarkAsAread = (index) => dispach(markAsAread(index))

export const setNotificationFilter = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter,
    }
}
export const boundSetNotificationFilter = (filter) => dispach(setNotificationFilter(filter));