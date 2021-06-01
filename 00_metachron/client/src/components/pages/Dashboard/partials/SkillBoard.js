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

    function onHandleChange(event) {
        event.preventDefault();
        console.log("onHandleChange working");
    }


    const wholeSkillBoard = allPossibleSkills.map((skill, idx) => {
        if (props.trainerSkillArray.includes(skill.id)) {
            return (
                <div className="skills" key={idx}>
                    <input
                        type="checkbox"
                        id={skill.skillset}
                        name={skill.skillset}
                        value={skill.skillset}
                        checked
                        onChange={onHandleChange}
                    />
                    <label htmlFor={skill.skillset}>&nbsp;{skill.skillset}</label>
                </div>
            );
        } else {
            return (
                <div className="skills" key={idx}>
                    <input
                        type="checkbox"
                        id={skill.skillset}
                        name={skill.skillset}
                        value={skill.skillset}
                        onChange={onHandleChange}
                    />
                    <label htmlFor={skill.skillset}>&nbsp;{skill.skillset}</label>
                </div>
            );
        }
    });

    return (
        <React.Fragment>
            { wholeSkillBoard}
        </React.Fragment>
    );
}

export default SkillBoard;
