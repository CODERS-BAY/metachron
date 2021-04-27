import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import DashboardRoutes from "../../../routes/DashboardRoutes";

import ToolBar from "./ToolBar/ToolBar";

function Dashboard() {
    return (
        <div className="container container__dashboard">
            <Router>
                <ToolBar />
                <DashboardRoutes />
            </Router>
        </div>
    )
}

export default Dashboard;
