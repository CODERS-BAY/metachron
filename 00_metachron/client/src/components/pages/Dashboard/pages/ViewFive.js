import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewFive() {

    const url = "http://localhost:3001/";

    // get all possible and existing qualifications
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


    const skillsArray = [];
    allPossibleSkills.forEach(skill => {
        skillsArray.push(skill.skillset.toLowerCase());
    });

    // handle change inputfield for add qualifications
    const [inputAddQualification, setInputAddQualification] = useState("");
    const [invalid, setInvalid] = useState("");

    const [addValidation, setAddValidation] = useState(false);
    const [addMessage, setAddMessage] = useState("");

    function handleInputChange(event) {
        event.preventDefault();
        setInputAddQualification(event.target.value);
        // console.log(event.target.value);
        if (skillsArray.includes(event.target.value)) {
            setInvalid({ class: "invalid" });
            setAddValidation(false);
            setAddMessage({ msg: "this qualification already exists" })
        } else {
            setInvalid({ class: "" });
            setAddValidation(true);
            setAddMessage({ msg: "ready to add new qualification" })
        }
    }

    // disable button for check input and set event btn
    useEffect(() => {
        const btn = document.getElementById("addQualification");
        if (addValidation) {
            btn.style.pointerEvents = "all";
        } else {
            btn.style.pointerEvents = "none";
        }
    }, [addValidation]);

    // existing skills li elements for render
    const existingSkills = allPossibleSkills.map((skill) => {
        if (inputAddQualification.toLowerCase() === skill.skillset.toLowerCase()) {
            return (
                <li key={skill.id} className="danger">
                    <p id={skill.skillset}>{skill.skillset}</p>
                </li>
            );
        } else {
            return (
                <li key={skill.id}>
                    <p id={skill.skillset}>{skill.skillset}</p>
                </li>
            );
        }
    });

    /* on submit create qualification */
    function onSubmit(event) {
        const createQualification = {
            skillset: inputAddQualification.toUpperCase()
        }

        if (window.confirm(`ensure insertion of entry!`)) {
            console.log("insertion confirmed");
            axios.post(`${url}qualifications`, createQualification)
                .then((response) => {
                    // console.log(response.data);
                    console.log("qualification successfully inserted");
                    setAddMessage({ msg: "qualification successfully inserted" });
                })
                .catch((error) => {
                    console.log(error);
                    setAddMessage({ msg: "server error occurred" });
                });
        } else {
            event.preventDefault();
            console.log("insertion aborted");
            setAddMessage({ msg: "insertion aborted" });
        }
    }

    // disable button for deleting a qualification
    const [deleteValidation, setDeleteValidation] = useState(false);
    useEffect(() => {
        const btn = document.getElementById("deleteQualification");
        if (deleteValidation) {
            btn.style.pointerEvents = "all";
        } else {
            btn.style.pointerEvents = "none";
        }
    }, [deleteValidation]);

    // get value of skill to delete
    const [skillToDelete, setSkillToDelete] = useState("");
    function handleListChangeQualifications(event) {
        if (event.target.value !== "DEFAULT") {
            setDeleteValidation(true);
            setSkillToDelete(event.target.value);
            console.log("selected qualification to delete: " + event.target.value);
        } else {
            setDeleteValidation(false);
            console.log("no selected qualification to delete");
        }
    }

    /* on delete create qualification */
    function onDelete(event) {
        if (window.confirm(`ensure deletion of entry!`)) {
            console.log("deletion confirmed");
            axios.delete(`${url}qualifications/delete`, {
                data: {
                        skillset: skillToDelete,
                    }
                })
                .then((response) => {
                    // console.log(response.data);
                    console.log("qualification successfully deleted");
                    setAddMessage({ msg: "qualification successfully deleted" });
                })
                .catch((error) => {
                    console.log(error);
                    setAddMessage({ msg: "server error occurred" });
                });
        } else {
            event.preventDefault();
            console.log("deletion aborted");
            setAddMessage({ msg: "deletion aborted" });
        }
    }

    setTimeout(() => {
        setAddMessage("");
    }, 2500);

    /**
     * useEffect cleanup
     */
    useEffect(() => {
        return () => {
            console.log("garbage collector has done its work");
        };
    }, []);

    return (
        <div className="view view__five">
            <h2>Qualifications</h2>

            <form className="__form" autoComplete="none" id="qualifications">
                <label className="form__label" htmlFor="txt">all existing qualifications</label>
                <ul className="cloud">
                    {existingSkills}
                </ul>

                <label htmlFor="allQualifications" className="form__label">delete a specific qualification?</label>
                <select id="allQualifications" name="allQualifications" defaultValue="DEFAULT" onChange={handleListChangeQualifications}>
                    <option value="DEFAULT">-- which qualification are you looking for ...</option>
                    {allPossibleSkills.map(skill => (
                        <option key={skill.id} value={skill.skillset}>
                            {skill.skillset}
                        </option>
                    ))}
                </select>
                <button
                    className="form__btn"
                    id="deleteQualification"
                    name="deleteQualification"
                    onClick={onDelete}
                >
                    delete qualification
                </button>

                <label htmlFor={inputAddQualification} className="form__label">which qualification do you want to add?</label>
                <input
                    className={`form__input ${invalid.class}`}
                    type="text"
                    name={inputAddQualification}
                    id={inputAddQualification}
                    value={inputAddQualification}
                    placeholder="enter new qualification"
                    onChange={handleInputChange}
                // autoComplete="none"
                />
                <button
                    className="form__btn"
                    id="addQualification"
                    name="addQualification"
                    onClick={onSubmit}
                >
                    add qualification
                </button>

            </form>
            <p className="form__info">
                {addMessage.msg}
            </p>
        </div>
    );
}

export default ViewFive;
