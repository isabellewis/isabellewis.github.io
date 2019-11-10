import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter, Switch } from "react-router-dom";

import { AppDiv, MenuWrapper, Main } from "./index.style";

import {
  MenuPanel,
  HomePanel,
  CVPanel,
  MediaPanel,
  Footer,
  RecognitionPanel
} from "./views";

require("file-loader?name=[name].[ext]!../index.html");

const App = () => (
  <HashRouter>
    <AppDiv className="app">
      <MenuWrapper>
        <MenuPanel />
      </MenuWrapper>
      <Main>
        <Switch>
          <Route exact path="/" component={HomePanel} />
          <Route path="/cv" component={CVPanel} />
          <Route path="/media" component={MediaPanel} />
          <Route path="/recognitions" component={RecognitionPanel} />
        </Switch>
      </Main>
      <Footer />
    </AppDiv>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));

module.hot.accept();
