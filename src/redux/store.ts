import { configureStore } from '@reduxjs/toolkit';
import pcBuilderReducer from '@/redux/features/pcBuilderSlice'
export const store = configureStore({
    reducer: {
        pcBuilder: pcBuilderReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
