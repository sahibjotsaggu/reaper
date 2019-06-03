import isEqual from "lodash.isequal";
import { makeReducer } from "utils/redux-helpers";

const initialState = {
  isRequesting: false,
  isError: false,
  error: null,
  data: undefined
};

describe("makeReducer", () => {
  test("GET", () => {
    const reducer = makeReducer(initialState);
    const action = {
      type: "GET"
    };

    expect(reducer(initialState, action).isRequesting).toBe(true);
  });

  test("GET_SUCCESS", () => {
    const reducer = makeReducer(initialState);
    const result = {
      results: []
    };
    const action = {
      type: "GET_SUCCESS",
      payload: result
    };

    expect(reducer(initialState, action).isRequesting).toBe(false);
    expect(isEqual(reducer(initialState, action).data, result)).toBe(true);
  });

  test("GET_FAILURE", () => {
    const reducer = makeReducer(initialState);
    const action = {
      type: "GET_FAILURE",
      error: "Something is wrong."
    };
    expect(reducer(initialState, action).isError).toBe(true);
    expect(reducer(initialState, action).error).toBe("Something is wrong.");
  });
});
