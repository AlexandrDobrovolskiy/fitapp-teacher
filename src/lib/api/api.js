import { api as c } from "../../constants";

const composeUrl = endpoint => `${c.apiURL}/${endpoint}`;
const toJSON = data => data.json();

export const call = (endpoint, params) => {
  let body = JSON.stringify(params);
  return fetch(composeUrl(endpoint), {
    method: "post",
    body
  }).then(toJSON);
};
