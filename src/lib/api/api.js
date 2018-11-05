import { api as c } from "../../constants";
import { createHash } from "./hash";

const composeUrl = endpoint => `${c.apiURL}/${endpoint}`;
const toJSON = data => data.json();

export const call = (endpoint, params) => {
  const xHash = createHash(JSON.stringify(params));
  return fetch(composeUrl(endpoint), {
    headers: {
      "X-Hash": xHash
    },
    body: JSON.stringify(params),
    method: "post"
  }).then(toJSON);
};
