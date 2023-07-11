import Immutable from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { notificationReducer } from '../reducers/notificationReducer';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(Immutable.Map({
      filter: 'DEFAULT',
      notifications: []
    }));
  });

  it('should return the data passed in the FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const data = [
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
    ];
    const state = notificationReducer(undefined, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data
    });
    expect(state).toEqual(Immutable.Map({
      filter: 'DEFAULT',
      notifications: data
    }));
  });

  it('should mark the notification as read when the MARK_AS_READ action is received', () => {
    const state = Immutable.Map({
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    });
    const action = {
      type: MARK_AS_READ,
      index: 2
    };
    const newState = notificationReducer(state, action);
    expect(newState).toEqual(Immutable.Map({
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: true,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    }));
  });

  it('should change the filter when the SET_TYPE_FILTER action is received', () => {
    const state = Immutable.Map({
      filter: 'DEFAULT',
      notifications: []
    });
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT'
    };
    const newState = notificationReducer(state, action);
    expect(newState).toEqual(Immutable.Map({
      filter: 'URGENT',
      notifications: []
    }));
  });
});
