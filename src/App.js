
import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NothingEntered from "./components/NothingEntered";
import { Route, Switch } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/empty" component={NothingEntered} />
          {/* <Route
            exact
            path="/articles/:article_id"
            render={routerProps => (
              <Article {...routerProps} user={this.state.user} />
            )}
          /> */}
        </Switch>
        <Footer />
        
      </div>
    );
  }
}

export default App;