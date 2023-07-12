import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { Map, setIn } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";

/**
 * Initial state for the notification reducer.
 * @type {Map} - Immutable Map containing the initial state.
 */
export const initialState = Map({
  notifications: [],
  filter: "DEFAULT"
})

export function notificationReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      // Normalize the incoming notification data
      const notifData = notificationsNormalizer(action.data)
      const notifs = notifData.entities.notifications

      // Set isRead property of each notification to false
      notifData.result.map((id) => notifs[id].isRead = false)

      // Merge the normalized data into the state
      return state.merge(notifData.entities)
    }
    case MARK_AS_READ:
      // Mark a specific notification as read
      return setIn(state.toJS(), ["notifications", action.index, "isRead"], true)
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter)
    default:
      return state
  }
}
