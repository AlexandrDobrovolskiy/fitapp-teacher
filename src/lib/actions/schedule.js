import { call } from "lib/api";
import { actionTypes as actions, endpoints as api } from "../../constants";

export const getDaySchedule = token => {
  const type = actions.SCHEDULE_DAY;
  let today = new Date(new Date().setDate(new Date().getDate()));

  return async dispatch => {
    const json = await call(api.CLASSES_LIST, {
      token,
      date_from: today,
      date_to: today
    });

    let error, data;

    if (!json.status) {
      error = json.error;
    } else {
      data = json.result.classes;
    }

    return dispatch({ type, data, error });
  };
};

export const editLesson = (token, params) => {
  const actionType = actions.SCHEDULE_EDIT;

  return async dispatch => {
    const json = await call(api.CLASSES_UPDATE, {
      token,
      ...params
    });

    let error = "";

    if (!json.status) {
      error = json.error;
    }

    return dispatch({
      type: actionType,
      data: json.status,
      error
    });
  };
};

export const deleteLesson = (token, params) => {
  const type = actions.SCHEDULE_DELETE;

  return async dispatch => {
    const json = await call(api.CLASSES_DELETE, {
      token,
      ...params
    });

    let error = "";

    if (!json.status) {
      error = json.error;
    }

    return dispatch({
      type,
      data: json.status,
      error
    });
  }
};

export const createLesson = (token, params) => {
  const actionType = actions.SCHEDULE_CREATE;

  return async dispatch => {
    const json = await call(api.CLASSES_CREATE, {
      token,
      ...params
    });

    let error = "";

    if (!json.status) {
      error = json.error;
    }

    return dispatch({
      type: actionType,
      data: json.status,
      error
    });
  };
};
