import React from "react";

import DashboardCard from "../partials/DashboardCard";

function ViewMainDashboard() {

    return (
        <div className="view view__main__dashboard">

            <div className="card-container">
                <DashboardCard idx={2} title={"List all Users"} linkTo={"/dashboard/viewone"} text={"if you want to see all users in my system, right here you'll find it."} />
                <DashboardCard idx={3} title={"Add User"} linkTo={"/dashboard/viewtwo"} text={"a new one? not yet here? just add a new user here."} />
                <DashboardCard idx={4} title={"Edit User"} linkTo={"/dashboard/viewthree"} text={"maybe something changed?"} />
                <DashboardCard idx={5} title={"List all Trainer Qualifications"} linkTo={"/dashboard/viewfour"} text={"find all of technical luminaries? here is the right place to come."} />
                <DashboardCard idx={6} title={"Qualifications"} linkTo={"/dashboard/viewfive"} text={"new times bring new technologies. isn't it?"} />
                <DashboardCard idx={7} title={"List all Training Groups"} linkTo={"/dashboard/viewsix"} text={"well, which trainingGroup are you aming for?"} />
            </div>
        </div>
    );
}

export default ViewMainDashboard;
