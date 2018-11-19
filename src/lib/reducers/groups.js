import { actionTypes } from "../../constants";

const initialState = {
  groups: [],
  groupsLoaded: false,
  error: ""
}

export default (state = initialState, action) => {
  const { type, data, error } = action;
  
  switch(type){
    case actionTypes.GET_USER_GROUPS: 
      return {
        ...state,
        groupsLoaded: !!data,
        groups: !error && data,
        error
      }
    default: 
      return state; 
  }
}