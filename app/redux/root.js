import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Wrap } from './../wrap';

export const Root = () => (
  <Provider store={store}>
    <Wrap />
  </Provider>
);
