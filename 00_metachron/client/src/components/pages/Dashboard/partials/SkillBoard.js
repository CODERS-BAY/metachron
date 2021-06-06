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

    // const [activeQualifications, setActiveQualifications] = useState([]);
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
        // eslint-disable-next-line
    }, [allPossibleSkills]);
    // console.log(activeQualifications);

    function onHandleChange(event) {
        // console.log(event.target.value + " " + event.target.checked + " " + event.target.title);
        props.changeTrainer({ skillName: event.target.value, skillStatus: event.target.checked, skillForTrainer: event.target.title });
    }

    // display wholeskillboard
    const wholeSkillBoard = activeQualifications.map((qual, idx) => {
        return (
            <div className="skills" key={qual.skill + qual.trainer_id + idx}>
                <input
                    type="checkbox"
                    id={qual.skill + "_" + qual.trainer_id}
                    title={qual.trainer_id}
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
