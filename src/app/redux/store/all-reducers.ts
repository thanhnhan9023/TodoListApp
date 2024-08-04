import { SLICE_NAME } from '@common/constant';
import { appReducer, authenticationReducer, todoReducer } from '@redux-slice';
import { combineReducers } from '@reduxjs/toolkit';

export const allReducer = combineReducers({
  app: appReducer,
  [SLICE_NAME.TODO]: todoReducer,
  authentication: authenticationReducer,
});

export type RootState = ReturnType<typeof allReducer>;
