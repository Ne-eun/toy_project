import React from 'react';
import { BrowserRouter as Switch, Route, RouteComponentProps } from 'react-router-dom';

import Video from '../containers/Admins/contents/Video';
import Sentence from '../containers/Admins/contents/Sentence';
import Sync from '../containers/Admins/contents/Sync';
import Word from '../containers/Admins/contents/Word';
import Quiz from '../containers/Admins/contents/Quiz';

interface contentProps {
  contentKey?: string | undefined;
  match: RouteComponentProps;
}
function Content({ contentKey, match }: contentProps) {
  return (
    <Switch>
      <Route path={`${match.path}/video`} render={() => <Video contentKey={contentKey} />} />
      {/* <Route path={`${match.path}/video/:contentPK`} component={Video} /> */}
      <Route path={`${match.path}/sentence`} render={() => <Sentence contentKey={contentKey} />} />
      <Route path={`${match.path}/sync`} render={() => <Sync contentKey={contentKey} />} />
      <Route path={`${match.path}/word`} render={() => <Word contentKey={contentKey} />} />
      <Route path={`${match.path}/quiz`} render={() => <Quiz contentKey={contentKey} />} />
    </Switch>
  );
}

export default Content;
