import React, { Component } from "react";

class FormOptions extends Component {



  render() {
    const {airlineName, logo, cabin, transit, twelveClock, operatedBy} = this.props.options;
    const {changeOptions, format, setFormat} = this.props;
    return (
      <div className="formOptions shadow">
      <h3>Display Options</h3>
        <div className="displayOption" id="showAirLineName">
          <input type="checkbox" name="airlineName" id="airlinenameInput" onChange={(e)=>changeOptions(e)}
          checked={airlineName}/>
          <label htmlFor="airlinenameInput">
              Show Airline Name
          </label>
      </div>
      <div className="displayOption" id="showLogo">
          <input type="checkbox" name="logo" id="showlogoInput" onChange={(e)=>changeOptions(e)}
          checked={logo}/>
          <label htmlFor="showlogoInput">
              Show Airline logo</label>
      </div>

      <div className="multioptionscontainer">
          <h4>Show Cabin</h4>
          <div className="controlbreak multioptionsbreak"></div>
          <fieldset id="cabinfieldset" className="fieldset" 
              name="distance">
              <input id="cabinoff" type="radio" value="off" name="cabinradio" checked={cabin==="off"}
              onChange={(e)=>changeOptions(e)}
              />
              <label htmlFor="cabinoff">Off
              </label>

              <input id="cabinclassName" type="radio" value="className" name="cabinradio"
              checked={cabin==="classname"}
              onChange={(e)=>changeOptions(e)}
              />
              <label htmlFor="cabinclassName">ClassName
              </label>

              <input id="cabincabin" type="radio" value="cabin" name="cabinradio" checked={cabin==="cabinRadio"}
              onChange={(e)=>changeOptions(e)}
              />
              <label htmlFor="cabincabin"> Cabin
              </label>
          </fieldset>
      </div>
        <div className="displayOption" id="transitTime">
          <input
            type="checkbox"
            name="transit"
            id="transittimeInput"
            onChange={(e)=>changeOptions(e)}
            checked={transit}
          />
          <label htmlFor="transittimeInput">Transit Time</label>
        </div>
        <div className="multioptionscontainer">
          <h4>Show Distance</h4>
          <div className="controlbreak multioptionsbreak"></div>
          <fieldset id="distancefieldset" className="fieldset" onChange={(e)=>changeOptions(e)}
              name="distance">
              <input type="radio" id="distanceoff" value="Off" name="distanceradio"/>
              <label htmlFor="distanceoff">Off
              </label>

              <input type="radio" id="distancekm" value="km" name="distanceradio"/>
              <label htmlFor="distancekm">KM
              </label>

              <input type="radio" id="distancemiles" value="miles" name="distanceradio"/>
              <label htmlFor="distancemiles"> Miles
              </label>
          </fieldset>
      </div>



      <div className="displayOption" id="hourClock">
          <input type="checkbox" name="twelveClock" id="timeformatInput" onChange={(e)=>changeOptions(e)}
          checked={twelveClock}/>
          <label htmlFor="timeformatInput">12 Hour Clock</label>
      </div>
      <div className="displayOption" id="operatedby">
          <input type="checkbox" name="operatedBy" id="operatedbyInput" onChange={(e)=>changeOptions(e)}
          checked={operatedBy}/>
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
              onChange={(e)=>setFormat(e)}
              checked={format==="twolines"}
            />
            <label htmlFor="resultformat_0"> Two Lines</label>
          </div>
          <div className="displayOption" id="twoLinesReordered">
            <input
              type="radio"
              name="resultformat"
              value="twolinesreordered"
              id="resultformat_1"
              onChange={(e)=>setFormat(e)}
              checked={format==="twolinesreordered"}
            />
            <label htmlFor="resultformat_1"> Two Lines Reordered</label>
          </div>
          <div className="displayOption" id="threelines">
            <input
              type="radio"
              name="resultformat"
              value="threelines"
              id="resultformat_2"
              onChange={(e)=>setFormat(e)}
              checked={format==="threelines"}
            />
            <label htmlFor="resultformat_2"> Three Lines</label>
          </div>
          <div className="displayOption" id="threelinesreordered">
            <input
              type="radio"
              name="resultformat"
              value="threelinesreordered"
              id="resultformat_3"
              onChange={(e)=>setFormat(e)}
              checked={format==="threelinesreordered"}
            />
            <label htmlFor="resultformat_3">Three Lines Reordered</label>
          </div>
          <div className="displayOption" id="tableoutput">
            <input
              type="radio"
              name="resultformat"
              value="tableoutput"
              id="resultformat_4"
              onChange={(e)=>setFormat(e)}
              checked={format==="table"}
            />
            <label htmlFor="resultformat_4">Table</label>
          </div>
        </div>
      </div>
    );
  }
}

export default FormOptions;
