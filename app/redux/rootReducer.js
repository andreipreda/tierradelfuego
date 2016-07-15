import { combineReducers } from 'redux';
import { name as forecastName, reducer as forecastReducer } from './../forecast';

export default combineReducers({
  [forecastName]: forecastReducer
});
