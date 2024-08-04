/* eslint-disable no-inline-comments */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from '@reduxjs/toolkit';
import { allReducer } from '@store/all-reducers';
import { reduxPersistStorage } from '@utils/storage';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import { persistReducer, persistStore } from 'redux-persist';

import { listenerMiddleware } from '../listener';
import { SLICE_NAME } from '@common/constant';

Reactotron.configure({ name: 'todoList' }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux()) // add redux plugin
  .connect(); // let's connect!

// import {reduxPersistStorage} from '@utils';

/**
 * Use this instead storage of reduxPersist
 * import {persistStore, persistReducer} from 'redux-persist';
 * import {reduxPersistStorage} from '@utils';
 * const persistedReducer = persistReducer(
 *   {key: 'root', storage: reduxPersistStorage},
 *   allReducer,
 * );
 */

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: reduxPersistStorage,
    whitelist: [SLICE_NAME.TODO],
  },
  allReducer,
);

const devMode = __DEV__;

const middleware = [] as any[];

export const store = configureStore({
  reducer: persistedReducer,
  devTools: devMode,
  enhancers: getDefaultEngancers =>
    getDefaultEngancers().concat(Reactotron.createEnhancer()),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false })
      .prepend(listenerMiddleware.middleware)
      .concat(middleware),
});

export const persistore = persistStore(store);
/**
 * export const persistore = persistStore(store);
 */
