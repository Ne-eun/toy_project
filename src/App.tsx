import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/MainPage';
import Administrator from './pages/Administrator';

function Page() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/making" component={Administrator} />
      </Switch>
    </BrowserRouter>
  );
}

export default Page;
