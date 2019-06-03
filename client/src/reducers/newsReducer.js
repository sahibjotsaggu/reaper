import { makeReducer } from "utils/redux-helpers";

const initialState = {
  isRequesting: false,
  isError: false,
  error: null,
  data: undefined
};

const newsReducer = makeReducer(initialState);

export default newsReducer;
