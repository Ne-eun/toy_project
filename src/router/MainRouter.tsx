import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLanding from '../containers/Mains/MainLanding';
import Login from '../containers/Mains/Login';
import Register from '../containers/Mains/Register';

function MainRouter() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" component={MainLanding} />
    </Switch>
  );
}

export default MainRouter;
