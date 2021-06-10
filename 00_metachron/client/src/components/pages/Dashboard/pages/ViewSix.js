import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewSix() {

    const url = "http://localhost:3001/";

    const [trainingGroups, setTrainingGroups] = useState([]);
    useEffect(() => {
        axios.get(`${url}traininggroups`)
            .then((response) => {
                // console.log(response.data);
                setTrainingGroups(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }, []);


    const emptyUserCard = (
        <div className="trainingGroupCard emptyTrainingGroupCard">
            <p>
                want to add a new trainingsubject?
                    </p>
            <div className="plusSymbole"></div>
        </div>
    );

    // /* border for hover usercards */
    // function handleMouseOver(uuid, event) {
    //     const trainingGroupCard = document.getElementById(uuid);
    //     trainingGroupCard.style.border = "2px solid rgb(55,155,255)";
    // }
    // function handleMouseOut(uuid, event) {
    //     const trainingGroupCard = document.getElementById(uuid);
    //     trainingGroupCard.style.border = "none";
    // }


    /**
     * useEffect cleanup
     */
    useEffect(() => {
        return () => {
            console.log("garbage collector has done its work");
        };
    }, []);

    return (
        <div className="view view__six">
            <h2>List of Training Groups</h2>
            <div className="filter-control">
                <ul>
                    <p>Listview: </p>
                    <li>TESTLINK 1</li>
                    <li>TESTLINK 2</li>
                </ul>
            </div>
            <div className="card-container">
                {emptyUserCard}
                <div className="trainingGroupCard">
                    groupcard here
                </div>
            </div>
        </div>
    );
}

export default ViewSix;
