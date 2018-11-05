import { call } from "lib/api";
import { endpoints, actionTypes } from "../../constants";
import { persistor } from "configureStore";

export const signIn = (phone, password) => {
  const type = actionTypes.SIGN_IN;

  return async dispatch => {
    const json = await call(endpoints.USERS_LOGIN, { phone, password });
    let error, data;

    if (!json.status) {
      error = json.error;
    } else {
      data = json.result;
    }

    return dispatch({ type, data, error });
  };
};

export const signOut = token => {
  const type = actionTypes.SIGN_OUT;
  persistor.purge()

  return async dispatch => {
    const json = await call(endpoints.USERS_LOGOUT, { token });
    let data = json;
    let error = null;
    console.log(json);
    return dispatch({ type, data, error });
  };
};

export const resetError = () => {
  const type = actionTypes.AUTH_ERROR_RESET;
  return dispath => dispath({
    type
  });
}