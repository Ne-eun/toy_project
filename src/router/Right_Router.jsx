import React from "react";
import { Switch, Route } from "react-router-dom";

import Video from "../containers/Making_Contents/Video.jsx";
import Sentence from "../containers/Making_Contents/Sentence.jsx";
import Sync from "../containers/Making_Contents/Sync.jsx";
import Word from "../containers/Making_Contents/Word.jsx";
import Quiz from "../containers/Making_Contents/Quiz.jsx";

function MakingContents() {
  return (
    <Switch>
      <Route exact path="/" component={Video} />
      <Route path="/making/sentence" component={Sentence} />
      <Route path="/making/sync" component={Sync} />
      <Route path="/making/word" component={Word} />
      <Route path="/making/quiz" component={Quiz} />
    </Switch>
  );
}

export default MakingContents;
