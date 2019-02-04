import React, { Component } from "react";
import Translate from '../translations/Translate'
import { LanguageContext } from "../context/language-context";
import translateFunc from '../translations/TranslateFunction'

class FormEntry extends Component {
    render() {

const placeHolder = translateFunc(this.props.value, 'submitbox.copy-and-paste')
    const { setInput, input } = this.props;
    return (
      <div className="inputArea shadow">
  
        <textarea
          className="dataInputChild"
          name="xx"
          id="xx"
          cols="30"
          rows="10"
          placeholder={placeHolder}
          value={input}
          onChange={e => setInput(e)}
        />
        <button className="dataInputChild" type="submit">
          <h3><Translate string={'submitbox.convert'}/></h3>
          <img src="/images/icons/paper-plane.svg" 
          height="48"
          
          alt="paper plane"/>
        </button>

      </div>
    );
  }
}

export default FormEntry;
