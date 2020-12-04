import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Video from "../containers/Making_Contents/Video.jsx";
import Sentence from "../containers/Making_Contents/Sentence.jsx";
import Sync from "../containers/Making_Contents/Sync.jsx";
import Word from "../containers/Making_Contents/Word.jsx";
import Quiz from "../containers/Making_Contents/Quiz.jsx";

function MakingContents() {
  return (
    <BrowserRouter>
      <Router>
        <div className="right_wrap">
          <Switch>
            {/* Switch : /일때, /하위 경로일때 모두 화면에 출력되지 않도록 한다. */}
            <Route exact path="/" component={Video} />
            <Route exact path="/making/sentence" component={Sentence} />
            <Route exact path="/making/sync" component={Sync} />
            <Route exact path="/making/word" component={Word} />
            <Route exact path="/making/quiz" component={Quiz} />
          </Switch>
        </div>
      </Router>
    </BrowserRouter>
  );
}

export default MakingContents;
