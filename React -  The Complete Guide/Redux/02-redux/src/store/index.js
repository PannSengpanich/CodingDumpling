import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState1 = { counter: 0, showCounter: true };
const initialState2 = { counter: 5, modifiedCounter: false };

// can mutate the state unlike using reducer function
const counterSlice1 = createSlice({
  name: "counter1",
  initialState: initialState1,
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
const counterSlice2 = createSlice({
  name: "counter2",
  initialState: initialState2,
  reducers: {
    // receive current state and action as first and second parameter
    double(state) {
      state.counter = state.counter * 2;
    },
    half(state) {
      state.counter = state.counter / 2;
    },
    modifiedCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const rootReducer = combineReducers({
  counter1: counterSlice1.reducer,
  counter2: counterSlice2.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const counterActions1 = counterSlice1.actions;
export const counterActions2 = counterSlice2.actions;
export default store;
