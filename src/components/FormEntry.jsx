import React, { Component } from "react";

class FormEntry extends Component {
  render() {
    const { setInput, input } = this.props;
    return (
      <div className="inputArea shadow">
        <textarea
          className="dataInputChild"
          name="xx"
          id="xx"
          cols="30"
          rows="10"
          placeholder="Copy and paste Galileo, Smartpoint, Amadeus or Sabre itinerary here..."
          value={input}
          onChange={e => setInput(e)}
        />
        <button className="dataInputChild" type="submit">
          <h3>Convert</h3>
        </button>
      </div>
    );
  }
}

export default FormEntry;
