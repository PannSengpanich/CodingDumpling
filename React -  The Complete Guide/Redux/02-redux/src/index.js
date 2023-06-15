import React from "react";
import ReactDOM from "react-dom/client";
//provide redux store to react app
import { Provider } from "react-redux";
import store from "./store/index";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/*every components nested inside Provider can access store */}
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
