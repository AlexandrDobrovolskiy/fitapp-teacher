import { call } from "lib/api";
import { endpoints, actionTypes } from "../../constants";

export const getGroups = (token) => {
  const type = actionTypes.GET_USER_GROUPS;
  var data, error;

  return async dispatch => {
    const json = await call(endpoints.GROUPS_LIST, { token });

    if(!json.status){
      error = json.error;
    }else{
      data = json.result.groups;
    }

    return dispatch({
      type,
      data,
      error
    })
  }
}