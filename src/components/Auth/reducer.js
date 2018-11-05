import { actionTypes } from "../../constants";

const initialState = {
  authenticated: false,
  user: null,
  error: ""
};

export default (state = initialState, action) => {
  const { type, data, error } = action;

  switch (type) {
    case actionTypes.SIGN_IN:
      return {
        ...state,
        authenticated: !!data && !error,
        user: data,
        error: error
      };
    case actionTypes.SIGN_OUT:
      return {
        ...state,
        authenticated: false,
        user: null,
        error: ""
      };
    case actionTypes.AUTH_ERROR_RESET:
      return {
        ...state,
        error: ""
      }
    default:
      return state;
  }
};
