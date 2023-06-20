import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

const initialCounterState = { counter: 1, showCounter: true };
export let combineCounter = 1;

function addCombineCounter() {
  combineCounter++;
}
function doubleCombineCounter() {
  combineCounter = combineCounter * 2;
}
// can mutate the state unlike using reducer function
const counterSlice = createSlice({
  name: "counter1",
  initialState: initialCounterState,
  reducers: {
    // receive current state and action as first and second parameter
    increment(state) {
      addCombineCounter();
      state.counter++;
      console.log(combineCounter);
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

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
