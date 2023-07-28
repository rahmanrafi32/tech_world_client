import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: null,
};

const pcBuilderSlice = createSlice({
    name: 'pcBuilder',
    initialState,
    reducers: {},
});

export const {} = pcBuilderSlice.actions;
export default pcBuilderSlice.reducer;
