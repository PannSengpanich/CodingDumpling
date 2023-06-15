import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// can mutate the state unlike using reducer function
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // receive current state and action as first and second parameter
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//store
const store = configureStore({ reducer: counterSlice.reducer });

//contains generated action creators for each reducer action
export const counterActions = counterSlice.actions;
export default store;
