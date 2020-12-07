import React from "react";
import { Switch, Route } from "react-router-dom";

import MakingContents from "../containers/Making_Contents/MakingContents";

function RightRouter() {
  return (
    <Switch>
      <Route path="/making" component={MakingContents} />
      <Route path="/admin" />
      <Route path="/category" />
      <Route path="/playlist" />
      <Route path="/banner" />
      <Route path="/users" />
      <Route path="/company" />
    </Switch>
  );
}

export default RightRouter;
