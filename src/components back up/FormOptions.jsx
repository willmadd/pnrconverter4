import React, { Component } from "react";

class FormOptions extends Component {
  render() {
    const {
      airlineName,
      logo,
      cabinradio,
      transit,
      twelveClock,
      operatedBy,
      duration,
      distanceradio
    } = this.props.options;
    const { changeOptions, format, setFormat } = this.props;
    return (
      <div className="formOptions shadow">
        <h3>Display Options</h3>
        <div className="displayOption" id="showAirLineName">
          <input
            type="checkbox"
            name="airlineName"
            id="airlinenameInput"
            onChange={e => changeOptions(e)}
            checked={airlineName}
          />
          <label htmlFor="airlinenameInput">Show Airline Name</label>
        </div>

        <div className="displayOption" id="showDuration">
          <input
            type="checkbox"
            name="duration"
            id="durationInput"
            onChange={e => changeOptions(e)}
            checked={duration}
          />
          <label htmlFor="durationInput">Show Duration</label>
        </div>

        <div className="displayOption" id="showLogo">
          <input
            type="checkbox"
            name="logo"
            id="showlogoInput"
            onChange={e => changeOptions(e)}
            checked={logo}
          />
          <label htmlFor="showlogoInput">Show Airline logo</label>
        </div>

        <div className="multioptionscontainer">
          <h4>Show Cabin</h4>
          <div className="controlbreak multioptionsbreak" />
          <fieldset id="cabinfieldset" className="fieldset" name="distance">
            <input
              id="cabinoff"
              type="radio"
              value="off"
              name="cabinradio"
              checked={cabinradio === "off"}
              onChange={e => changeOptions(e)}
            />
            <label htmlFor="cabinoff">Off</label>

            <input
              id="cabinclassName"
              type="radio"
              value="className"
              name="cabinradio"
              checked={cabinradio === "className"}
              onChange={e => changeOptions(e)}
            />
            <label htmlFor="cabinclassName">Class</label>

            <input
              id="cabincabin"
              type="radio"
              value="cabin"
              name="cabinradio"
              checked={cabinradio === "cabin"}
              onChange={e => changeOptions(e)}
            />
            <label htmlFor="cabincabin"> Cabin</label>
          </fieldset>
        </div>
        <div className="displayOption" id="transitTime">
          <input
            type="checkbox"
            name="transit"
            id="transittimeInput"
            onChange={e => changeOptions(e)}
            checked={transit}
          />
          <label htmlFor="transittimeInput">Transit Time</label>
        </div>
        <div className="multioptionscontainer">
          <h4>Show Distance</h4>
          <div className="controlbreak multioptionsbreak" />
          <fieldset
            id="distancefieldset"
            className="fieldset"
            name="distance"
          >
            <input
              type="radio"
              id="distanceoff"
              value="off"
              name="distanceradio"
              checked={distanceradio === "off"}
              onChange={e => changeOptions(e)}
            />
            <label htmlFor="distanceoff">Off</label>

            <input
              type="radio"
              id="distancekm"
              value="km"
              name="distanceradio"
              checked={distanceradio === "km"}
              onChange={e => changeOptions(e)}
            />
            <label htmlFor="distancekm">KM</label>

            <input
              type="radio"
              id="distancemiles"
              value="miles"
              name="distanceradio"
              checked={distanceradio === "miles"}
              onChange={e => changeOptions(e)}
            />
            <label htmlFor="distancemiles"> Miles</label>
          </fieldset>
        </div>

        <div className="displayOption" id="hourClock">
          <input
            type="checkbox"
            name="twelveClock"
            id="timeformatInput"
            onChange={e => changeOptions(e)}
            checked={twelveClock}
          />
          <label htmlFor="timeformatInput">12 Hour Clock</label>
        </div>
        <div className="displayOption" id="operatedby">
          <input
            type="checkbox"
            name="operatedBy"
            id="operatedbyInput"
            onChange={e => changeOptions(e)}
            checked={operatedBy}
          />
          <label htmlFor="operatedbyInput">Show Operated By</label>
        </div>

        <div id="resultsFormat">
          <h3>Results Format</h3>
          <div className="displayOption" id="twoLines">
            <input
              type="radio"
              name="resultformat"
              value="twolines"
              id="resultformat_0"
              onChange={e => setFormat(e)}
              checked={format === "twolines"}
            />
            <label htmlFor="resultformat_0"> Two Lines</label>
          </div>
          <div className="displayOption" id="twoLinesReordered">
            <input
              type="radio"
              name="resultformat"
              value="twolinesreordered"
              id="resultformat_1"
              onChange={e => setFormat(e)}
              checked={format === "twolinesreordered"}
            />
            <label htmlFor="resultformat_1"> Two Lines Reordered</label>
          </div>
          <div className="displayOption" id="threelines">
            <input
              type="radio"
              name="resultformat"
              value="threelines"
              id="resultformat_2"
              onChange={e => setFormat(e)}
              checked={format === "threelines"}
            />
            <label htmlFor="resultformat_2"> Three Lines</label>
          </div>
          <div className="displayOption" id="threelinesreordered">
            <input
              type="radio"
              name="resultformat"
              value="threelinesreordered"
              id="resultformat_3"
              onChange={e => setFormat(e)}
              checked={format === "threelinesreordered"}
            />
            <label htmlFor="resultformat_3">Three Lines Reordered</label>
          </div>
          <div className="displayOption" id="tableoutput">
            <input
              type="radio"
              name="resultformat"
              value="tableoutput"
              id="resultformat_4"
              onChange={e => setFormat(e)}
              checked={format === "tableoutput"}
            />
            <label htmlFor="resultformat_4">Table</label>
          </div>
        </div>
      </div>
    );
  }
}

export default FormOptions;
