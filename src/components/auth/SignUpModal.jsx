import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

class SignUpModal extends Component {
  state={
    redirect:false,
  }

redirectToSignUp=()=>{
  this.setState({
    redirect:true,
  }, ()=>this.props.activateSignUp())
}

  render() {
    if(this.state.redirect) {
      return <Redirect to="/signup"/>
    }
    return (
      <div>
        <h3 className="underline">New Customers</h3>
        <p>Sign up to receive...</p>
        <ul>
          <li>Customise the look of PNR Converter to reflect your business</li>
          <li>Unlock additional PNR Converter features</li>
          <li>Get Access to the PNR Converter API</li>
          <li>Customise quotes with additional options</li>
        </ul>
      <button onClick={()=>this.redirectToSignUp()}>Sign Me Up</button>
      </div>
    );
  }
}

export default SignUpModal;
