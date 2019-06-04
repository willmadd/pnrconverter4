import React, { Component } from "react";
import "./App.scss";
import NothingEntered from "./components/NothingEntered";
import { Route, Switch, Redirect } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import Footer from "./components/Footer";
import Api_introduction from "./components/Api_introduction";
import How_it_works from "./components/How_it_works";
import Suggestions from "./components/Suggestions";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import { LanguageContext } from "./context/language-context";
import Article from "./components/Article";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import AboutUs from "./components/AboutUs";
import CarbonOffset from "./components/CarbonOffset";
import Login from "./components/Login";
import SignUpPage from "./components/auth/SignUpPage";
import axios from 'axios';

class App extends Component {
  state = {
    language: "en",
    user:{},
    token:"",
    error:"",
  };

  changeLanguage = language => {
    this.setState({
      language
    });
  };

getUserData=()=>{
  let token = localStorage.getItem("userToken");
  if (token){
    axios.get(`http://localhost:8000/api/auth/user`,
    {headers: {
        "Authorization" : `Bearer ${token}`,
      }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error)
      })
  }
}

  componentDidMount=()=>{
    this.getUserData();
  }
  
  setTokenInStorage=(token)=>{
    localStorage.setItem("userToken", token);
    this.getUserData();
  }

  render() {
    const reload = () => window.location.reload();
    return (
        <LanguageContext.Provider value={this.state.language}>
          <Switch>
            <Redirect from="/intl/en" to="/" />
            <Route
              exact
              path="/"
              render={routerProps => (
                <MainScreen
                  {...routerProps}
                  changeLanguage={this.changeLanguage}
                  setTokenInStorage={this.setTokenInStorage}
                  language={this.state.language}
                />
              )}
            />

            <Redirect from="/es" to="/intl/es" />
            <Redirect from="/cn" to="/intl/cn" />

            <Route
              exact
              path="/intl/:lang"
              render={routerProps => (
                <MainScreen
                  {...routerProps}
                  language={this.state.language}
                  changeLanguage={this.changeLanguage}
                  setTokenInStorage={this.setTokenInStorage}
                />
              )}
            />

            <Route
              exact
              path="/articles/:slug"
              render={routerProps => <Article {...routerProps} />}
            />

            <Route exact path="/empty" component={NothingEntered} />
            <Route
              exact
              path="/api-introduction"
              component={Api_introduction}
            />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/how-to-use-pnrconverter"
              component={How_it_works}
            />
            <Route exact path="/make-a-suggestion" component={Suggestions} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/sabre-to-apollo-converter" onEnter={reload} />
            <Route path="/sabre-to-apollo-converter.php" onEnter={reload} />
            <Route exact path="/terms-and-conditions" component={Terms} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/carbon-offset" component={CarbonOffset} />
            <Route exact path="/signup" component={SignUpPage} />

            <ErrorPage />
          </Switch>
          <Footer />
        </LanguageContext.Provider>
      
    );
  }
}

export default App;
