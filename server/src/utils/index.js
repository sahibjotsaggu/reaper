import fetch from "node-fetch";

export const _fetch = params => {
  return fetch(params.url, {
    method: params.method ? params.method.toUpperCase() : "GET",
    body: undefined || JSON.stringify(params.data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(jsonifyResponse);
};

const jsonifyResponse = resp => {
  return resp.json();
};
