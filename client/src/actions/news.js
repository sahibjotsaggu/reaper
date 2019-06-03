import { makeActionCreator } from 'utils/redux-helpers';
import * as ActionTypes from 'actions/constants';
import { _fetch as fetch } from 'utils/fetch';

const requesting = makeActionCreator(ActionTypes.GET);
const error = makeActionCreator(ActionTypes.GET_FAILURE, 'error');
const success = makeActionCreator(ActionTypes.GET_SUCCESS, 'payload');

export const getNews = symbols => {
  return async dispatch => {
    dispatch(requesting());
    const res = await fetch.req({
      url: `news?symbols=${symbols}`
    });

    console.log(res);
    if (res.news.length) {
      dispatch(success(res.news));
    } else {
      dispatch(error('no news'));
    }
  };
};
