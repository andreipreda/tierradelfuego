import { race, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { isNil } from 'ramda';
import { fetchWrap, buildReqUrl } from './../httpReq';
import { APP_ERROR, TIMEOUT_ERROR, FORECAST_DATA } from './actionTypes';
import { API_RESPONSE_TIMEOUT, forecast5Endpoint, apiConfig } from './constants';

export function* retrieveWeather() {
  try {
    const { response } = yield race({
      response: call(
        fetchWrap,
        'GET',
        buildReqUrl(forecast5Endpoint, apiConfig)
      ),
      timeout: call(delay, API_RESPONSE_TIMEOUT)
    });
    if (!isNil(response)) {
      const { list } = response;

      yield put({ type: FORECAST_DATA, list });
    } else {
      yield put({ type: TIMEOUT_ERROR, error: 'TIMEOUT API DIDN\'T RESPOND IN TIME' });
    }
  } catch (error) {
    yield put({ type: APP_ERROR, error: String(error) });
  }
}
