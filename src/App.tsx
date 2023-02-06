import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from 'app/store';
import Routes from 'routes';

import 'common/i18n';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <Routes />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
