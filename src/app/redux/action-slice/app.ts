import { SLICE_NAME } from '@common/constant';
import { AppState } from '@model/app';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialAppState: AppState = {
  profile: {},
  token: undefined,
  /**
   * default true to load app
   */
  loadingApp: false,
};

const appSlice = createSlice({
  name: SLICE_NAME.APP,
  initialState: initialAppState,
  reducers: {
    setToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
    },
    setAppProfile: (state, { payload }: PayloadAction<unknown>) => {
      state.profile = payload;
    },
    startLoadApp: state => {
      state.loadingApp = true;
    },
    endLoadApp: state => {
      state.loadingApp = false;
    },
    logout: state => {
      state.token = undefined;

      state.profile = {};
    },
  },
});

export const { reducer: appReducer, actions: appActions } = appSlice;
