import React, { Component } from 'react';
import Header from "./Header";
import Nav from "./Nav";




class Privacy extends Component {
  render() {
    return (
      <div>
      <Header />
      <Nav value={"en"} />

        <div className="blurb">
<h1>Privacy Policy</h1>

<h3>What are cookies?</h3>

Cookies are small text files containing that can be placed on your computer or mobile device that uniquely identify your browser or device. 

<h3>What are cookies used for?</h3>

Cookies allow a site or services to know if your computer or device has visited that site or service before. Cookies can then be used to help understand how the site or service is being used, help you navigate between pages efficiently, help remember your preferences, and generally improve your browsing experience. Cookies can also help ensure marketing you see online is more relevant to you and your interests.

<h3>Can I Turn Off Cookies?</h3>

Yes, of course. You can disable cookies in your browser settings, however this will impact the way that PNR Converter works, and will disable some features of PNR Converter.com, such as the ability to log on, and the storing of your prefered settings

<h2>What Cookies does PNR Converter Use?</h2>

<h3>PNR Converter Cookies</h3>

PNR Converter stores a cookie in your browser that memorises your prefered settings, and then defualts back to them every time you load PNR Converter. This cookie's only purpose is to make your life easier, and stop you having to reconfigure PNR Converter each time you use it!

<h3>Google Analytics</h3>
        PNRConverter.com uses Google Analytics to anonymously collect information about our users behaviour. We track things such as average time spent on the site. What country you're from, what operating system you're using and other similar things, however NONE of the data we collect is personally identifiable. 

        We collect this data to help us deliver a better service to our customers (you), and tailor future updates specifically towards out users!

        All activity falls within Google Analytics terms of service.

        <h3>Google Adsense</h3>

        PNRConverter uses adsense to display adverts on pnrconverter.com. We use cookies to display adverts based on your prior usage on PNR Converter.

        Third party vendors, including Google, use cookies to serve ads based on a user’s prior visits to your website. This can include things like your geolocation, browser, and IP address. No personally identifiable data is collected. This data is just used to target relavent adverts towards out users. 


        </div>
      </div>
    );
  }
}

export default Privacy;