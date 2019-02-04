import React, { PureComponent } from "react";
import { LanguageContext } from "../context/language-context"

import en from "./en.json";
import es from "./es.json";
import cn from "./cn.json";


export default class Translate extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      langs: {
        en,
        es,
        cn
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
