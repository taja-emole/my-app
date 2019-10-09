import React, { component } from 'react';
import ReactDOM from "react-dom";
import Contact from "./Contact";
import NotFoundPage from "./NotFounPage";
import App from "./App";
import Profile from "./Profile";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Router = ()=> (
    <BrowserRouter>
    
      <Switch>
          <Route exact path="/" component={App} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Contact" component={Contact} />
          <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
);

export default Router;
