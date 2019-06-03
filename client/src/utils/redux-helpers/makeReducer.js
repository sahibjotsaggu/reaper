import * as ActionTypes from 'actions/constants';

/**
 * makeReducer
 *
 * This function helps to reduce boilerplate by returning
 * reducer functions.
 *
 * @example
 * const state = {...};
 * makeReducer(state);
 *
 * @param {object} initialState
 * @return {function}
 */

export default initialState => {
  return (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.GET:
        return Object.assign({}, state, {
          isRequesting: true,
          isError: false,
          error: null
        });
      case ActionTypes.GET_SUCCESS:
        return Object.assign({}, state, {
          data: action.payload,
          isRequesting: false,
          isError: false
        });
      case ActionTypes.GET_FAILURE:
        return Object.assign({}, state, {
          isRequesting: false,
          isError: true,
          error: action.error
        });
      default:
        return state;
    }
  };
};
