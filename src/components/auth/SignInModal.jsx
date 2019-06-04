import React, { Component } from "react";
import axios from 'axios';

class SignInModal extends Component {
    state={
        username:"",
        password:"",
        error:"",
    }
    handleChange=(event)=>{
        let {value, name} = event.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {username, password} = this.state;
        let remember_me=true;
        let user = {email:username, password, remember_me};
        
        axios.post(`http://localhost:8000/api/auth/login`,  user )
      .then(res => {
        this.props.setTokenInStorage(res.data.access_token)
        this.props.activateSignUp();
      })
      .catch(error => {
        console.log(error.response.status);
        switch (error.response.status) {
          case 422:
            console.log('dddd')
            this.setState({
              error:"Please Enter a Valid Email address"
            })
            break
          case 401:
            this.setState({
              error:"Log In Details not Recognised"
            })
            break
        }
      })

    }

  render() {
    return (
      <form onSubmit={(e)=>{this.handleSubmit(e)}}>
        <h3 className="underline">Existing Customers</h3>
        <div className="models">

        <h3>{this.state.error}</h3>;
        <label>
          User Name:
          <input type="text" name="username" onChange={(e)=>{this.handleChange(e)}}/>
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={(e)=>{this.handleChange(e)}}/>
        </label>
        <button type="submit">Sign In</button>
        <h6>Forgot my password</h6>
        </div>
      </form>
    );
  }
}

export default SignInModal;
