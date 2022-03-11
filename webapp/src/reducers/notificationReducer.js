import {
  SUCCESS_NOTIFICATION,
  RESET_NOTIFICATION,
  ERROR_NOTIFICATION,
} from "../actionTypes";

const INITAL_STATE = {
  message: "",
  severity: "",
};

const notificationReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SUCCESS_NOTIFICATION:
      return {
        ...state,
        message: action.payload,
        severity: "success",
      };
    case ERROR_NOTIFICATION:
      return {
        ...state,
        message: action.payload,
        severity: "error",
      };
    case RESET_NOTIFICATION:
      return {
        ...INITAL_STATE,
      };
    default:
      return state;
  }
};

export default notificationReducer;
