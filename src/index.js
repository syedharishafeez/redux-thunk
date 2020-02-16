import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ConfigureStore from "./store/ConfigureStore";
import { Increment } from "./actions/CounterActions";
import { Provider } from "react-redux";
import ConnectReactWithRedux from "./ConnectReactWithRedux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

console.log("store = ", ConfigureStore.getState());
ConfigureStore.dispatch(Increment({ incrementBy: 5 }));
console.log("store = ", ConfigureStore.getState());

const jsx = () => {
  return (
    <Provider store={ConfigureStore}>
      <ConnectReactWithRedux />;
    </Provider>
  );
};

ReactDOM.render(jsx(), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
