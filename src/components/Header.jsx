import React from "react";
import Translate from '../translations/Translate'

const Header = () => {
  return (
    <header>
      <a href="/">
        <img
          src="/images/Pnrconverterlogosvg.svg"
          id="headerlogo"
          height="53"
          width="120"
          alt="pnrconverter logo"
        />
      </a>
<div className="title-text-holder">

      <h1><Translate string={'website.title'}/></h1>
      <h3><Translate string={'header.tagline'}/></h3>
</div>

       

      <div className="social-bar">
      <a href="https://twitter.com/pnrconverter?lang=en"><img src="/images/icons/twitter2.png" alt="twitter2" height="36" width="36"/></a>
      <a href="https://www.linkedin.com/in/william-maddicott/"><img src="/images/icons/linkdin.png" alt="linkdin" height="36" width="36"/></a>
      <img src="/images/icons/mail.png" alt="mail" height="36" width="36"/>
      <img src="/images/icons/rss.png" alt="rss" height="36" width="36"/>
      </div>


    </header>
  );
};

export default Header;
