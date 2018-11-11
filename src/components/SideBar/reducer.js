import { actionTypes as types } from "../../constants";

const initialState = {
  open: false
}

export default (state = initialState, action) => {
  const { type } = action;
  switch(type){
    case types.TOGGLE_SIDEBAR: 
      return {
        ...state,
        open: !state.open
      }
    default: 
     return state;
  }
}