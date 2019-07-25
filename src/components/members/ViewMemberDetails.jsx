import React, { Component } from "react";
import * as api from "../../db/api";
import CancelPlan from "./CancelPlan";
import MemberChangeSubscription from "./MemberChangeSubscription";

import axios from "axios";

class ViewMemberDetails extends Component {
  state = {
    plan: {},
    cancelWarning: false,
    apiMessage: "",
    changeSub: false,
    cancel_at_period_end:true,
    next_bill_due:"loading"

  };

  toggleCancelWarning = () => {
    this.setState({
      cancelWarning: !this.state.cancelWarning
    });
  };

  componentDidMount = () => {
    api
      .getPlanBySlug(this.props.user.api)
      .then(res => {
        this.setState({
          plan: res.data.plan
        });
        api.getNextInvoiceDate(this.props.plan, this.props.user.id)
        .then(res=>{
        
          let {cancel_at_period_end, next_bill_due} = res.data;

          let time = new Date(next_bill_due*1000)

          let options = {year: 'numeric', month: 'short', day: 'numeric' };
          next_bill_due = time.toLocaleDateString('en-US', options)

          this.setState({
            cancel_at_period_end,
            next_bill_due
          });
        });
        //
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidUpdate = prevProps => {
    if (this.props.user.api !== prevProps.user.api) {
      api
        .getPlanBySlug(this.props.user.api)
        .then(res => {
          let willCancel = this.state.cancel_at_period_end
          if(res.data.plan.id===1){
            willCancel=true;
          }
          this.setState({
            plan: res.data.plan,
            cancel_at_period_end: willCancel
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (this.props.user.api !== prevProps.user.api){
      //nothing
    }
  };

  cancelSubscription = id => {
    let { user } = this.props;

    api.cancelSubscription(id).then(res => {
      this.props.updateUser(user);
      this.setState({
        cancelWarning: false,
        apiMessage: "Your Paid API Subscription has now been cancelled"
      });
    });
  };

  toggleChangeBox = () => {
    this.setState({
      changeSub: !this.state.changeSub
    });
  };

  changeSubscription = id => {
    this.toggleChangeBox();
  };

  render() {
    return (
      <div className="member-content-area">
        <p>
          Welcome to the PNR Converter API Admin area. Please see your details
          below!
        </p>
        {this.state.changeSub && (
          <MemberChangeSubscription
            toggle={this.toggleChangeBox}
            user={this.props.user}
            updateUser={this.props.updateUser}
            defaultPlan={this.props.user.api}
            cancelSubscription={this.cancelSubscription}
          />
        )}
        <div className="field">
          <h4>Name:</h4>
          <p>{this.props.user.name}</p>
        </div>
        <div className="field">
          <h4>Agency:</h4> <p>{this.props.user.agencyname}</p>
        </div>
        {this.props.user.iatacode && (
          <div className="field">
            <h4>IATA code:</h4> <p>{this.props.user.iatacode}</p>
          </div>
        )}
        <div className="field">
          <h4>Contact Email Address:</h4> <p>{this.props.user.email}</p>
        </div>
        <div className="">
          <h4>API:</h4><p>To get your API Key and instructions on setting up the API, please click 'API Key' from the menu on the left</p>
          <h3 className="warning">{`${this.state.apiMessage}`}</h3>
          {this.state.cancelWarning && (
            <CancelPlan
              toggleCancelWarning={this.toggleCancelWarning}
              cancelSubscription={this.cancelSubscription}
              user={this.props.user}
              user_id={this.props.user.id}
              updateUser={this.props.updateUser}
            />
          )}
          <table>
            <thead>
              <tr>
                <th>Api Plan</th>
                <th>Details</th>
                <th>Monthly Fee</th>
                <th>{`Will ${this.state.cancel_at_period_end?'cancel':'renew'} on`}</th>
                <th>Payment Method</th>
                <th>Monthly Request Limit</th>
                <th>Used This Month</th>
                <th>Remaining</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this.props.user.api == "1"
                    ? "Basic Free Plan"
                    : this.props.user.api}
                </td>
                <td>{this.state.plan.description}</td>
                <td>
                  {`${this.state.plan.currency_symbol}${
                    this.state.plan.cost
                  } (${this.state.plan.currency &&
                    this.state.plan.currency.toUpperCase()})`}
                </td>
                <td>{`${!this.state.cancel_at_period_end?this.state.next_bill_due:'Will not Renew'}`}</td>
                <td>{`Card ending ${this.props.user.card_last_four}`}</td>
                    <td>{this.props.user.limit}</td>
                <td>{this.props.user.requests}</td>
                <td>{this.props.user.limit - this.props.user.requests}</td>
                <td className="actions">
                  <p className="action" onClick={this.changeSubscription}>
                    Change Plan
                  </p>
                  {this.props.user.api !== "1" && (
                    <p className="action" onClick={this.toggleCancelWarning}>
                      Cancel
                    </p>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ViewMemberDetails;
