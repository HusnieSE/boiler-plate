import React from "react";
import { Switch, Route } from "react-router-dom";

import RootComponent from "../components/rootContainer";
import TestComponent from "../components/testComponent";

export default () => (
  <Switch>
    <Route exact path="/" component={RootComponent} />
    <Route path="/test" component={TestComponent} />
  </Switch>
);
