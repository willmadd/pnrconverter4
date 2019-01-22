
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


class App extends Component {
  render() {
    return (
      <div className="body">
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/empty" component={NothingEntered} />
          <Route exact path="/api" component={Api_introduction} />
          <Route exact path="/how-to-use-pnrconverter" component={How_it_works} />
          <Route exact path="/make-a-suggestion" component={Suggestions} />
          <Route exact path="/blog" component={Blog} />
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