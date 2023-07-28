import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cpu: {
        productName: null,
        image: '',
        price: null
    },
    motherboard: {
        productName: null,
        image: '',
        price: null
    },
    ram: {
        productName: null,
        image: '',
        price: null
    },
    powerSupply: {
        productName: null,
        image: '',
        price: null
    },
    storage: {
        productName: null,
        image: '',
        price: null
    },
    monitor: {
        productName: null,
        image: '',
        price: null
    }
};

const pcBuilderSlice = createSlice({
    name: 'pcBuilder',
    initialState,
    reducers: {
        addCpu: (state, action) => {
            state.cpu = action.payload
        },
        addMotherboard: (state, action) => {
            state.motherboard = action.payload
        },
        addRam: (state, action) => {
            state.ram = action.payload
        },
        addPowerSupply: (state, action) => {
            state.powerSupply = action.payload
        },
        addMonitor: (state, action) => {
            state.monitor = action.payload
        },
        addStorage: (state, action) => {
            state.storage = action.payload
        },
    },
});

export const {addCpu, addMotherboard, addRam, addPowerSupply, addMonitor, addStorage} = pcBuilderSlice.actions;
export default pcBuilderSlice.reducer;
