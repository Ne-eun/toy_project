import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Administrator from './pages/Administrator';

function Page() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/admin" component={Administrator} />
      </Switch>
    </BrowserRouter>
  );
}

export default Page;
