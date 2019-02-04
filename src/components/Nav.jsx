import React, { Component } from "react";
import Translate from '../translations/Translate'



class Nav extends Component {
  render() {
    return (
      <div className="subheading">
 <ul id="horizonatalnavbar" role="navigation">
         <li className="navmenuitem">
           <a href="/development/test.html">
             <img src="/images/icons/homeicon.svg" height="18" id="homeImage" alt='home'/>
             <Translate string={'menu.home'}/>
           </a>
         </li>
         <li className="navmenuitem">
           <a href="/api-introduction">
             <img src="/images/icons/apiicon.svg" height="18" id="apiImage" alt='api'/>
             <Translate string={'menu.api'}/>
           </a>
         </li>

         <li className="navmenuitem">
           <a href="/how-to-use-pnrconverter">
            <img
              src="/images/icons/howtoicon.svg"
              height="18"
              id="howtoImage"
              alt='how to use pnrconverter'
            />
            <Translate string={'menu.how-it-works'}/>
          </a>
        </li>

        <li className="navmenuitem">
          <a href="/make-a-suggestion">
            <img
              src="/images/icons/suggestionicon.svg"
              height="18"
              id="suggestionImage"
              alt='send us your suggestions'
            />
            <Translate string={'menu.suggestions'}/>
          </a>
        </li>
        <li className="navmenuitem">
          <a href="/about-us">
            <img
              src="/images/icons/aboutusicon.svg"
              height="18"
              id="aboutUsImage"
              alt='about us'
            />
            <Translate string={'menu.about-us'}/>
          </a>
        </li>

        <li className="navmenuitem">
          <a href="/blog">
            <img src="/images/icons/blogicon.svg" height="18" id="blogImage" alt='blog'/>
            <Translate string={'menu.blog'}/>
          </a>
        </li>

        <li className="navmenuitem">
          <a href="/">
            <img
              src={`/images/languages/${this.props.value}.svg`}
              width="26"
              className="langImage"
              id="languageImage"
              alt='change language'
            />
            <Translate string={'menu.language'}/>
          </a>
          <ul className="languageDropdown">
            <li>
              <a href="/">
                <img
                  src="/images/languages/en.svg"
                  width="26"
                  id="langImage"
                  alt='english language'
                />
                English
              </a>
            </li>
            <li>
              <a href="/intl/es">
                <img
                  src="/images/languages/es.svg"
                  width="26"
                  id="langImage"
                  alt='spanish language'
                />
                Español
              </a>
            </li>
            <li>
              <a href="/intl/cn">
                <img
                  src="/images/languages/cn.svg"
                  width="26"
                  id="langImage"
                  alt='chinese language'
                />
                中文
              </a>
            </li>
            <li>
              <a href="/pt">
                <img
                  src="/images/languages/ptbr.svg"
                  width="26"
                  id="langImage"
                  alt='portuguese language'
                />
                Português
              </a>
            </li>
          </ul>
        </li>
      </ul>
      </div>
      
    );
  }
}

export default Nav;
