import React, { Component } from "react";
import SelectPlan from "./SelectPlan";

import { Redirect } from "react-router-dom";

class MemberChangeSubscription extends Component {
  state = {
    redirect: false,
    selectedPlan:1
  };

  redirect = (plan) => {
    this.setState({
      redirect: true,
      plan
    });
  };

  render() {
    let {user} = this.props;
    let {plan} = this.state;
    if(this.state.redirect) {
      return  <Redirect to={{
        pathname: '/spayment',
        state: { user, plan }
    }}/>
  }
    return (
      <div className="modal">
        <div className="memberChangeSubscription modal-content">
          <SelectPlan
            user={this.props.user}
            updateUser={this.props.updateUser}
            message={`Please Select Which Plan you would like!`}
            toggle={this.props.toggle}
            defaultPlan={this.props.defaultPlan}
            redirect={this.redirect}
            cancelSubscription={this.props.cancelSubscription}
            toggleBox={this.props.toggle}
          />
        </div>
      </div>
    );
  }
}

export default MemberChangeSubscription;
