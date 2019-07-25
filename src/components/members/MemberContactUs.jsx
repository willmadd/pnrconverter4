import React, { Component } from "react";
import * as api from "../../db/api";
import Loader from "../Loader";

class MemberContactUs extends Component {
  state = {
    contact_us: "",
    user_id: 0,
    email: "",
    name: "",
    agency: "",
    message: "",
    loading:false,
  };
  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount = () => {
    this.setState({
      user_id: this.props.user.id,
      email: this.props.user.email,
      name: this.props.user.name,
      agency: this.props.user.agencyname
    });
  };

  handlesubmit = e => {
    e.preventDefault();
    this.setState({
        loading:true,
    }, ()=>{
        let { name, email, agency, contact_us } = this.state;
        api.memberSubmitForm(name, email, agency, contact_us).then(res => {
          if (res.status === 200) {
            this.setState({
                loading:false,
              message: "Your message has been sent, we will be in touch shortly"
            });
          }else{
            this.setState({
                loading:false,
              message: "There was a problem Sending your message - Please try again!"
            });
          }
        });
    })
  };

  render() {
    return (
      <div className="member-content-area members-contact-us-form">
        <h2>Get in Touch!</h2>
        <p>
          No matter if you're having trouble setting up the API, have a
          suggestion, or just want to say hi, please send us a message! We would
          love to hear from you!
        </p>

        {this.state.message?<h2 className="warning">{this.state.message}</h2>:<form onSubmit={this.handlesubmit}>
          <div className="form-top-line">
            <label htmlFor="member_email" className="label">
              Your Email:
              <input
                type="email"
                name=""
                id="member-email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="member_name" className="label">
              Name:
              <input
                type="text"
                name=""
                id="member-name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <textarea
            name="contact_us"
            id="contact-us"
            cols="30"
            rows="10"
            placeholder="Type your message here"
            onChange={this.handleChange}
            value={this.state.contact_us}
          />
          {this.state.loading?<Loader/>:<button className="button">Send Query</button>}
        </form>}
        
      </div>
    );
  }
}

export default MemberContactUs;
