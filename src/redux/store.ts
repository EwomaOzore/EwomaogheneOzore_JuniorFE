import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocketSlice';

export const store = configureStore({
    reducer: {
        rockets: rocketReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
