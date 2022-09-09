import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import birdApp from "./store/birds/birds";
import { createStore } from "redux";

const store = createStore((birdApp) => ({
  birds: [
    {
      name: "robin",
      views: 1,
    },
  ],
}));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
