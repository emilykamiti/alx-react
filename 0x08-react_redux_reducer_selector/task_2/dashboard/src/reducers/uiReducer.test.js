import uiReducer from './uiReducer';

import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS } from '../actions/uiActionTypes';

describe('uiReducer', () => {
    it('should return the initial state when no action is passed' , () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        };
        const nextState = uiReducer(undefined, {});
        expect(nextState).toEqual(initialState);
    });

    it('should return the initial state when the action SELECT_COURSE is passed' , () =>{
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        };

        const action = {
            type: 'SELECT_COURSE'
        };

        const nextState = uiReducer(initialState, action);
        expect(nextState).toEqual(initialState);

    });

    it('should change the isNotificationDrawerVisible property to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
        const initialState = {
          isNotificationDrawerVisible: false,
          isUserLoggedIn: false,
          user: {}
        };
    
        const action = {
          type: DISPLAY_NOTIFICATION_DRAWER
        };
    
        const nextState = uiReducer(initialState, action);
    
        expect(nextState.isNotificationDrawerVisible).toEqual(true);
      });
});