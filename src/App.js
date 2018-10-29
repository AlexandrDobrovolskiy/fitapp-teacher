import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { routes } from "./constants";

import { HomePage, SignInPage, AppBar } from "./components";
import { PrivateRoute } from "./utils";

const App = ({ authenticated, checked }) => (
  <Router>
    {checked && (
      <>
        {authenticated && <AppBar />}
        <Route extact path={routes.SIGN_IN} component={SignInPage} />
        <PrivateRoute
          exact
          path={routes.HOME}
          component={HomePage}
          authenticated={authenticated}
        />
      </>
    )}
  </Router>
);

export default App;
