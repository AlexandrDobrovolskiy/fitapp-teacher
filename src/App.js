import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { routes } from "./constants";

import { HomePage, SignInPage } from "./components"

class App extends Component {
  render() {
    return (
      <Router>
        <Route extact path={routes.SIGN_IN} component={SignInPage}/>
      </Router>
    );
  }
}

export default App;
