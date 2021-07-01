import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewSix() {

    const url = "http://localhost:3001/";

    /* get all traininggroups inclusive participants */
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

    /* get all users */
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(`${url}usersets`)
            .then((response) => {
                // console.log(response.data);
                setUsers(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    /* get all traininggroupsupervisor */
    const [trainingGroupSupervisors, setTrainingGroupSupervisors] = useState([]);
    useEffect(() => {
        axios.get(`${url}trainingGroupSupervisors`)
            .then((response) => {
                setTrainingGroupSupervisors(response.data);
                // console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    // /* border for hover usercards */
    function handleMouseOver(id, event) {
        const trainingGroupCard = document.getElementById(`trainingGroupId_${id}`);
        trainingGroupCard.style.border = "2px solid rgb(55,155,255)";
    }
    function handleMouseOut(id, event) {
        const trainingGroupCard = document.getElementById(`trainingGroupId_${id}`);
        trainingGroupCard.style.border = "none";
    }

    /* display for trainingGroupCards */
    const trainingGroupCards = allTrainingGroups.map((trainingGroup) => {
        // data = 2021-06-01T00:00:00.000Z
        function convertDate(data) {
            const myDate = new Date(data);
            const options = {
                timeZone: 'UTC',
                timeToneName: 'short',
                year: 'numeric',
                month: 'short',
                weekday: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            };
            return new Intl.DateTimeFormat('de-DE', options).format(myDate);
        }

        /* get all participants */
        const participantNames = trainingGroup.Users.map((user, idx) => {
            return (
                <span
                    className="card__txt"
                    key={idx}
                    id={`participant_${user.uuid}`}>{user.username}, </span>
            );
        });



        /* get supervisor */
        let supervisorIDs = [];
        trainingGroupSupervisors.forEach((supervisorSet) => {
            if (supervisorSet.trainingGroup_id === trainingGroup.id) {
                supervisorIDs.push(supervisorSet.supervisor);
            }
        });

        function getSupervisorName() {
            let i = 0;
            let supervisorName = "";
            users.forEach((user) => {
                if (supervisorIDs[i] === user.Userdatainfo.id) {
                    supervisorName = user.username;
                }
            });
            return (
                <span className="card__txt">{supervisorName}</span>
            );
        }

        // const supervisorSets = trainingGroupSupervisors.map((supervisorSet, idx) => {
        //     let supervisorName = "";

        //     users.forEach((user) => {
        //         if (supervisorSet.supervisor === user.Userdatainfo.id && supervisorSet.trainingGroup_id === trainingGroup.id) {
        //             supervisorName = user.username;
        //         } else {
        //             return null;
        //         }
        //     });
        //     return (
        //         <span
        //             className="card__txt"
        //             key={idx}>{`${supervisorName} `}</span>
        //     );
        // });

        return (
            <div className="trainingGroupCard" key={trainingGroup.id}
                id={`trainingGroupId_${trainingGroup.id}`}
                onMouseOver={(event) => handleMouseOver(trainingGroup.id, event)}
                onMouseOut={(event) => handleMouseOut(trainingGroup.id, event)} >
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
                        &nbsp;<input type="radio" id="internshipTrue" name={`${trainingGroup.TrainingSubject.title}`} value="true" defaultChecked={trainingGroup.internship === 1 ? true : false} />
                        <label htmlFor="internshipTrue">
                            <span className="card__txt">true</span>
                        </label>

                        &nbsp;<input type="radio" id="internshipFalse" name={`${trainingGroup.TrainingSubject.title}`} value="false" defaultChecked={trainingGroup.internship === 0 ? true : false} />
                        <label htmlFor="internshipFalse">
                            <span className="card__txt">false</span>
                        </label>

                        <br />
                        internshipStart: <span className="card__txt">{trainingGroup.internshipStart ? convertDate(trainingGroup.internshipStart) : "---"}</span>
                        <br />
                        internshipEnd: <span className="card__txt">{trainingGroup.internshipEnd ? convertDate(trainingGroup.internshipEnd) : "---"}</span>
                    </div>
                    <div className="content_participants">
                        participants: {participantNames}
                        <br />
                    </div>
                    <div className="content_supervisor">
                        supervisor: {getSupervisorName()}
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
