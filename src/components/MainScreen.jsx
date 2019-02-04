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
import Header from "./Header";
import Nav from "./Nav";
import Translate from "../translations/Translate";
import { LanguageContext } from "../context/language-context";
import translateFunc from "../translations/TranslateFunction";

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
    const title = translateFunc(
      this.props.match.params.lang || "en",
      "page.title"
    );
    document.title = title;

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
      localStorage["format"] = "threelines";
      this.setState({
        showSignUp: true
      });
    }

    if (
      this.props.match.params.lang &&
      this.props.match.params.lang !== this.props.language
    ) {
      this.props.changeLanguage(this.props.match.params.lang);
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

  GDPRaccept = () => {
    this.setState({
      showSignUp: false
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
      loading,
      showSignUp
    } = this.state;
    const { languageCode, dateFormat } = this.props;

    return (
      <div className="App">
        <LanguageContext.Consumer>
          {value => (
            <div>
              <Header />
              <Nav value={value}/>
              <div className="container">
                <form onSubmit={this.handleSubmit}>
                  <div className="floatLeft">
                    <FormEntry
                      setInput={this.setInput}
                      input={input}
                      value={value}
                    />
                    <AdvertisingBox {...this.state} />
                    {loading && <Loader />}
                    {languageCode && !processedData && <Blurb />}

                    {processedData && format !== "tableoutput" && (
                      <ResultsBoxThreeLines
                        results={processedData}
                        options={options}
                        format={format}
                        value={value}
                      />
                    )}
                    {processedData && format === "tableoutput" && (
                      <ResultsTable
                        results={processedData}
                        options={options}
                        value={value}
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
          )

          // {showSignUp && <Gdpr GDPRaccept={this.GDPRaccept} />}
          }
        </LanguageContext.Consumer>
      </div>
    );
  }
}

export default MainScreen;
