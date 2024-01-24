import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { trootfindrApi } from './api';
import authslice from './slice/authslice';

export const makeStore = (): any => {
  return configureStore({
    reducer: {
      auth: authslice,
      [trootfindrApi.reducerPath]: trootfindrApi.reducer,
    },
    middleware: (gDM) => gDM().concat(trootfindrApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
