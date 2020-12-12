import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Video from '../containers/Making_Contents/Video';
import Sentence from '../containers/Making_Contents/Sentence';
import Sync from '../containers/Making_Contents/Sync';
import Word from '../containers/Making_Contents/Word';
import Quiz from '../containers/Making_Contents/Quiz';

function MakingRouter() {
  return (
    <Switch>
      <Route exact path="/making" component={Video} />
      <Route path="/making/sentence" component={Sentence} />
      <Route path="/making/sync" component={Sync} />
      <Route path="/making/word" component={Word} />
      <Route path="/making/quiz" component={Quiz} />
    </Switch>
  );
}

export default MakingRouter;
