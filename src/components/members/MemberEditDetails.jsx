import React, { Component } from "react";
import * as api from "../../db/api";
import Loader from "../Loader";
import UpdateCardForm from "../stripe/UpdateCardForm";

class MemberEditDetails extends Component {
  state = {
    user: {
      agencyname: "",
      name: "",
      iatacode: "",
      address_1: "",
      address_2: "",
      city: "",
      country: "",
      email: "",
      phone: ""
    },
    loading: false,
    message: "",
    paymentMethod: false
  };

  componentDidMount = () => {
    let { user } = this.props;
    this.setState({
      user
    });
  };

  showPaymentMethod = () => {
    let bool = !this.state.paymentMethod;
    this.setState({
      paymentMethod: bool
    });
  };

  handleChange = e => {
    let { name, value } = e.target;
    let user = {
      ...this.state.user,
      [name]: value
    };
    this.setState({
      user
    });
  };

setMessage = (message) =>{
  this.setState({
    message,
  })
}

  cancelChange = () => {
    this.setState({
      user: this.props.user
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let { user } = this.state;
    this.setState(
      {
        loading: true
      },
      this.changeUserDetails(user)
    );
  };

  changeUserDetails = user => {
    api.updateAllUserDetails(user).then(res => {
      this.props.updateUser();
      this.setState({
        loading: false,
        message: "Your Information has been updated"
      });
    });
  };

  render() {
    let { user, paymentMethod } = this.state;
    console.log(user.id);
    return (
      <div className="member-content-area edit-details">
        <h3>
          If you need to edit your account details, you're in the right place
        </h3>
        <h3 className="warning">{this.state.message}</h3>
        <form action="">
          <label htmlFor="agencyname">
            Company Name:
            <input
              name="agencyname"
              type="text"
              value={user.agencyname}
              onChange={e => this.handleChange(e)}
            />
          </label>

          <label htmlFor="name">
            Contact Name:
            <input
              name="name"
              type="text"
              value={user.name}
              onChange={e => this.handleChange(e)}
            />
          </label>

          <label htmlFor="iatacode">
            IATA Code:
            <input
              name="iatacode"
              type="text"
              value={user.iatacode || ""}
              onChange={e => this.handleChange(e)}
            />
          </label>

          <label htmlFor="address_1">
            Address Line 1:
            <input
              name="address_1"
              type="text"
              value={user.address_1}
              onChange={e => this.handleChange(e)}
            />
          </label>

          <label htmlFor="address_2">
            Address Line 2:
            <input
              name="address_2"
              type="text"
              value={user.address_2 || ""}
              onChange={e => this.handleChange(e)}
            />
          </label>

          <label htmlFor="city">
            City:
            <input
              name="city"
              type="text"
              value={user.city}
              onChange={e => this.handleChange(e)}
            />
          </label>

          <label htmlFor="country">
            Country:
            <input
              name="country"
              type="text"
              value={user.country}
              onChange={e => this.handleChange(e)}
            />
          </label>

          <label htmlFor="email">
            Email Address:
            <input
              name="email"
              type="text"
              value={user.email}
              onChange={e => this.handleChange(e)}
            />
          </label>

          <label htmlFor="phone">
            Phone:
            <input
              name="phone"
              type="text"
              value={user.phone}
              onChange={e => this.handleChange(e)}
            />
          </label>
          {this.state.loading ? (
            <Loader />
          ) : (
            !paymentMethod && (
              <div className="edit-button-container">
                <button
                  type="button"
                  className="button secondary"
                  onClick={this.cancelChange}
                >
                  Cancel Changes
                </button>
                <button
                  className="button"
                  onClick={this.handleSubmit}
                  type="button"
                >
                  Save Changes
                </button>
                {user.stripe_id && user.card_last_four && (
                  <button
                    className="third button"
                    type="button"
                    onClick={this.showPaymentMethod}
                  >
                    Change Payment Method
                  </button>
                )}
              </div>
            )
          )}
        </form>
        {paymentMethod && (
          <UpdateCardForm
            currentUser={user}
            updateUser={this.props.updateUser}
            showPaymentMethod={this.showPaymentMethod}
            setMessage={this.setMessage}
          />
        )}
      </div>
    );
  }
}

export default MemberEditDetails;
