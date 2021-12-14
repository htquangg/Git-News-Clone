import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { ApplicationNavigator } from '@/Navigators';
import { store } from '@/Store';

const App = () => {
  return (
    <Provider store={store}>
      <ApplicationNavigator />
    </Provider>
  );
};

export default App;
