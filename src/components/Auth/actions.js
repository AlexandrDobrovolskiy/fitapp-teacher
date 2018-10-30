import { sessionService } from "redux-react-session";


export const doExample = () => {
  return async dispatch => {
    const user = await Promise.resolve("This is new data");
    const error = await Promise.resolve("This is new error");

    return dispatch({
      type: "EXAMPLE",
      data: user,
      error
    })
  }
}