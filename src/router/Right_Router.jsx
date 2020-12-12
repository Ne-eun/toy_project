import React from "react";
import { Switch, Route } from "react-router-dom";

import MakingContents from "../containers/Making_Contents/MakingContents";
import AdminContents from "../containers/Admin_contents/AdminContents";

function RightRouter() {
  return (
    <Switch>
      <Route path="/making" component={MakingContents} />
      <Route path="/admin" component={AdminContents}/>
      <Route path="/category" />
      <Route path="/playlist" />
      <Route path="/banner" />
      <Route path="/users" />
      <Route path="/company" />
    </Switch>
  );
}

export default RightRouter;
