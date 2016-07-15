import { applyMiddleware, createStore } from 'redux';
import sagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import rootReducer from './rootReducer';
import { sagasToRun } from './sagas';

const devMiddlewares = [];
const saga = sagaMiddleware();

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  devMiddlewares.push(logger);
}

export default createStore(
  rootReducer,
  {},
  applyMiddleware(saga, ...devMiddlewares)
);

saga.run(sagasToRun);
