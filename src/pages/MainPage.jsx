import React from "react";
import { BrowserRouter } from "react-router-dom";

import MainRouter from '../router/Main_Router'

function Main() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default Main;
