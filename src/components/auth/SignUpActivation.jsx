import React, { Component } from "react";

import axios from "axios";
import SignInModal from "./SignInModal";

class SignUpActivation extends Component {
  state={
    user:{},
    apiOption: 'free',
  }

  componentDidMount = () => {
    console.log(this.props.match.params.token)
    axios.get('http://localhost:8000/api/auth/signup/activate/'+this.props.match.params.token)
    .then(res=>{
      console.log(res.data)
      this.setState({
        user:res.data,
      })
    })
    .catch(err=>{
      console.log(err);
    })
    
  };

  handleChange = event => {
    let { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };



  render() {
    console.log('hello');
    console.log(this.props.setTokenInStorage);
    let {name}=this.state.user;
    return (
      <div>
        <div className="blurb signup-activation-page">
          Hi {name}, Thanks for Signing up. Your account has now been activated. Please sign in!
          <SignInModal setTokenInStorage={this.props.setTokenInStorage}/>

          
          </div>
      </div>
    );
  }
}

export default SignUpActivation;
