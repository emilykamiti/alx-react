import * as reduxNoti  from '../../notifications.json';

function getAllNotificationsByUser(userId) {
    return reduxNoti.default.filter((contextObj) => contextObj.author.id === userId).map(({ context }) => context);
}

export default getAllNotificationsByUser;