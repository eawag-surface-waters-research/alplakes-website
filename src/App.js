import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorBoundary from "./errorboundary/errorboundary";
import ReactGA from "react-ga";
import Home from "./pages/home/home";
import NotFound from "./pages/notfound/notfound";

/** ReactGA.initialize("UA-186400369-1");
ReactGA.pageview(window.location.pathname + window.location.search); **/

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route
              path="/"
              render={(props) => (
                <ErrorBoundary {...props}>
                  <Home {...props} />
                </ErrorBoundary>
              )}
              exact
            />

            <Route
              path="/"
              render={(props) => (
                <ErrorBoundary {...props}>
                  <NotFound {...props} />
                </ErrorBoundary>
              )}
            />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
