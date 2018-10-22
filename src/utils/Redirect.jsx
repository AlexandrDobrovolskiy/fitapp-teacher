import React, { Component } from "react";

export class Redirect extends Component {
  constructor(props) {
    super();
    this.state = { ...props };
    console.log(this.state);
  }
  componentWillMount() {
    window.location = this.props.loc;
  }
  render() {
    return <section>Redirecting...</section>;
  }
}

export default Redirect;
