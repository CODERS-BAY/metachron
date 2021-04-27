import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ViewMainDashboard from "../components/pages/Dashboard/pages/ViewMainDashboard";
import ViewOne from "../components/pages/Dashboard/pages/ViewOne";
import ViewTwo from "../components/pages/Dashboard/pages/ViewTwo";
import ViewThree from "../components/pages/Dashboard/pages/ViewThree";
import ViewFour from "../components/pages/Dashboard/pages/ViewFour";
import ViewFive from "../components/pages/Dashboard/pages/ViewFive";
import ViewSix from "../components/pages/Dashboard/pages/ViewSix";
import ViewSeven from "../components/pages/Dashboard/pages/ViewSeven";
import ViewEight from "../components/pages/Dashboard/pages/ViewEight";

const DashboardRoutes = () => (
    <Switch>
        <Redirect exact from="/dashboard" to="/dashboard/viewmaindashboard/" component={ViewMainDashboard}/>
        <Route exact path="/dashboard/viewmaindashboard" component={ViewMainDashboard} />
        <Route exact path="/dashboard/viewone" component={ViewOne} />
        <Route exact path="/dashboard/viewtwo" component={ViewTwo} />
        <Route exact path="/dashboard/viewthree" component={ViewThree} />
        <Route exact path="/dashboard/viewfour" component={ViewFour} />
        <Route exact path="/dashboard/viewfive" component={ViewFive} />
        <Route exact path="/dashboard/viewsix" component={ViewSix} />
        <Route exact path="/dashboard/viewseven" component={ViewSeven} />
        <Route exact path="/dashboard/vieweight" component={ViewEight} />
    </Switch>
);

export default DashboardRoutes;