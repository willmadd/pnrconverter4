import React, { Component } from 'react';
import MemberMenu from './MemberMenu';
import ViewMemberDetails from './ViewMemberDetails';
import ApiKey from './ApiKey';
import MemberStats from './MemberStats';
import MemberEditDetails from './MemberEditDetails';

class MemberDashboard extends Component {
    state={
        active:"userdetails",
    }

changeWindow=(active)=>{
    this.setState({
        active,
    })
}

    render() {
        let {active} = this.state;
        return (
            <div>
                <MemberMenu changeWindow={this.changeWindow} active={active}/>
                {active === "userdetails" && <ViewMemberDetails user={this.props.user}/>}
                {active === "api" && <ApiKey user={this.props.user}/>}
                {active === "stats" && <MemberStats user={this.props.user}/>}
                {active === "edit" && <MemberEditDetails user={this.props.user}/>}
            </div>
        );
    }
}

export default MemberDashboard;