import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import FormEntry from "./components/FormEntry";
import FormOptions from "./components/FormOptions";
import AdvertisingBox from "./components/AdvertisingBox";
import Blurb from "./components/Blurb";
import Nav from "./components/Nav";
import * as func from "./controllers/convert";
import ResultsBoxThreeLines from "./components/ResultsBox";
import Loader from "./components/Loader";

class App extends Component {
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
    loading: false
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
      loading
    } = this.state;
    return (
      <div className="App">
        <Header />
        <Nav />
        <div className="body">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="floatLeft">
                <FormEntry setInput={this.setInput} input={input} />
                <AdvertisingBox />
                {loading && <Loader />}
                {language && !processedData && <Blurb language={language} />}
                {processedData && format!=="tableoutput"? (
                  <ResultsBoxThreeLines results={processedData} options={options} format={format}/>
                ):""}
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
      </div>
    );
  }
}

export default App;
