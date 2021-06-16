import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {
  LANDING_PAGE_ROUTE,
  LINKS_PAGE_ROUTE,
  ERROR_PAGE_ROUTE,
} from "./routes";
import Landing from "./pages/Landing/Landing";
import Links from "./pages/Links/Links";
import Error from "./pages/Error/Error";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path={LANDING_PAGE_ROUTE} component={Landing} />
            <Route exact path={LINKS_PAGE_ROUTE} component={Links} />
            <Route exact path={ERROR_PAGE_ROUTE} component={Error} />
            <Route exact path="/">
              <Redirect to={LANDING_PAGE_ROUTE} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
