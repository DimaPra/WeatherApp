import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { RootNavigator } from './navigation/rootNavigator';
import { store } from './repository';

export const App:FC = () => {

  return (
    <Provider store={store}>
      <RootNavigator/>
      </Provider>
  );
};


