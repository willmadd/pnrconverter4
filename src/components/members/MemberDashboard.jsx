import React, { Component } from 'react';
import MemberMenu from './MemberMenu';
import ViewMemberDetails from './ViewMemberDetails';
import ApiKey from './ApiKey';
import MemberStats from './MemberStats';
import MemberEditDetails from './MemberEditDetails';
import MemberContactUs from './MemberContactUs';
import Invoices from './Invoices';

class MemberDashboard extends Component {
    state={
        active:"userdetails",
        currency:""
    }

changeWindow=(active)=>{
    this.setState({
        active,
    })
}

updateCurrency=(currency)=>{
    this.setState({
        currency,
    })
}




    render() {
        let {active} = this.state;
        return (
            <div className="member-content">
                <MemberMenu changeWindow={this.changeWindow} active={active} logUserOutMembersArea={this.props.logUserOutMembersArea}/>
                {active === "userdetails" && <ViewMemberDetails user={this.props.user} updateUser={this.props.updateUser} updateCurrency={this.updateCurrency}/>}
                {active === "api" && <ApiKey user={this.props.user}/>}
                {active === "contact" && <MemberContactUs user={this.props.user}/>}
                {active === "edit" && <MemberEditDetails updateUser={this.props.updateUser} user={this.props.user}/>}
                {active === "invoices" && <Invoices user={this.props.user}/>}
            </div>
        );
    }
}

export default MemberDashboard;