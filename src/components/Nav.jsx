import React, { Component } from "react";
import Translate from "../translations/Translate";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="subheading">
        <ul id="horizonatalnavbar" role="navigation">
          <li className="navmenuitem">
          <Link to ="/">
              <img
                src="/images/icons/homeicon.svg"
                height="18"
                id="homeImage"
                alt="home"
              />
              <Translate string={"menu.home"} />
              </Link>
          </li>
          <li className="navmenuitem">
          <Link to ="/api-introduction">
              <img
                src="/images/icons/apiicon.svg"
                height="18"
                id="apiImage"
                alt="api"
              />
              <Translate string={"menu.api"} />
              </Link>
          </li>

          <li className="navmenuitem">
          <Link to ="/how-to-use-pnrconverter">
              <img
                src="/images/icons/howtoicon.svg"
                height="18"
                id="howtoImage"
                alt="how to use pnrconverter"
              />
              <Translate string={"menu.how-it-works"} />
              </Link>
          </li>

          <li className="navmenuitem">
          <Link to ="/make-a-suggestion">
              <img
                src="/images/icons/suggestionicon.svg"
                height="18"
                id="suggestionImage"
                alt="send us your suggestions"
              />
              <Translate string={"menu.suggestions"} />
              </Link>
          </li>
          <li className="navmenuitem">
          <Link to ="/about-us">
              <img
                src="/images/icons/aboutusicon.svg"
                height="18"
                id="aboutUsImage"
                alt="about us"
              />
              <Translate string={"menu.about-us"} />
              </Link>
          </li>

          <li className="navmenuitem">
          <Link to ="/blog">
              <img
                src="/images/icons/blogicon.svg"
                height="18"
                id="blogImage"
                alt="blog"
              />
              <Translate string={"menu.blog"} />
              </Link>
          </li>

          <li className="navmenuitem">
            <a href="/">
              <img
                src={`/images/languages/${this.props.value}.svg`}
                width="26"
                className="langImage"
                id="languageImage"
                alt="change language"
              />
              <Translate string={"menu.language"} />
            </a>
            <ul className="languageDropdown">
            <Link to ="/">
              <li>
                  <img
                  className="flag"
                    src="/images/languages/en.svg"
                    width="26"
                    id="langImage"
                    alt="english language"
                  />
                  <p>English</p>
              </li>
              </Link>
                <Link to ="/intl/es">
              <li>
                  <img
                  className="flag"
                    src="/images/languages/es.svg"
                    width="26"
                    id="langImage"
                    alt="spanish language"
                  />
                  Español
              </li>
                </Link>
                <Link to ="/intl/cn">
              <li>
                  <img
                  className="flag"
                    src="/images/languages/cn.svg"
                    width="26"
                    id="langImage"
                    alt="chinese language"
                  />
                  中文
              </li>
                </Link>
                <Link to ="/intl/pt">
              <li>
                  <img
                  className="flag"
                    src="/images/languages/pt.svg"
                    width="26"
                    id="langImage"
                    alt="portuguese language"
                  />
                  Português
              </li>
                </Link>
                <Link to ="/intl/de">
              <li>
                  <img
                  className="flag"
                    src="/images/languages/de.svg"
                    width="26"
                    id="langImage"
                    alt="german language"
                  />
                  Deutsche
              </li>
                </Link>
                <Link to ="/intl/fr">
              <li>
                  <img
                  className="flag"
                    src="/images/languages/fr.svg"
                    width="26"
                    id="langImage"
                    alt="french language"
                  />
                  Français
              </li>
                </Link>
                <Link to ="/intl/nl">
              <li>
                  <img
                  className="flag"
                    src="/images/languages/nl.svg"
                    width="26"
                    id="langImage"
                    alt="french language"
                  />
                  Nederlands
              </li>
                </Link>
                <Link to ="/intl/no">
              <li>
                  <img
                  className="flag"
                    src="/images/languages/no.svg"
                    width="26"
                    id="langImage"
                    alt="french language"
                  />
                  Norsk
              </li>
                </Link>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
