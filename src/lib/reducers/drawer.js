import { actionTypes as types } from "../../constants";

const initialState = {
  open: false,
  exist: false
}

export default (state = initialState, action) => {
  const { type } = action;
  switch(type){
    case types.DRAWER_EXIST:
      return {
        ...state,
        exist: true,
        open: false
      }
    case types.TOGGLE_SIDEBAR: 
      return {
        ...state,
        open: !state.open
      }
    default: 
     return state;
  }
}