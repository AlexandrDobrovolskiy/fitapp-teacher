import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { routes } from "../constants";

const PrivateRoute = ({ component, exact = false, path, authenticated }) => (
  <Route
    exact={exact}
    path={path}
    render={props =>
      authenticated ? (
        React.createElement(component, props)
      ) : (
        <Redirect
          to={{
            pathname: routes.SIGN_IN,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const { object, bool, string, func } = PropTypes;

PrivateRoute.propTypes = {
  component: func.isRequired,
  exact: bool,
  path: string.isRequired,
  authenticated: bool.isRequired,
  location: object
};

export default PrivateRoute;
