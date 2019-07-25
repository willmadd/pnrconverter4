import React, { Component } from "react";
import SelectPlan from "./SelectPlan";
import MemberDashboard from "./MemberDashboard";
import { Redirect } from "react-router-dom";
import * as api from "../../db/api";

class Members extends Component {
  state = {
    redirect: false,
    plan: 0,
    logoutRedirect: false
  };

  redirect = plan => {
    this.setState({
      redirect: true,
      plan
    });
  };

  logUserOutMembersArea = () => {
    api.logout();
    this.props.logUserOut();
    this.setState({
      logoutRedirect: true
    });
  };

  render() {
    let { user } = this.props;
    let { plan } = this.state;
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/spayment",
            state: { user, plan }
          }}
        />
      );
    }

    if (this.state.logoutRedirect) {
      return (
        <Redirect
          to={{
            pathname: "/spayment",
            state: { user, plan }
          }}
        />
      );
    }

    return (
      <div>
        <div className="blurb members">
          <h1>{`Welcome to the API admin for ${user.agencyname}`}</h1>
          {user.api === "not set" ? (
            <SelectPlan
              user={user}
              updateUser={this.props.updateUser}
              redirect={this.redirect}
              message={`Looks Like it's your first time here! Please choose a plan!`}
            />
          ) : (
            <MemberDashboard
              user={user}
              updateUser={this.props.updateUser}
              logUserOutMembersArea={this.logUserOutMembersArea}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Members;
