import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <h3>© PNR Converter 2019</h3>
      <div className="social-bar">
      <a href="https://twitter.com/pnrconverter?lang=en"><img src="./images/icons/twitter2.png" alt="twitter2" height="36" width="36"/></a>
      <a href="https://www.linkedin.com/in/william-maddicott/"><img src="./images/icons/linkdin.png" alt="linkdin" height="36" width="36"/></a>
      <img src="./images/icons/mail.png" alt="mail" height="36" width="36"/>
      <img src="./images/icons/rss.png" alt="rss" height="36" width="36"/>
      </div>
      <a href="./privacy">Privacy Policy</a>
      <a href="./term-and-conditions">Terms of Use</a>

    </div>
  );
};

export default Footer;