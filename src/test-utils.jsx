// create utils folder
import React from 'react';
import store from './App/store';
import { Provider } from 'react-redux';

export const renderWithProviders = (component) => {
  <Provider store={store}>{component}</Provider>;
};
