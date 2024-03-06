import { configureStore } from '@reduxjs/toolkit';
import resultsReducer from '../reducers/results.reducer';

export const store = configureStore({
  reducer: {
    resultsReducer: resultsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
