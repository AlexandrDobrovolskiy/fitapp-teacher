import { call } from "lib/api";
import { 
  actionTypes as actions, 
  endpoints as api 
} from "../../constants";

const hours = 4;

export const getDaySchedule = ( token ) => {
  const type = actions.SCHEDULE_DAY;
  let today = new Date(new Date().setHours(hours));

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
