import React, { Component } from "react";
import Loader from "../Loader";
import * as api from "../../db/api";

class CancelPlan extends Component {
  state = {
    loading: false
  };

  cancelSub = () => {
    let { user } = this.props;
    let newUser = {
      ...user,
      api: 1
    };
    console.log(newUser);
    this.setState(
      {
        loading: true
      },
      this.updateUserAndCancel(newUser)
    );
  };

  updateUserAndCancel = user => {
    console.log(user);
    this.props.cancelSubscription(user.id);
    this.props.updateUser(user);
    api.updateUser(user);
  };

  render() {
    return (
      <div className="cancel-plan-overlay">
        <div className="cancel-plan-box">
          <h3 className="warning">
            Are you Sure you want to cancel your API subscription with PNR
            Converter?
          </h3>
          <p className="warning">
            Cancellations happen immediately. Once you confirm you wish to
            cancel you will be moved onto our basic plan, all future
            payments will be cancelled. You will no longer be able to use our
            API unless you resubscribe.
          </p>
          {this.state.loading === false ? (
            <div>
              <button
                className="button secondary"
                onClick={this.props.toggleCancelWarning}
              >
                Don't Cancel My Subscription
              </button>
              <button className="button" onClick={this.cancelSub}>
                Cancel My Subscription
              </button>
            </div>
          ) : (
            <div>
              <h3 className="warning">
                We Are Cancelling Your Subscription - Please don't refresh the
                page
              </h3>
              <Loader />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CancelPlan;
