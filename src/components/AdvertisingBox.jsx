import React, { Component } from "react";
import AdSense from "react-adsense";


class AdvertisingBox extends Component {
  state = {
    advertText: "not loaded",
    number: 1
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      let newNumber = Math.random();
      this.setState({
        number: newNumber
      });
    }
  }

  render() {
    let { number } = this.state;
    return (
      <div className="advertisingBox" key={number} id={String(number)}>
        <AdSense.Google
          key={number}
          client="ca-pub-2303157713889417"
          slot="8744366555"
          style={{ width: "728px", height: "90px", display: "inline-block" }}
          format=""
        />
                {/* <AdSense.Google
          key={number}
          client="ca-pub-2303157713889417"
          slot="7887152514"
          // style={{display: "inline-block" }}
          format="auto"
          responsive='true'
        /> */}
      </div>
    );
  }
}

export default AdvertisingBox;
