import { actionTypes as types } from "../../constants";

const initialState = {
  today: [],
  error: ""
}

export default (state = initialState, action) => {
  const { type, data, error } = action;
  switch(type){
    case types.SCHEDULE_DAY: 
      return {
        ...state,
        today: data,
        error
      }
    default:
      return state;
  }
}