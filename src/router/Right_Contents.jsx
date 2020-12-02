import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Video from "../containers/Making_contents/Video.jsx";
import Sentence from "../containers/Making_contents/Sentence.jsx";
import Sync from "../containers/Making_contents/Sync.jsx";
import Word from "../containers/Making_contents/Word.jsx";
import Quiz from "../containers/Making_contents/Quiz.jsx";

function RightContents() {
    return(
        <Router>
            <div className="right_wrap">
                <Switch> {/* Switch : /일때, /하위 경로일때 모두 화면에 출력되지 않도록 한다. */}
                    <Route exact path='/' component={ Video } />
                    <Route exact path='/making/sentence' component={ Sentence } />
                    <Route exact path='/making/sync' component={ Sync } />
                    <Route exact path='/making/word' component={ Word } />
                    <Route exact path='/making/quiz' component={ Quiz } />
                </Switch>
            </div>
        </Router>
    )
}

export default RightContents;