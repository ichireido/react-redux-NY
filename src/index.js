import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

console.log(store);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "PLUS", payload: { num: 1 } });
store.dispatch({ type: "PLUS", payload: { num: 10 } });
store.dispatch({ type: "MINUS", payload: { num: 1 } });
store.dispatch({ type: "MINUS", payload: { num: 10 } });

// import { StrictMode } from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );
