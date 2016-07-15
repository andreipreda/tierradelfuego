import { merge } from 'ramda';
import { APP_ERROR, TIMEOUT_ERROR, FORECAST_DATA } from './actionTypes';
import { processApiData } from './logic';

export default (
  state = {
    list: [],
    errors: []
  },
  action = null
) => {
  switch (action.type) {
    case (FORECAST_DATA):
      return merge(state, { list: processApiData(action.list) });
    case (APP_ERROR):
    case (TIMEOUT_ERROR):
      return merge(state, { errors: [action.error, ...state.errors] });
    default:
      return state;
  }
};
