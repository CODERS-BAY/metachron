import React from "react";
import { Route, Switch } from "react-router-dom";

import PageNotFound from "../components/pages/PageNotFound";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Dashboard from "../components/pages/Dashboard/Dashboard";

const Routes = () => (
    <Switch>
        {/* main views */}
        <Route exact path="/" component={Home} />
        <Route exact path="/#about" component={Home} />
        <Route exact path="/#contact" component={Home} />
        <Route exact path="/login" component={Login} />
        {/* dashboard views */}
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/viewmaindashboard" component={Dashboard} />
        <Route exact path="/dashboard/viewone" component={Dashboard} />
        <Route exact path="/dashboard/viewtwo" component={Dashboard} />
        <Route exact path="/dashboard/viewthree" component={Dashboard} />
        <Route exact path="/dashboard/viewfour" component={Dashboard} />
        <Route exact path="/dashboard/viewfive" component={Dashboard} />
        <Route exact path="/dashboard/viewsix" component={Dashboard} />
        <Route exact path="/dashboard/viewseven" component={Dashboard} />
        <Route exact path="/dashboard/vieweight" component={Dashboard} />
        <Route exact path="/dashboard/viewnine" component={Dashboard} />
        <Route exact path="/dashboard/viewten" component={Dashboard} />
        {/* 404 */}
        <Route component={PageNotFound} />
    </Switch>
);

export default Routes;