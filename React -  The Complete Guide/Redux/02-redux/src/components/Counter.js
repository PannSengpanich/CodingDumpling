import Component from "react";
import { counterActions } from "../store";
import classes from "./Counter.module.css";

// useSelector: allows functional components to access data from the Redux store's state
// accept selector function as arg, return selected data from the store
// useDispatch: a way to access the dispatch function, trigger state updates in the Redux store
// connect: connect class-based components to Redux (function comp can also be used), is a Higher-Order Component

// Component rerender when store's state is updated
import { useSelector, useDispatch, connect } from "react-redux";

//! FUNCTION-BASED
//will be re-rendered when there are changes in redux store
const Counter = () => {
  //dispatch an action to our redux store
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 5 }
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show ? <div className={classes.value}>{counter}</div> : <></>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

//! CLASS-BASED
// class CounterClass extends Component {
//   // 'this.props' object contains the data and functions mapped from mapStateToProps and mapDispatchToProps.

//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         {this.props.show ? (
//           <div className={classes.value}>{this.props.counter}</div>
//         ) : (
//           <></>
//         )}
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// //* ~ useSelector
// // map redux state to props, will be received in the component
// const mapStateToProps = (state) => {
//   return { counter: state.counter, show: state.showCounter };
// };

// //* ~ useDispatch
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };
// export default connect(mapStateToProps,mapDispatchToProps)(CounterClass);
export default Counter;
