import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Administrator from './pages/Administrator';

function Page() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Administrator} />
        <Route path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Page;
