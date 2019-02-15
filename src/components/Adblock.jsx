import React, { Component } from 'react';
import AdBlockDetect from 'react-ad-block-detect';

class Adblock extends Component {


    render() {
        return (
            <AdBlockDetect>
              <div className="ad-page-container">
                <div className="adblockmessage">
                <h3>Please Disable Adblocker and reload the page</h3>
                <p>You are using an adblocker. This interferes with PNRConverter's inner workings! Please disable your adblocker for pnrconverter.com to remove this error message and run pnrconverter</p></div>
              </div>
            </AdBlockDetect>
        );
    }
}

export default Adblock;