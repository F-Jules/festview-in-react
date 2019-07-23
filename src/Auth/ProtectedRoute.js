import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "./Guard";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ loginStatus }) => (
      <Route
        render={props => {
          return loginStatus ? (
            <Component {...props} />
          ) : (
            <Redirect to="/home" />
          );
        }}
        {...rest}
      />
    )}
  </AuthConsumer>
);

export default ProtectedRoute;
