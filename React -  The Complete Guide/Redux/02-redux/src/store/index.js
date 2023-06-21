import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./counter";
import authReducer from "./auth";

// can mutate the state unlike using reducer function

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
