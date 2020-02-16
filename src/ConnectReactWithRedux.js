import React from "react";
import { connect } from "react-redux";
import { Increment } from "./actions/CounterActions";
import { Decrement } from "./actions/CounterActions";
import { Reset } from "./actions/CounterActions";

const reduxApp = props => {
  function increment() {
    props.increment();
  }
  function decrement() {
    props.decrement();
  }
  function reset() {
    props.reset();
  }
  return (
    <div>
      Open Console to see redux state {props.getCounterState}
      <p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("state = ", state);
  return {
    getCounterState: state.counter.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(Increment());
    },
    decrement: () => {
      dispatch(Decrement());
    },
    reset: () => {
      dispatch(Reset());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxApp);
