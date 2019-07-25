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
import AboutUs from "./components/pages/AboutUs";
import CarbonOffset from "./components/pages/CarbonOffset";
import Login from "./components/Login";
import SignUpPage from "./components/auth/SignUpPage";
import MailSent from "./components/auth/MailSent";
import SignUpActivation from "./components/auth/SignUpActivation";
import Members from "./components/members/members";
import Header from "./components/Header";
import Nav from "./components/Nav";
import * as api from "./db/api";
import PasswordReset from "./components/auth/PasswordReset";
import Loader from "./components/Loader";
import PasswordResetStart from "./components/auth/PasswordResetStart";
import StripePaymentForm from "./components/stripe/StripePaymentForm";
// import { loadReCaptcha } from 'react-recaptcha-v3'

class App extends Component {
  state = {
    language: "en",
    user: {},
    token: "",
    error: "",
    loading: true
  };

  changeLanguage = language => {
    this.setState({
      language
    });
  };

  getUserData = () => {
    let token = localStorage.getItem("userToken");
    if (token) {
      return api.getUserData();
    } else {
      return {};
    }
  };

  updateUser = user => {
    let token = localStorage.getItem("userToken");
    if (token) {
      this.getUserData()
        .then(res => {
          console.log(res.data);
          this.setState({
            user: res.data,
            loading: false
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  logUserOut = () => {
    localStorage.removeItem("userToken");
    this.setState({
      user: {}
    });
  };

  componentDidMount = () => {
    let token = localStorage.getItem("userToken");
    if (token) {
      this.getUserData()
        .then(res => {
          this.setState({
            user: res.data,
            loading: false
          });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      this.setState({
        loading: false
      });
    }
  };

  setTokenInStorage = token => {
    localStorage.setItem("userToken", token);
    return this.getUserData();
    // .then(res => {
    //   this.setState({
    //     user: res.data
    //   });
    // })
    // .catch(error => {
    //   console.log(error);
    // });
  };

  setUserInState = user => {
    this.setState({
      user,
    });
  };

  render() {
    const reload = () => window.location.reload();
    return (
      <LanguageContext.Provider value={this.state.language}>
        <Header
          user={this.state.user}
          setTokenInStorage={this.setTokenInStorage}
          logUserOut={this.logUserOut}
          language={this.state.language}
          setUserInState={this.setUserInState}
        />
        <Nav value={this.state.language} />
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
                user={this.state.user}
                logUserOut={this.logUserOut}
                // setUserInState={this.setUserInState}
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
                user={this.state.user}
                logUserOut={this.logUserOut}
              />
            )}
          />

          <Route
            exact
            path="/articles/:slug"
            render={routerProps => <Article {...routerProps} />}
          />

          <Route exact path="/empty" component={NothingEntered} />
          <Route exact path="/api-introduction" component={Api_introduction} />
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
          <Route exact path="/mailsent" component={MailSent} />
          <Route exact path="/passwordreset" component={PasswordResetStart} />

          <Route
            exact
            path="/spayment"
            render={routerProps => (
              <StripePaymentForm
                updateUser={this.updateUser}
                {...routerProps}
              />
            )}
          />

          {this.state.loading ? (
            <Loader />
          ) : (
            <Route
              exact
              path="/members"
              render={() =>
                this.state.user && this.state.user.name ? (
                  <Members
                    user={this.state.user}
                    updateUser={this.updateUser}
                    logUserOut={this.logUserOut}
                  />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
          )}

          <Route
            exact
            path="/signup/activate/:token"
            render={routerProps => (
              <SignUpActivation
                {...routerProps}
                setTokenInStorage={this.setTokenInStorage}
                setUserInState={this.setUserInState}
              />
            )}
          />

          <Route
            exact
            path="/passwordreset/:token"
            render={routerProps => (
              <PasswordReset
                {...routerProps}
                setTokenInStorage={this.setTokenInStorage}
              />
            )}
          />

          <ErrorPage />
        </Switch>
        <Footer />
      </LanguageContext.Provider>
    );
  }
}

export default App;
