import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "../containers/Mains/Main";
import Login from "../containers/Mains/Login";

function MainRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route path="/register" />
    </Switch>
  );
}

export default MainRouter;
