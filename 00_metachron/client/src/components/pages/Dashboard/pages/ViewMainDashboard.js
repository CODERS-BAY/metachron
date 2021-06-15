import React from "react";

import DashboardCard from "../partials/DashboardCard";

function ViewMainDashboard() {

    return (
        <div className="view view__main__dashboard">

            <div className="card-container">
                <DashboardCard idx={2} title={"List all Users"} linkTo={"/dashboard/viewone"} text={"Testtext here, maybe short prev"} />
                <DashboardCard idx={3} title={"Add User"} linkTo={"/dashboard/viewtwo"} text={"Testtext here, maybe short prev"} />
                <DashboardCard idx={4} title={"Edit User"} linkTo={"/dashboard/viewthree"} text={"Testtext here, maybe short prev"} />
                <DashboardCard idx={5} title={"List all Trainer Qualifications"} linkTo={"/dashboard/viewfour"} text={"Testtext here, maybe short prev"} />
                <DashboardCard idx={6} title={"Qualifications"} linkTo={"/dashboard/viewfive"} text={"Testtext here, maybe short prev"} />
                <DashboardCard idx={7} title={"List all Training Groups"} linkTo={"/dashboard/viewsix"} text={"Testtext here, maybe short prev"} />
            </div>
        </div>
    );
}

export default ViewMainDashboard;
