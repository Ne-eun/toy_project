import React from "react";
import { Switch, Route } from "react-router-dom";

import EditContents from "../containers/Admin_contents/Edit_Contents";
import ClosingTask from "../containers/Admin_contents/Closing_Task";

function AdminContentsRouter() {
  return (
    <Switch>
      <Route exact path="/admin" component={EditContents} />
      <Route path="/admin/task" component={ClosingTask} />
    </Switch>
  );
}

export default AdminContentsRouter;
