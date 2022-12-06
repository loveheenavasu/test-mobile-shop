import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({
  component,
  path,
  ...rest
}) => {

  const role = localStorage.getItem('role');

  return role === 'admin' ? (
    <Route exact path={path} component={component} {...rest} />
  ) : (
      <Redirect to={"/"} />
    );
};

export default AdminRoute;