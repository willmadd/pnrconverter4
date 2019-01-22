import React, { Component } from "react";

import FormEntry from "./FormEntry";
import FormOptions from "./FormOptions";
import AdvertisingBox from "./AdvertisingBox";
import Blurb from "./Blurb";
import * as func from "../controllers/convert";
import ResultsBoxThreeLines from "./ResultsBox";
import Loader from "./Loader";
import ResultsTable from "./ResultsTable";
import NothingEntered from "./NothingEntered";
import Gdpr from "./Gdpr";

class MainScreen extends Component {
  state = {
    user: null,
    language: "en",
    format: "threelines",
    options: {
      airlineName: true,
      logo: true,
      cabinradio: "off",
      transit: true,
      twelveClock: true,
      operatedBy: false,
      distanceradio: "off",
      duration: true
    },
    input: "",
    processedData: "",
    loading: false,
    showSignUp: "false"
  };

  componentDidMount = () => {
    let visited = localStorage["alreadyVisited"];
    if (visited) {
      let options;
      let format;
      if (localStorage["options"]) {
        options = JSON.parse(localStorage["options"]);
      } else {
        options = this.state.options;
      }
      if (localStorage["format"]) {
        format = localStorage["format"];
      } else {
        format = this.state.format;
      }

      this.setState({
        showSignUp: false,
        options,
        format
      });
    } else {
      localStorage["alreadyVisited"] = true;
      let savedOptions = this.state.options;
      localStorage["options"] = JSON.stringify(savedOptions);
      localStorage["format"] = "threelines"
      this.setState({
        showSignUp: true
      });
    }
  };

  componentDidUpdate = () => {
    let savedOptions = this.state.options;
    localStorage["options"] = JSON.stringify(savedOptions);
    localStorage["format"] = this.state.format;
  };

  changeOptions = event => {
    const { options } = this.state;
    const { name, type } = event.target;
    let newOptions;
    if (type === "radio") {
      newOptions = {
        ...options,
        [name]: event.target.value
      };
    } else {
      newOptions = {
        ...options,
        [name]: !options[name]
      };
    }
    this.setState({
      options: newOptions
    });
  };

GDPRaccept = () =>{
  this.setState({
    showSignUp:false
  })
}


  setFormat = event => {
    const { value } = event.target;
    this.setState({
      format: value
    });
  };

  setInput = event => {
    const { value } = event.target;
    this.setState({
      input: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { input, options } = this.state;
    this.setState(
      {
        loading: true
      },
      () => {
        let processedData = func.convertItinerary(input, options);
        processedData.then(res => {
          // console.log(res);
          this.setState({
            input: "",
            processedData: res,
            loading: false
          });
        });
      }
    );
  };

  render() {
    const {
      language,
      options,
      format,
      input,
      processedData,
      loading,
      showSignUp
    } = this.state;
    return (
      <div className="App">
        <div className="bodyb">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="floatLeft">
                <FormEntry setInput={this.setInput} input={input} />
                <AdvertisingBox {...this.state}/>
                {showSignUp && "GDPR note"}
                {loading && <Loader />}
                {/* {!processedData && <NothingEntered />} */}
                {language && !processedData && <Blurb language={language} />}
                {processedData && format !== "tableoutput" &&
                  <ResultsBoxThreeLines
                    results={processedData}
                    options={options}
                    format={format}
                  />
                }
                {processedData && format=== "tableoutput" &&
                  (<ResultsTable
                  results={processedData}
                  options={options}
                    />
                )}
              </div>

              <div className="floatRight">
                <FormOptions
                  options={options}
                  changeOptions={this.changeOptions}
                  format={format}
                  setFormat={this.setFormat}
                />
              </div>
            </form>
          </div>
        
        </div>
        {showSignUp && <Gdpr GDPRaccept={this.GDPRaccept}/>}
      </div>
    );
  }
}

export default MainScreen;
