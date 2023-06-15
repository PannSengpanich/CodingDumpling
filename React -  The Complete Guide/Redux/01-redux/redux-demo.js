const redux = require("redux");

//! create reducer function
//TODO: specify how state should change in response to different actions
// standard JS function
// should be pure function (same input -> same output)
// should not send http request, fetching data
//? input: (Old State, Dispatched Action)
//? Output:(New State Object)
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    // return new overwrite(should) state object, not mutating object
    // must set all the other states
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

//! create store
//TODO: manage some data
// pass reducer function to store
const store = redux.createStore(counterReducer);

//TODO: react to state changes and perform additional logic or update UI
const counterSubscriber = () => {
  // give latest state snapshot
  const latestState = store.getState();
  console.log(latestState);
};

// Redux will executed when the data in the store changed
store.subscribe(counterSubscriber);

// dispatch(action)
// action is JS object
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

//TODO: dispatch -> reducer function -> subscriber function
