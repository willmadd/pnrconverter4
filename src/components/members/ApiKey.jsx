import React, { Component } from "react";
import sha256 from "js-sha256";
import * as api from "../../db/api";

class ApiKey extends Component {
  state = {
    token: ""
  };

  getToken = id => {
    api
      .getToken(id)
      .then(res => {
        this.setState({
          token: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let { id } = this.props.user;
    let { token } = this.state;
    return (
      <div>
        Public API Key: {sha256(id + "pnrc")}
        Private API Key:{" "}
        {token ? (
          `${token}`
        ) : (
          <a onClick={() => this.getToken(id)}>Click here to reveal</a>
        )}
      </div>
    );
  }
}

export default ApiKey;
