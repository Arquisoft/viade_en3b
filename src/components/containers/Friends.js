import React, { Fragment } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Welcome  from "./welcome/Welcome.js";
import PageNotFound from "./pagenotfound/PageNotFound.js";
import Register from '../services/register/Register.js';
import CreateGroupForm from "./createGroupOfFriends/CreateGroupForm.js";

const Friends = () => (
  <HashRouter>
    <Fragment>
      <Switch>
        <Route exact path="/404" component={PageNotFound} />
        <Redirect exact from="/" to="/welcome" />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/register" component={Register}/>
        <Route exact path="/seeFriends" component={CreateGroupForm}/>
        <Route exact path="/newGroup" component={CreateGroupForm}/>
        <Redirect to="/404" />
      </Switch>
    </Fragment>
  </HashRouter>
);

export default Friends;
