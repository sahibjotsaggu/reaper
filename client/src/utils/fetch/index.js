/**
 * The Fetch API provides an interace for fetching resources.
 *
 * @param {params} {host, method, url, data} Object of request parameters.
 * @returns {Promise} Returns a resolved Promise to the response of a request
 * or a rejected promise if incorrect parameters are given.
 * @example
 * fetch.req({
 *  host: 'https://api.iextrading.com/1.0', (optional)
 *  method: 'GET', (required)
 *  url: 'stock/aapl/company', (required)
 *  data: { ... } (optional, if `method` === `POST`)
  });
 *
 */
export const _fetch = {
  req: params => {
    if (!params.url) {
      return Promise((resolve, reject) => {
        reject();
      });
    }

    let headers = { 'Content-Type': 'application/json' };

    params.host = params.host || 'http://localhost:8080/api';
    return fetch(`${params.host}/${params.url}`, {
      method: params.method ? params.method.toUpperCase() : 'GET',
      body: params.method === 'GET' ? undefined : JSON.stringify(params.data),
      headers
    }).then(jsonifyResponse);
  }
};

const jsonifyResponse = resp => {
  return resp.json();
};
