import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import AppRoutes from "./routes";
import Maintenance from './components/Maintenance/mtenance';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>,

  // <Maintenance/>,
  document.getElementById("root")
);
