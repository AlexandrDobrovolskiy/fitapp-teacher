import { actionTypes as types } from "../../constants";

export const toggleDrawer = () => {
  const type = types.TOGGLE_SIDEBAR;
  return async dispatch => dispatch({ type });
}

export const registrDrawer = () => {
  const type = types.DRAWER_EXIST;
  return async dispatch => dispatch({ type });
}