import Immutable from 'immutable';

export const initialState = Immutable.Map({
  filter: 'DEFAULT',
  notifications: []
});

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const notifications = action.data.map((notification) => Immutable.fromJS({
        id: notification.id,
        isRead: false,
        type: notification.type,
        value: notification.value
      }));
      return state.merge({
        notifications,
        filter: 'DEFAULT'
      });
    case MARK_AS_READ:
      const index = action.index;
      const notifications = state.get('notifications');
      const notification = notifications.get(index);
      return state.merge({
        notifications: notifications.set(index, notification.set('isRead', true))
      });
    case SET_TYPE_FILTER:
      const filter = action.filter;
      return state.merge({
        filter
      });
    default:
      return state;
  }
}
