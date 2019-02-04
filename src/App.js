import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NothingEntered from "./components/NothingEntered";
import { Route, Switch } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import Footer from "./components/Footer";
import Api_introduction from "./components/Api_introduction";
import How_it_works from "./components/How_it_works";
import Suggestions from "./components/Suggestions";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import { LanguageContext } from "./context/language-context";

class App extends Component {
  state = {
    language: "en"
  };

  changeLanguauge = language => {
    this.setState({
      language
    });
  };

  
  
  render() {
    const reload = () => window.location.reload();
    return (
      <div className="body">
        <LanguageContext.Provider value={this.state.language}>
          <Switch>
            <Route
              exact
              path="/"
              render={routerProps => (
                <MainScreen
                  {...routerProps}
                  languageCode={"en-GB"}
                  dateFormat={"short"}
                />
              )}
            />

            <Route
              exact
              path="/intl/:lang"
              render={routerProps => (
                <MainScreen
                  {...routerProps}
                  languageCode={"zh-CN"}
                  dateFormat={"long"}
                  language={this.state.language}
                  changeLanguage={this.changeLanguauge}
                />
              )}
            />

            <Route
              exact
              path="/es"
              render={routerProps => (
                <MainScreen
                  {...routerProps}
                  languageCode={"es-ES"}
                  dateFormat={"short"}
                />
              )}
            />

            <Route exact path="/empty" component={NothingEntered} />
            <Route
              exact
              path="/api-introduction"
              component={Api_introduction}
            />
            <Route
              exact
              path="/how-to-use-pnrconverter"
              component={How_it_works}
            />
            <Route exact path="/make-a-suggestion" component={Suggestions} />
            <Route exact path="/blog" component={Blog} />
            <Route path="development/test.html" onEnter={reload} />

            <ErrorPage />
          </Switch>
          <Footer />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
