import React from "react";

import DashboardCard from "../partials/DashboardCard";

function ViewMainDashboard() {

    return (
        <div className="view view__main__dashboard">

            <div className="card-container">
                <DashboardCard title={"List all Users"} linkTo={"/dashboard/viewone"} text={"Testtext here, maybe short prev"} />
                <DashboardCard title={"Add User"} linkTo={"/dashboard/viewtwo"} text={"Testtext here, maybe short prev"} />
                <DashboardCard title={"Edit User"} linkTo={"/dashboard/viewthree"} text={"Testtext here, maybe short prev"} />
                <DashboardCard title={"List all Trainer Qualifications"} linkTo={"/dashboard/viewfour"} text={"Testtext here, maybe short prev"} />
                <DashboardCard title={"Qualifications"} linkTo={"/dashboard/viewfive"} text={"Testtext here, maybe short prev"} />
                <DashboardCard title={"Training Groups"} linkTo={"/dashboard/viewsix"} text={"Testtext here, maybe short prev"} />
            </div>
        </div>
    );
}

export default ViewMainDashboard;
