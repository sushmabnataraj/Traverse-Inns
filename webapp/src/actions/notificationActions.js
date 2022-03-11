import {
  SUCCESS_NOTIFICATION,
  ERROR_NOTIFICATION,
  RESET_NOTIFICATION,
} from "../actionTypes";

export const successNotification = (payload) => {
  return {
    type: SUCCESS_NOTIFICATION,
    payload,
  };
};

export const errorNotification = (payload) => {
  return {
    type: ERROR_NOTIFICATION,
    payload,
  };
};

export const resetNotifications = () => {
  return {
    type: RESET_NOTIFICATION,
  };
};
