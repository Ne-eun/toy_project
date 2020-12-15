import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Video from '../containers/Making_Contents/Video';
import Sentence from '../containers/Making_Contents/Sentence';
import Sync from '../containers/Making_Contents/Sync';
import Word from '../containers/Making_Contents/Word';
import Quiz from '../containers/Making_Contents/Quiz';
import AdminContents from '../containers/Admin_contents/AdminContents';

import EditContents from '../containers/Admin_contents/Edit_Contents';
import ClosingTask from '../containers/Admin_contents/Closing_Task';

function RightRouter() {
  return (
    <Switch>
      <Route exact path="/making" component={Video} />
      <Route path="/making/sentence" component={Sentence} />
      <Route path="/making/sync" component={Sync} />
      <Route path="/making/word" component={Word} />
      <Route path="/making/quiz" component={Quiz} />

      <Route exact path="/admin" component={EditContents} />
      <Route path="/admin/task" component={ClosingTask} />

      <Route path="/category" />
      <Route path="/playlist" />
      <Route path="/banner" />
      <Route path="/users" />
      <Route path="/company" />
    </Switch>
  );
}

export default RightRouter;
