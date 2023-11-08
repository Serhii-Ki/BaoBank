import userReducer from "./userReducer";
import dashboardReducer from "./dashboardReducer";

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
    dashboard: dashboardReducer
});

export default rootReducer;