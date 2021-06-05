import React, { useState, useEffect } from "react";
import axios from "axios";

function SkillBoard(props) {

    const url = "http://localhost:3001/";

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

    const [activeQualifications, setActiveQualifications] = useState([]);

    // generate custom qualification list, with boolean values if marked
    useEffect(() => {
        allPossibleSkills.forEach((skill) => {
            let valid = false;
            if (props.trainerSkillArray.includes(skill.id)) {
                valid = true;
            }
            setActiveQualifications(qualifications => [...qualifications, { trainer_id: props.trainer_id, skill: skill.skillset, marked: valid }]);
        });
    }, [allPossibleSkills, props.trainerSkillArray, props.trainer_id]);
    // console.log(activeQualifications);



    function onHandleChange(event) {
        // event.preventDefault();
        // console.log("onHandleChange working");
        console.log(event.target.value + " " + event.target.checked);
    }





    // display wholeskillboard
    const wholeSkillBoard = activeQualifications.map((qual) => {
        return (
            <div className="skills" key={qual.skill + qual.trainer_id}>
                <input
                    type="checkbox"
                    id={qual.skill + "_" + qual.trainer_id}
                    name={qual.skill}
                    value={qual.skill}
                    defaultChecked={qual.marked}
                    onChange={onHandleChange}
                />
                <label htmlFor={qual.skill + "_" + qual.trainer_id}>&nbsp;{qual.skill}</label>
            </div>
        );
    });

    return (
        <React.Fragment>
            { wholeSkillBoard}
        </React.Fragment>
    );
}

export default SkillBoard;
