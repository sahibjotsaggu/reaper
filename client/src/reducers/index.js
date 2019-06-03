import { combineReducers } from 'redux';
import newsReducer from './newsReducer';

const allReducers = combineReducers({
  newsReducer
});

export default allReducers;
