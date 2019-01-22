import React, { Component } from "react";
import AdSense from 'react-adsense';
import * as api from "../db/sqlqueries";

class AdvertisingBox extends Component {
  state={
    advertText:"not loaded"
  }
  componentDidMount() {
    // (window.adsbygoogle = window.adsbygoogle || []).push({});
    api.getAdvert()
    .then(res=>{
      this.setState({
        advertText:res.data
      })
    })

  }

componentDidUpdate(prevProps, prevState,){
  if(prevProps !== this.props){
    api.getAdvert()
    .then(res=>{
      this.setState({
        advertText:res.data
      })
    })
  }
}


  render() {
    return (
      <div className="advertisingBox">
{this.state.advertText}

{/* <AdSense.Google
  client='ca-pub-2303157713889417'
  slot='8744366555'
/> */}

      </div>
    );
  }
}

export default AdvertisingBox;
