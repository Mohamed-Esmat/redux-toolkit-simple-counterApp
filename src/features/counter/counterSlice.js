import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
};

// starting to create our counter slice
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // This is were we would name all of our actions
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    reset: (state)=> {
        state.counter=0;
    },
    incrementByAmount: (state,action)=>{
        state.counter +=action.payload
    }
  },
});

export const { increment, decrement,reset ,incrementByAmount} = counterSlice.actions;


export default counterSlice.reducer;