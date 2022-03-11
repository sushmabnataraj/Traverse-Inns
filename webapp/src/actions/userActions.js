import { CREATE_USER, RETREIVE_USER, LOGOUT_USER } from "../actionTypes";
// Action should be unique-name
export const createUserAction = (payload) => {
  return {
    type: CREATE_USER, // message to say to store..eg. Create a user
    payload, // data sent from component as actions
  };
};

export const retrieveUserAction = (payload) => {
  return {
    type: RETREIVE_USER,
    payload,
  };
};

export const logOutUserAction = (payload = {}) => {
  return {
    type: LOGOUT_USER,
    payload,
  };
};
