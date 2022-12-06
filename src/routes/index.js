import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Switch } from "react-router-dom";
import Spinner from '../components/Spinner';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = React.lazy(() => import("./home-route"));
const AdminPages = React.lazy(() => import("./admin-route.js"));

const AppRoot = () => {
  return (
    <React.Suspense fallback={<div><Spinner /></div>}>
      <ToastContainer />
      <Switch>
        <Route path="/admin" component={AdminPages} />
        <Route path="/" component={HomePage} />
      </Switch>
    </React.Suspense>
  );
};

export default AppRoot;