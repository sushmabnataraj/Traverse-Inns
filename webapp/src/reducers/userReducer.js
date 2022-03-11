import { CREATE_USER, LOGOUT_USER, RETREIVE_USER } from "../actionTypes";

const INITAL_STATE = {
  name: "",
  email: "",
  token: "",
};

const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        ...action.payload.user,
        token: action.payload.token,
      };
    case LOGOUT_USER:
      return {
        ...INITAL_STATE,
      };
    case RETREIVE_USER:
      return {
        ...state,
        ...action.payload.user,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default userReducer;
