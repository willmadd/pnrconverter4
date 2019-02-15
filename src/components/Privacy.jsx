import React, { Component } from 'react';
import Header from "./Header";
import Nav from "./Nav";




class Privacy extends Component {
  render() {
    return (
      <div>
      <Header />
      <Nav value={"en"} />

        <div className="blurb">

        Privacy Policy
        </div>
      </div>
    );
  }
}

export default Privacy;