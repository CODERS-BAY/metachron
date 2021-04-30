import React from "react";
import { useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import DashboardRoutes from "../../../routes/DashboardRoutes";

import ToolBar from "./ToolBar/ToolBar";

function Dashboard() {

    
    useEffect(() => {
        const navMain = document.querySelector("#nav-main");
        navMain.remove();
    }, []);


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
