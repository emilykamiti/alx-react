//Defines the root reducer for the app

import { courseReducer } from "./courseReducer";
import { notificationReducer } from "./notificiationReducer";
import { uiReducer } from "./uiReducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    courses: courseReducer,
    notifications: notificationReducer,
    ui: uiReducer
});