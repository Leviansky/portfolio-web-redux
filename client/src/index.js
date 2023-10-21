import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App.js";

// import react-router-dom
import { BrowserRouter as Router } from "react-router-dom";

// import redux
import { compose, applyMiddleware, legacy_createStore } from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import reducers from "./reducers";

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);