import React from 'react';
import { BrowserRouter as Switch, Route, RouteComponentProps } from 'react-router-dom';

import Video from '../containers/Admins/Video';
import Sentence from '../containers/Admins/Sentence';
import Sync from '../containers/Admins/Sync';
import Word from '../containers/Admins/Word';
import Quiz from '../containers/Admins/Quiz';

import EditContents from '../containers/Admins/EditContents';
import ClosingTask from '../containers/Admins/Closing_Task';

function RightRouter({ match }: RouteComponentProps) {
  return (
    <React.Fragment>
      <Route exact path={match.path} component={Video} />
      <Route path={`${match.path}/sentence`} component={Sentence} />
      <Route path={`${match.path}/sync`} component={Sync} />
      <Route path={`${match.path}/word`} component={Word} />
      <Route path={`${match.path}/quiz`} component={Quiz} />

      <Route path={`${match.path}/list`} component={EditContents} />
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
