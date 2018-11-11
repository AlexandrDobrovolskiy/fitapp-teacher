import { actionTypes as types } from "../../constants";

export const toggleDrawer = () => {
  const type = types.TOGGLE_SIDEBAR;
  return async dispatch => dispatch({ type });
}