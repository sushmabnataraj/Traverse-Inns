import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import notificationReducer from "../reducers/notificationReducer";

// All reducers are combined into one object and is provided to the store
const rootReducer = combineReducers({
  user: userReducer,
  notification: notificationReducer,
});

export default rootReducer;
