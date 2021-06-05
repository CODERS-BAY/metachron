import React from "react";
import { Link } from "react-router-dom";

function DashboardCard(props) {
    return (
        <Link to={props.linkTo}>
            <div className="card emptyCard">
                <p>
                    {props.title}
                </p>
                <div className="card__txt">
                    {props.text}
                </div>
            </div>
        </Link>
    );
}

export default DashboardCard;
