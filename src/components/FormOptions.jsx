import React, { Component } from "react";
import Translate from '../translations/Translate'

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
      distanceradio,
      systemFont
    } = this.props.options;
    const { changeOptions, format, setFormat } = this.props;
    return (
      <div className="formOptions shadow">
        <h3><Translate string={'nav.display-options'}/></h3>
        <div className="displayOption" id="showAirLineName">
          <input
            type="checkbox"
            name="airlineName"
            id="airlinenameInput"
            onChange={e => changeOptions(e)}
            checked={airlineName}
          />
          <label htmlFor="airlinenameInput"><Translate string={'nav.show-airline-name'}/></label>
        </div>

        <div className="displayOption" id="showDuration">
          <input
            type="checkbox"
            name="duration"
            id="durationInput"
            onChange={e => changeOptions(e)}
            checked={duration}
          />
          <label htmlFor="durationInput"><Translate string={'nav.show-duration'}/></label>
        </div>

        <div className="displayOption" id="showLogo">
          <input
            type="checkbox"
            name="logo"
            id="showlogoInput"
            onChange={e => changeOptions(e)}
            checked={logo}
          />
          <label htmlFor="showlogoInput"><Translate string={'nav.show-logo'}/></label>
        </div>

        <div className="multioptionscontainer">
          <h4><Translate string={'nav.show-cabin'}/></h4>
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
            <label htmlFor="cabinoff"><Translate string={'nav.off'}/></label>

            <input
              id="cabinclassName"
              type="radio"
              value="className"
              name="cabinradio"
              checked={cabinradio === "className"}
              onChange={e => changeOptions(e)}
            />
            <label htmlFor="cabinclassName"><Translate string={'nav.class'}/></label>

            <input
              id="cabincabin"
              type="radio"
              value="cabin"
              name="cabinradio"
              checked={cabinradio === "cabin"}
              onChange={e => changeOptions(e)}
            />
            <label htmlFor="cabincabin"> <Translate string={'nav.cabin'}/></label>
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
          <label htmlFor="transittimeInput"><Translate string={'nav.show-transit'}/></label>
        </div>
        <div className="multioptionscontainer">
          <h4><Translate string={'nav.show-distance'}/></h4>
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
            <label htmlFor="distanceoff"><Translate string={'nav.off'}/></label>

            <input
              type="radio"
              id="distancekm"
              value="km"
              name="distanceradio"
              checked={distanceradio === "km"}
              onChange={e => changeOptions(e)}
            />
            <label htmlFor="distancekm"><Translate string={'distance.km'}/></label>

            <input
              type="radio"
              id="distancemiles"
              value="miles"
              name="distanceradio"
              checked={distanceradio === "miles"}
              onChange={e => changeOptions(e)}
            />
            <label htmlFor="distancemiles"> <Translate string={'distance.miles'}/></label>
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
          <label htmlFor="timeformatInput"><Translate string={'nav.12-hour-clock'}/></label>
        </div>
        <div className="displayOption" id="operatedby">
          <input
            type="checkbox"
            name="operatedBy"
            id="operatedbyInput"
            onChange={e => changeOptions(e)}
            checked={operatedBy}
          />
          <label htmlFor="operatedbyInput"><Translate string={'nav.operated-by'}/></label>
        </div>

        <div id="resultsFormat">
          <h3><Translate string={'nav.results-format'}/></h3>
          <div className="displayOption" id="twoLines">
            <input
              type="radio"
              name="resultformat"
              value="twolines"
              id="resultformat_0"
              onChange={e => setFormat(e)}
              checked={format === "twolines"}
            />
            <label htmlFor="resultformat_0"> <Translate string={'nav.twolines'}/></label>
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
            <label htmlFor="resultformat_1"> <Translate string={'nav.twolinesreordered'}/></label>
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
            <label htmlFor="resultformat_2"> <Translate string={'nav.threelines'}/></label>
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
            <label htmlFor="resultformat_3"><Translate string={'nav.threelinesreordered'}/></label>
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
            <label htmlFor="resultformat_4"><Translate string={'nav.table'}/></label>
          </div>
          <h3>Advanced</h3>
          <div className="displayOption" id="systemFont">
          <input
            type="checkbox"
            name="systemFonts"
            id="systemFonts"
            onChange={e => changeOptions(e)}
            checked={systemFont}
          />
          <label htmlFor="systemFonts">Use System Fonts</label>
        </div>
        </div>
      </div>
    );
  }
}

export default FormOptions;
