import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

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


    /******************************/


    /* all skills */
    const [allPossibleSkills, setAllPossibleSkills] = useState([]);
    useEffect(() => {
        axios.get(`${url}qualifications`)
            .then((response) => {
                // console.log(response.data);
                setAllPossibleSkills(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    const [checked, setChecked] = useState(true);

    function handleChangeCheck() {
        console.log("handleChangeCheck working");
    }

    /* filtered trainers */
    const trainerSnippets = trainers.map((trainer) => {
        if (trainer.Userrole.name === "trainer") {
        
            const trainerSkillArray = [];
            trainer.Qualifications.map((qual) => {
                trainerSkillArray.push(qual.skillset);
                return null;
            });

            const completeSkillSet = allPossibleSkills.map((skill) => {
                if (trainerSkillArray.includes(skill.skillset)) {
                    return (
                        <div className="skills" key={skill.skillset}>
                            <input 
                                type="checkbox" 
                                id={skill.skillset} 
                                name={skill.skillset} 
                                defaultChecked={checked}
                                onChange={() => setChecked(!checked)}
                            />
                            <label htmlFor={skill.skillset}>{skill.skillset}</label>
                        </div>
                    );
                } else {
                    return (
                        <div className="skills" key={skill.skillset}>
                            <input 
                                type="checkbox" 
                                id={skill.skillset}
                                name={skill.skillset} 
                                onChange={() => setChecked(!checked)}
                            />
                            <label htmlFor={skill.skillset}>{skill.skillset}</label>
                        </div>
                    );
                }

            });

            return (
                <div key={trainer.uuid}
                    id={trainer.uuid}
                    className={`trainerCard ${trainer.Userrole.name}`}
                >
                    <img src={trainer.pic_path} alt={`profile-pic-${trainer.username}`} />
                    <div>
                        Username: <span className="card__txt">{trainer.username}</span>
                        <br />
                        RealName: <span className="card__txt">{trainer.Userdatainfo.firstName} {trainer.Userdatainfo.lastName}</span>
                        <br />
                        Qualifications:
                        <br />
                        <div className="skillsets">
                            {completeSkillSet}
                        </div>
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
