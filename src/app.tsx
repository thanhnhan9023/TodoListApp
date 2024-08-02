import React, { ReactNode, Suspense, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import { I18nextProvider } from 'react-i18next';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider as RNKeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { PortalProvider } from '@gorhom/portal';
import { useDidMount } from '@hooks';
import { AppContainer } from '@navigation/app-navigation';
import { persistore, store } from '@store/store';
import { useLoadFont } from '@theme/typography';
import I18n from '@utils/i18n/i18n';
import './app/themes/index';
import { PersistGate } from 'redux-persist/integration/react';

// const json = require('./app/assets/vector-icon/selection.json');

// const key = json.icons.reduce((pv, curr) => {
//   pv[(curr.properties.name as string).replaceAll('-', '_')] =
//     curr.properties.name;

//   return pv;
// }, {});

// console.log(
//   Object.entries(key)
//     .sort(([, a], [, b]) => a - b)
//     .reduce((r, [k, v]) => ({ ...r, [k]: v }), {}),
// );

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const KeyboardProvider = ({ children }: { children?: ReactNode }) => {
  // state
  const [loading, setLoading] = useState<boolean>(true);

  // effect
  useDidMount(() => {
    queueMicrotask(() => {
      setLoading(false);
    });
  });

  // render
  return (
    <>
      {loading ? null : (
        <RNKeyboardProvider statusBarTranslucent navigationBarTranslucent>
          {children}
        </RNKeyboardProvider>
      )}
    </>
  );
};

export const MyApp = () => {
  // state
  const isLoaded = useLoadFont();

  if (!isLoaded) {
    return null;
  }

  // render
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor={'transparent'} />
      <KeyboardProvider>
        <Provider store={store}>
          <PersistGate persistor={persistore} loading={null}>
            <I18nextProvider i18n={I18n}>
              <Suspense fallback={null}>
                <PortalProvider>
                  <GestureHandlerRootView style={styles.root}>
                    <AppContainer />
                  </GestureHandlerRootView>
                </PortalProvider>
              </Suspense>
            </I18nextProvider>
          </PersistGate>
        </Provider>
      </KeyboardProvider>
    </SafeAreaProvider>
  );
};
