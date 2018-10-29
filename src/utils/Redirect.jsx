import React, { Component } from "react";

export class Redirect extends Component {
  componentDidMount() {
    window.location = this.props.loc;
  }
  
  render() {
    return <section>Redirecting...</section>;
  }
}

export default Redirect;
