import React from 'react';
import { BrowserRouter as Switch, Route, RouteComponentProps } from 'react-router-dom';

import Content from '../containers/Admins/Content';
import AdminContents from '../containers/Admins/AdminContents';
import ClosingTask from '../containers/Admins/Closing_Task';

function RightRouter({ match }: RouteComponentProps) {
  return (
    <React.Fragment>
      <Route path={`${match.path}/content`} component={Content} />

      <Route path={`${match.path}/list/`} component={AdminContents} />
      <Route path={`${match.path}/task`} component={ClosingTask} />

      <Route path={`${match.path}/category`} />
      <Route path={`${match.path}/playlist`} />
      <Route path={`${match.path}/banner`} />
      <Route path={`${match.path}/users`} />
      <Route path={`${match.path}/company`} />
    </React.Fragment>
  );
}

export default RightRouter;
