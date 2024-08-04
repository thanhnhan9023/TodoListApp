export const MMKV_KEY = {
  APP_TOKEN: 'APP_TOKEN',
} as const;

export const API_CONFIG = {
  CODE_DEFAULT: -200,
  CODE_SUCCESS: 200,
  ERROR_NETWORK_CODE: -100,
  RESULT_CODE_PUSH_OUT: 401,
  TIME_OUT: 10 * 1000,
  STATUS_TIME_OUT: 'ECONNABORTED',
  CODE_TIME_OUT: 408,
};

export enum SLICE_NAME {
  APP = 'APP_',
  TODO = 'TODO',
  AUTHENTICATION = 'AUTHENTICATION_',
}
