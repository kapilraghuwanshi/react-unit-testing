import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TestElements from "./components/TestElements";
import TestEvents from "./components/TestEvents";
import TestAsync from "./components/TestAsync";
import reportWebVitals from "./reportWebVitals";
import TestRedux from "./components/TestRedux";
import TestContext from "./components/TestContext";
import TestRouter from "./components/TestRouter";
import TextAxios from "./components/TextAxios";

import { Provider } from "react-redux";
import { reducer } from "./components/reducer";
import { legacy_createStore as createStore } from "redux";

import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    Elements
    <br />
    <TestElements />
    <br />
    Events
    <br />
    <TestEvents />
    <br />
    Async
    <br />
    <TestAsync />
    <br />
    State Mgmt
    <br />
    <br />
    <Provider store={store}>
      <TestRedux />
    </Provider>
    <br />
    <br />
    Context API
    <TestContext />
    <br />
    <br />
    TestRouter
    <br />
    <br />
    <BrowserRouter>
      <TestRouter />
    </BrowserRouter>
    <br />
    <br />
    <TextAxios/> 
    <br />
    <br />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
