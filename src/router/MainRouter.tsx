import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainLanding from '../containers/Mains/MainLanding';
import Login from '../containers/Mains/Login';

function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainLanding} />
        <Route path="/login" component={Login} />
        <Route path="/register" />
      </Switch>
    </Router>
  );
}

export default MainRouter;
