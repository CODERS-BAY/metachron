import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DashboardCard(props) {

    /* set logged userrole */
    const [userrole, setUserrole] = useState("");

    /* check if localStorage is populated */
    useEffect(() => {

        // get JSON string
        const userCredentials = localStorage.getItem("userCredentials");
        // parse JSON string to js object
        const retrievedCredentials = JSON.parse(userCredentials);

        if (retrievedCredentials.userrole_id === 1) {
            setUserrole("Admin");
        } else if (retrievedCredentials.userrole_id === 2) {
            setUserrole("Trainer");
        } else {
            setUserrole("Student");
        }

    }, []);

    /* check userrole to display specific nav-items */
    useEffect(() => {
        // const cardLinkItemListAllUsers = document.getElementById("cardlink_2");
        const cardLinkItemAddUser = document.getElementById("cardlink_3");
        const cardLinkItemEditUser = document.getElementById("cardlink_4");
        const cardLinkItemListAllTrainerQualifications = document.getElementById("cardlink_5");
        const cardLinkItemQualifications = document.getElementById("cardlink_6");
        const cardLinkItemListAllTrainingGroups = document.getElementById("cardlink_7");

        if (userrole === "Student") {
            // cardLinkItemListAllUsers.classList.add("dnone");
            cardLinkItemAddUser.classList.add("dnone");
            cardLinkItemEditUser.classList.add("dnone");
            cardLinkItemListAllTrainerQualifications.classList.add("dnone");
            cardLinkItemQualifications.classList.add("dnone");
            cardLinkItemListAllTrainingGroups.classList.add("dnone");
        }
    }, [userrole]);


    return (
        <Link to={props.linkTo} id={`cardlink_${props.idx}`}>
            <div className={`card emptyCard`}>
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
