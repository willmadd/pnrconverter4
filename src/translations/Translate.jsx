import React, { PureComponent } from "react";
import { LanguageContext } from "../context/language-context"

import en from "./en.json";
import es from "./es.json";
import cn from "./cn.json";
import pt from "./pt.json";
import de from "./de.json";
import fr from "./fr.json";
import no from "./no.json";
import nl from "./nl.json";


export default class Translate extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      langs: {
        en,
        es,
        cn,
        pt,
        de,
        fr,
        no,
        nl
      }
    };
  }
  render() {
    const {langs} = this.state 
      const {string} = this.props
    return (
      <LanguageContext.Consumer>
        {value => langs[value][string]}
      </LanguageContext.Consumer>
    );
  }
}
