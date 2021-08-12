import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import { Provider } from "react-redux";
import App from "./containers/App";

const middlewares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

console.log(store);
store.subscribe(() => {
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
