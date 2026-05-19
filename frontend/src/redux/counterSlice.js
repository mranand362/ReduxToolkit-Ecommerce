import { createSlice } from "@reduxjs/toolkit";


export let counterSlice = createSlice(
    {
        name: "counter",
        initialState: {
            count: 0,
        },
        reducers: {
            increment: (state) => {
                state.count += 1;
            },
            decrement: (state) => {
                state.count -= 1;
            },
            incrementByAmount: (state, action) => {
                state.count += action.payload;
            },
        },
    }
);
export let { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;    