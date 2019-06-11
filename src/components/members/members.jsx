import React, { Component } from "react";
import SelectPlan from "./SelectPlan";
import MemberDashboard from "./MemberDashboard";

class Members extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div>
        <div className="blurb members">
          <h1>{`Welcome to the API admin for ${
            this.props.user.agencyname
          }`}</h1>
          {this.props.user.api === "not set" ? (
            <SelectPlan
              user={this.props.user}
              updateUser={this.props.updateUser}
            />
          ) : (
            <MemberDashboard
              user={this.props.user}
              updateUser={this.props.updateUser}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Members;
