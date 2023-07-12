import { getAllNotificationsByUser, notificationsNormalizer } from '../schema/notifications'
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_LOADING_STATE, SET_TYPE_FILTER } from './notificationActionTypes'

export function markAsRead(index) {
  return { type: MARK_AS_READ, index }
}

export function setNotificationFilter(filter) {
  return { type: SET_TYPE_FILTER, filter }
}

/**
 * Action creator for successful notification fetch.
 * @returns {object} An action object with the type and data.
 */
export function fetchNotificationsSuccess() {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: [
      {
        id: 1,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available"
      }
    ]
  }
}

/**
 * Action creator for setting the loading state of notifications.
 * @param {boolean} loading - The loading state of notifications.
 * @returns {object} An action object with the type and loading state.
 */
export function setLoadingState(loading) {
  return { type: SET_LOADING_STATE, loading }
}

/**
 * Action creator for setting the notifications data.
 * @param {array} data - The notifications data.
 * @returns {object} An action object with the type and data.
 */
export function setNotifications(data = []) {
  return { type: FETCH_NOTIFICATIONS_SUCCESS, data }
}

/**
 * Thunk action creator for fetching notifications.
 * @returns {function} A thunk function that dispatches actions.
 */
export function fetchNotifications() {
  return (dispatch) => {
    dispatch(setLoadingState(true))
    return fetch('/notifications.json')
      .then((response) => response.json())
      .then((data) => {
        const normalizedData = notificationsNormalizer(data)
        const messages = normalizedData.entities.messages
        dispatch(setNotifications(messages))
        dispatch(setLoadingState(false))
      })
  }
}
