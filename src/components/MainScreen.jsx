import React, { Component } from "react";

import FormEntry from "./FormEntry";
import FormOptions from "./FormOptions";
import AdvertisingBox from "./AdvertisingBox";
import Blurb from "./Blurb";
import * as func from "../controllers/convert";
import ResultsBoxThreeLines from "./ResultsBox";
import Loader from "./Loader";
import ResultsTable from "./ResultsTable";
import Gdpr from "./Gdpr";
import Header from "./Header";
import Nav from "./Nav";
import { LanguageContext } from "../context/language-context";
import translateFunc from "../translations/TranslateFunction";
import InvalidInput from "./InvalidInput";
import ReactGA from "react-ga";
import Adblock from "./Adblock";
import Banner from "./Banner";
import { Helmet } from "react-helmet";

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
      duration: true,
      systemFonts: false
    },
    input: "",
    names: "",
    processedData: "",
    loading: false,
    showSignUp: false,
    error: false,
    addblocker: false,
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

  componentDidUpdate = (prevProps, prevState) => {
    let savedOptions = this.state.options;
    localStorage["options"] = JSON.stringify(savedOptions);
    localStorage["format"] = this.state.format;

    if (
      this.props.match.params.lang &&
      this.props.match.params.lang !== this.props.language
    ) {
      this.props.changeLanguage(this.props.match.params.lang);
    } else if (!this.props.match.params.lang && this.props.language !== "en") {
      this.props.changeLanguage("en");
    }
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

    ReactGA.event({
      category: "User",
      action: "Converted Itinerary",
      label: this.props.language
    });

    const { input, options, format } = this.state;
    this.setState(
      {
        loading: true
      },
      () => {
        let names = func.getNames(input);
        let processedData = func.convertItinerary(input, options, format);
        processedData
          .then(res => {
            if (!res[0]) {
              this.setState({
                error: true,
                loading: false
              });
            } else {
              this.setState({
                input: "",
                processedData: res,
                loading: false,
                names,
                error: false
              });
            }
          })
          .catch(err => {
            this.setState({
              error: true,
              loading: false
            });
          });
      }
    );
  };

  render() {
    const {
      options,
      format,
      input,
      processedData,
      loading,
      showSignUp,
      names,
      error
    } = this.state;
    console.log(`${translateFunc("es", "page.meta")}`)
    return (
      <div className="App body">
        <LanguageContext.Consumer>
          {value => (
            <div>
              <Helmet>
                <meta
                  name="description"
                  content={`${translateFunc(value, "page.meta")}`}
                />
                
              </Helmet>
              <Header />
              <Nav value={value} />
              {/* <Banner /> */}

              <form className="container" onSubmit={this.handleSubmit}>
                <div className="floatLeft">
                  <FormEntry
                    setInput={this.setInput}
                    input={input}
                    value={value}
                  />
                  <AdvertisingBox {...this.state} />
                  {loading && <Loader />}
                  {error && <InvalidInput />}
                  {value && !processedData && <Blurb />}
                  {processedData && !error && format !== "tableoutput" && (
                    <ResultsBoxThreeLines
                      results={processedData}
                      options={options}
                      format={format}
                      value={value}
                      names={names}
                    />
                  )}

                  {processedData && format === "tableoutput" && (
                    <ResultsTable
                      results={processedData}
                      options={options}
                      value={value}
                      names={names}
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

              {showSignUp && <Gdpr GDPRaccept={this.GDPRaccept} />}
              <Adblock />
            </div>
          )}
        </LanguageContext.Consumer>
      </div>
    );
  }
}

export default MainScreen;
