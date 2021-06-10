import React, { useState, useEffect } from "react";
import axios from "axios";
import Skillboard from "../partials/SkillBoard";

function ViewFour() {

    const url = "http://localhost:3001/";

    const [trainers, setTrainers] = useState([]);
    useEffect(() => {
        axios.get(`${url}trainersets/qualifications`)
            .then((response) => {
                // console.log(response.data);
                setTrainers(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    // setup for updating specific trainer skills
    const [changeTrainer, setChangeTrainer] = useState({
        skillName: "",
        skillStatus: "",
        skillForTrainer: ""
    });

    useEffect(() => {
        // console.log(changeTrainer);
        const updateSpecificTrainerSkills = {
            skillName: changeTrainer.skillName,
            skillStatus: changeTrainer.skillStatus,
            skillForTrainer: changeTrainer.skillForTrainer
        }

        axios.put(`${url}qualifications`, updateSpecificTrainerSkills)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [changeTrainer]);


    /* border for hover usercards */
    function handleMouseOver(uuid, event) {
        const trainerCard = document.getElementById(uuid);
        trainerCard.style.border = "2px solid rgb(55,155,255)";
    }
    function handleMouseOut(uuid, event) {
        const trainerCard = document.getElementById(uuid);
        trainerCard.style.border = "none";
    }


    /* filtered trainers */
    const trainerSnippets = trainers.map((trainer) => {
        if (trainer.Userrole.name === "trainer") {

            const trainerSkillArray = [];
            trainer.Qualifications.forEach((skill) => {
                trainerSkillArray.push(skill.id);
            });
            return (
                <div key={trainer.uuid}
                    id={trainer.uuid}
                    className={`trainerCard ${trainer.Userrole.name}`}
                    onMouseOver={(event) => handleMouseOver(trainer.uuid, event)}
                    onMouseOut={(event) => handleMouseOut(trainer.uuid, event)}
                >
                    <img src={trainer.pic_path} alt={`profile-pic-${trainer.username}`} />
                    <div>
                        Username: <span className="card__txt">{trainer.username}</span>
                        <br />
                        RealName: <span className="card__txt">{trainer.Userdatainfo.firstName} {trainer.Userdatainfo.lastName}</span>
                        <br />
                        Qualifications*:
                        <br />
                        <div className="skillsets">
                            <Skillboard trainerSkillArray={trainerSkillArray} trainer_id={trainer.uuid} changeTrainer={setChangeTrainer} />
                        </div>
                        <cite>*choose thoughtfully & be careful! <br /> changes are applied instantly!</cite>
                    </div>
                </div>
            );
        }
        return null;
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
        <div className="view view__four">
            <h2>List all Trainer Qualifications</h2>
            <div className="card-container">
                {trainerSnippets}
            </div>
        </div>
    );
}

export default ViewFour;
