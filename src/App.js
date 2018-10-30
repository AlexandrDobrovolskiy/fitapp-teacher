import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { MuiThemeProvider } from '@material-ui/core/styles';

import { PrivateRoute } from "./lib/utils";
import { routes } from "./constants";

import { HomePage, SignInPage, AppBar } from "./components";
import { defaultTheme } from "./lib/themes";

const App = ({ authenticated, checked }) => (
  <Router>
    {checked && (
      <MuiThemeProvider theme={defaultTheme}>
        {authenticated && <AppBar />}
        <Route extact path={routes.SIGN_IN} component={SignInPage} />
        <PrivateRoute
          exact
          path={routes.HOME}
          component={HomePage}
          authenticated={authenticated}
        />
      </MuiThemeProvider>
    )}
  </Router>
);

const mapState = ({ session }) => ({
  authenticated: session.authenticated,
  checked: session.checked
})

export default connect(mapState)(App);
