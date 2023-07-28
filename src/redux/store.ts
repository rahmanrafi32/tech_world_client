import { configureStore } from '@reduxjs/toolkit';
import pcBuilderReducer from '@/redux/features/pcBuilderSlice'
export const store = configureStore({
    reducer: {
        pcBuilder: pcBuilderReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
