import React from "react";
import { Link} from "react-router-dom";

const Footer = () => {
  let langs = ['en','es','pt','cn','nl','no','fr'];
  return (
    <div className="footer">
      <h3>© PNR Converter 2019</h3>
      <div className="social-bar">
        <a href="https://twitter.com/pnrconverter?lang=en">
          <img
            src="/images/icons/twitter2.png"
            alt="twitter2"
            height="36"
            width="36"
          />
        </a>
        <a href="https://www.linkedin.com/in/william-maddicott/">
          <img
            src="/images/icons/linkdin.png"
            alt="linkdin"
            height="36"
            width="36"
          />
        </a>
        <Link to ={`/make-a-suggestion`} >
        <img src="./images/icons/mail.png" alt="mail" height="36" width="36" />
      </Link>
        <img src="./images/icons/rss.png" alt="rss" height="36" width="36" />
      </div>
      <ul className="footer-lang">
      {langs.map(lang=>{
        return (
          <Link to ={`/intl/${lang}`} key={`${lang}`}>
        <img src={`/images/languages/${lang}.svg`} height="24" alt={`language flag ${lang}`}/>
        </Link>)
      })}
      </ul>
      <Link to="/privacy">
      Privacy Policy
      </Link>
      <Link to="/terms-and-conditions">
      Terms of Use
      </Link>
    </div>
  );
};

export default Footer;
