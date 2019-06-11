import React, { Component } from "react";
import * as api from "../../db/api";

class SelectPlan extends Component {
  state = {
    apiOption: "free",
    redirect: false
  };

  handleChange = event => {
    let { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
      let apiOption = this.state.apiOption;
      let user = {
          ...this.props.user,
          api:apiOption
        };
console.log(apiOption);
console.log(user);
    console.log("handle submit activated");
    event.preventDefault();
    api.updateUser(user);
    this.props.updateUser(user);
  };

  render() {
    return (
      <form
        onSubmit={e => {
          this.handleSubmit(e);
        }}
      >
        <h2>Looks Like it's your first time here! Please choose a plan!</h2>
        <fieldset>
          <label className="api-choice-container">
            Free - 12 Requests per day
            <input
              type="radio"
              checked={this.state.apiOption === "free"}
              name="apiOption"
              value="free"
              onChange={this.handleChange}
            />
            <span className="checkmark" />
          </label>
          <label className="api-choice-container">
            5,000 Requests per Month - £17.00
            <input
              type="radio"
              name="apiOption"
              value="5000"
              checked={this.state.apiOption === "5000"}
              onChange={this.handleChange}
            />
            <span className="checkmark" />
          </label>
          <label className="api-choice-container">
            10,000 Requests per Month - £32.00
            <input
              type="radio"
              name="apiOption"
              value="10000"
              checked={this.state.apiOption === "10000"}
              onChange={this.handleChange}
            />
            <span className="checkmark" />
          </label>

          <label className="api-choice-container">
            100,000 Requests per Month - £180.00
            <input
              type="radio"
              name="apiOption"
              value="100000"
              checked={this.state.apiOption === "100000"}
              onChange={this.handleChange}
            />
            <span className="checkmark" />
          </label>

          <label className="api-choice-container">
            500,000 Requests per Month - £700.00
            <input
              type="radio"
              name="apiOption"
              value="500000"
              checked={this.state.apiOption === "500000"}
              onChange={this.handleChange}
            />
            <span className="checkmark" />
          </label>

          <label className="api-choice-container">
            1,000,000 Requests per Month - £950.00
            <input
              type="radio"
              name="apiOption"
              value="1000000"
              onChange={this.handleChange}
              checked={this.state.apiOption === "1000000"}
            />
            <span className="checkmark" />
          </label>

          <label className="api-choice-container">
            5,000,000 Requests per Month - £3000.00
            <input
              type="radio"
              name="apiOption"
              value="5000000"
              checked={this.state.apiOption === "5000000"}
              onChange={this.handleChange}
            />
            <span className="checkmark" />
          </label>

          <label className="api-choice-container">
            10,000,000 Requests per Month - £4500.00
            <input
              type="radio"
              name="apiOption"
              value="10000000"
              checked={this.state.apiOption === "10000000"}
              onChange={this.handleChange}
            />
            <span className="checkmark" />
          </label>
        </fieldset>
        <button type="submit">
          {this.state.apiOption === "free" ? "Sign Up" : "Go to Checkout"}
        </button>
      </form>
    );
  }
}

export default SelectPlan;
