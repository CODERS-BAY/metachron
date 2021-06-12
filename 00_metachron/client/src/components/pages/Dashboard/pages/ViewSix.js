import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewSix() {

    const url = "http://localhost:3001/";

    const [allTrainingGroups, setAllTrainingGroups] = useState([]);
    useEffect(() => {
        axios.get(`${url}traininggroups`)
            .then((response) => {
                // console.log(response.data);
                setAllTrainingGroups(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }, []);


    // /* border for hover usercards */
    // function handleMouseOver(uuid, event) {
    //     const trainingGroupCard = document.getElementById(uuid);
    //     trainingGroupCard.style.border = "2px solid rgb(55,155,255)";
    // }
    // function handleMouseOut(uuid, event) {
    //     const trainingGroupCard = document.getElementById(uuid);
    //     trainingGroupCard.style.border = "none";
    // }

    // table trainingGroup all relations // participants
    // button events (new view)
    // event details (new view)

    const trainingGroupCards = allTrainingGroups.map((trainingGroup) => {

        // data = 2021-06-01T00:00:00.000Z
        function convertDate(data) {
            const myDate = new Date(data);
            const options = { year: 'numeric', month: 'long', day: '2-digit' };
            return new Intl.DateTimeFormat('de-DE', options).format(myDate);
        }

        return (
            <div className="trainingGroupCard" key={trainingGroup.id}>
                <div className="trainingGroupSubject">
                    <h3>TrainingSubject:&nbsp;
                        <span className="accent">
                            {trainingGroup.TrainingSubject.title}
                        </span>
                    </h3>
                </div>

                <div className="trainingGroup_content">
                    <div className="content_main">
                        startDate: <span className="card__txt">{convertDate(trainingGroup.startDate)}</span>
                        <br />
                        endDate: <span className="card__txt">{convertDate(trainingGroup.endDate)}</span>
                        <br />
                        internship:
                        <input type="radio" id="internshipTrue" name={`${trainingGroup.TrainingSubject.title}`} value="true" defaultChecked={trainingGroup.internship === 1 ? true : false} />
                        <label htmlFor="internshipTrue">
                            <span className="card__txt">true</span>
                        </label>

                        <input type="radio" id="internshipFalse" name={`${trainingGroup.TrainingSubject.title}`} value="false" defaultChecked={trainingGroup.internship === 0 ? true : false} />
                        <label htmlFor="internshipFalse">
                            <span className="card__txt">false</span>
                        </label>

                        <br />
                        internshipStart: <span className="card__txt">{trainingGroup.internshipStart ? trainingGroup.internshipStart : "---"}</span>
                        <br />
                        internshipEnd: <span className="card__txt">{trainingGroup.internshipEnd ? trainingGroup.internshipEnd : "---"}</span>
                    </div>
                    <div className="content_participants">
                        participants:
                        <br />
                    </div>
                    <div className="content_supervisor">
                        supervisor:
                        <br />
                    </div>
                </div>
                <button className="btn btn__edit">Edit</button>
                <button className="btn btn__delete">Delete</button>
            </div>
        );
    });

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
            <div className="card-container">

                {trainingGroupCards}
            </div>
        </div>
    );
}

export default ViewSix;
