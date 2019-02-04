import React, { Component } from "react";

class BaseMapElement extends Component {
  componentDidMount() {
    console.log(this.props.context);
  }

  render() {
    return null;
  }
}

export default BaseMapElement;