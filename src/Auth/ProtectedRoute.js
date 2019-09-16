import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "./AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLogged } = useContext(AuthContext);
  console.log();
  return (
    <Route
      render={props => {
        return isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        );
      }}
      {...rest}
    />
  );
};

export default ProtectedRoute;
