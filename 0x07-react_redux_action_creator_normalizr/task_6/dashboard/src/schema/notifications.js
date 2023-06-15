// Importing Dependencies

import * as reduxNoti from '../../notifications.json';
import { normalize, schema } from "normalizr";

// Filtering Notifications by User ID

/**
 * Retrieves all notifications associated with a specific user ID.
 * @param {string} userId - The ID of the user.
 * @returns {Array} An array containing the extracted context values of the notifications.
 */
function getAllNotificationsByUser(userId) {
    return reduxNoti.default.filter((contextObj) => contextObj.author.id === userId).map(({ context }) => context);
}

// Defining Schema Entities

// Schema entity for user data
const user = new schema.Entity("users");

// Schema entity for message data
const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

// Defining Notification Schema

// Schema entity for notification data
const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
});

// Normalizing Data

// Normalize the reduxNoti.default data using the defined schema entities
const normalizedData = normalize(reduxNoti.default, [notification]);

// Exporting Normalized Data

export { normalizedData };

export function getAllNotificationsByUser(userId) {
    const notifications = normalizedData.entities.notifications;
    const messages = normalizedData.entities.messages;
  
    const notificationsByUser = [];
  
    for (const property in notifications) {
      if (notifications[property].author === userId) {
        notificationsByUser.push(messages[notifications[property].context]);
      }
    }
  
    return notificationsByUser;
  }
