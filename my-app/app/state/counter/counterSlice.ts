import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface counterState {
    value: number;
}

const initialState: counterState = {
    value: 0,
}

const counterSlice =  createSlice ( {
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementAmount: (state, action: PayloadAction<number>)=> {
            state.value += action.payload
        },
        
    },
});

export default counterSlice.reducer;
export const { increment , decrement, incrementAmount} = counterSlice.actions;

