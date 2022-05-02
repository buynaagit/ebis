import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/
import ScrollToTopRoute from "./ScrollToTopRoute";
import Ebis from "./Pages/Ebis";

class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
  }
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={Ebis} />
        </Switch>
      </Router>
    );
  }
}

export default App;
