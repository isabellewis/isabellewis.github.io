import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter, Switch, NavLink } from "react-router-dom";

import { AppDiv, MenuWrapper } from "./index.style";

import { MenuPanel, HomePanel, CVPanel, Footer } from "./views";

require("file-loader?name=[name].[ext]!../index.html");

const App = () => (
  <HashRouter>
    <AppDiv className="app">
      <MenuPanel />

      <Switch>
        <Route exact path="/" component={HomePanel} />
        {/* <Route path="/cv" component={CVPanel} /> */}
      </Switch>
      <Footer />
    </AppDiv>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));

module.hot.accept();
