import * as data from '../../notifications.json';
import { normalize, schema } from "normalizr";

/**
 * Normalizes the notification data using the specified schema.
 * @param {Object} data - The notification data to be normalized.
 * @returns {Object} - The normalized data.
 */
export function notificationsNormalizer(data) {
  const notification = new schema.Entity("notifications")
  const normalizedData = normalize(data, [notification])
  return normalizedData
}

const user = new schema.Entity("users")
const message = new schema.Entity("messages", {}, {
  idAttribute: "guid"
})
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
})

// Normalize the data using the notification schema
export const normalizedData = normalize(data.default, [notification])


export const getAllNotificationsByUser = (userId) => {
  let userNotifs = []
  const notifications = normalizedData.entities.notifications
  const messages = normalizedData.entities.messages
  const NotifIdList = normalizedData.result.filter((notifId) => notifications[notifId].author == userId)
  NotifIdList.forEach((id) => userNotifs.push(messages[notifications[id].context]))
  return userNotifs
}
