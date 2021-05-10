import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function ViewTwo() {

    const url = "http://localhost:3001/";

    const [state, setState] = useState({
        username: "",
        password: "",
        passwordConfirm: "",
        userrole_id: "",
        firstName: "",
        lastName: "",
        address: "",
        zip: "",
        place: "",
        email: "",
        phone: "",
        github: ""
    });

    /* handle user input */
    const handleInputChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    // checking username
    const [invalidUsername, setInvalidUsername] = useState({ class: "" });
    useEffect(() => {
        setTimeout(() => {
            axios.post(`${url}checkDuplicateUser`, {
                username: state.username
            }).then((response) => {
                // console.log(response.data);
                if (response.data.duplicate) {
                    setInvalidUsername({ class: "invalid" });
                } else {
                    setInvalidUsername({ class: "" });
                }
            }).catch((error) => {
                console.log(error);
            });
        }, 1500);
    }, [state.username]);

    // checking user email
    const [invalidUserEmail, setinvalidUserEmail] = useState({ class: "" });
    useEffect(() => {
        setTimeout(() => {
            axios.post(`${url}checkDuplicateUserEmail`, {
                email: state.email
            }).then((response) => {
                // console.log(response.data);
                if (response.data.duplicate) {
                    setinvalidUserEmail({ class: "invalid" });
                } else {
                    setinvalidUserEmail({ class: "" });
                }
            }).catch((error) => {
                console.log(error);
            });
        }, 1500);
    }, [state.email]);

    // checking password & passwordConfirm
    const [comparePasswordFields, setComparePasswordFields] = useState({ class: "" });
    useEffect(() => {
        if (state.password !== state.passwordConfirm) {
            // console.log("invalid password compare")
            setComparePasswordFields({ class: "invalid" });
        } else {
            // console.log("valid password compare")
            setComparePasswordFields({ class: "" });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.passwordConfirm]);

    const [addMessage, setAddMessage] = useState("");

    function onSubmit(event) {
        event.preventDefault();
        // console.log(state);

        if (window.confirm(`ensure insertion of entry!`)) {
            // creating userset
            if (comparePasswordFields.class === "" && invalidUsername.class === "") {
                axios.post(`${url}usersets`, {
                    firstName: state.firstName,
                    lastName: state.lastName,
                    address: state.address,
                    zip: state.zip,
                    place: state.place,
                    email: state.email,
                    phone: state.phone,
                    github: state.github,
                    username: state.username,
                    password: state.password,
                    userrole_id: state.userrole_id
                }).then((response) => {
                    console.log("userdata successfully inserted");
                    setAddMessage({ msg: "user successfully added" });
                    // console.log(response.data);
                }).catch((error) => {
                    setAddMessage({ msg: "server error occurred" });
                    console.log(error);
                });
                setState({
                    username: "",
                    password: "",
                    passwordConfirm: "",
                    userrole_id: "",
                    firstName: "",
                    lastName: "",
                    address: "",
                    zip: "",
                    place: "",
                    email: "",
                    phone: "",
                    github: ""
                });
            } else {
                // alert("something's wrong here, check again!");
                setAddMessage({ msg: "take care of your input" });
            }
        } else {
            console.log("insertion aborted");
            setAddMessage({ msg: "insertion canceled" });
        }
    }

    setTimeout(() => {
        setAddMessage({ msg: "" });
    }, 2500);

    /* back to main view and list all users */
    function handleCheckUsers() {
        window.location.href = "/dashboard/viewone";
    }

    return (
        <div className="view view__two">
            <h2>Add User</h2>
            <form className="__form" onSubmit={onSubmit} autoComplete="none">
                <label className="form__label" htmlFor="username">username:*</label>
                <input
                    className={`form__input ${invalidUsername.class}`}
                    id="inputUsername"
                    type="text"
                    name="username"
                    onChange={handleInputChange}
                    value={state.username}
                    placeholder="enter username"
                    minLength="4"
                    maxLength="15"
                    // autoComplete="none"
                    required
                />

                <label className="form__label" htmlFor="password">pwd:*</label>
                <input
                    className={`form__input ${comparePasswordFields.class}`}
                    id="inputPassword"
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    value={state.password}
                    placeholder="enter password"
                    // autoComplete="none"
                    required
                />
                <label className="form__label" htmlFor="passwordConfirm">re - pwd:*</label>
                <input
                    className={`form__input ${comparePasswordFields.class}`}
                    id="inputPasswordConfirm"
                    type="password"
                    name="passwordConfirm"
                    onChange={handleInputChange}
                    value={state.passwordConfirm}
                    placeholder="retype password"
                    // autoComplete="none"
                    required
                />

                <label className="form__label" htmlFor="userrole_id">userrole:*</label>
                <select
                    className="form__input"
                    name="userrole_id"
                    onChange={handleInputChange}
                    value={state.userrole_id}
                    // autoComplete="none"
                    required
                >
                    <option name="userrole_id" value="0" defaultValue>--userrole</option>
                    <option name="userrole_id" value="1">admin</option>
                    <option name="userrole_id" value="2">trainer</option>
                    <option name="userrole_id" value="3">student</option>
                </select>

                <label className="form__label" htmlFor="firstName">firstName:*</label>
                <input
                    className="form__input"
                    type="text"
                    name="firstName"
                    onChange={handleInputChange}
                    value={state.firstName}
                    placeholder="enter firstName"
                    // autoComplete="none"
                    required
                />

                <label className="form__label" htmlFor="lastName">lastName:*</label>
                <input
                    className="form__input"
                    type="text"
                    name="lastName"
                    onChange={handleInputChange}
                    value={state.lastName}
                    placeholder="enter lastName"
                    // autoComplete="none"
                    required
                />

                <label className="form__label" htmlFor="address">address:*</label>
                <input
                    className="form__input"
                    type="text"
                    name="address"
                    onChange={handleInputChange}
                    value={state.address}
                    placeholder="enter address"
                    // autoComplete="none"
                    required
                />

                <label className="form__label" htmlFor="zip">zip:*</label>
                <input
                    className="form__input"
                    type="number"
                    name="zip"
                    onChange={handleInputChange}
                    value={state.zip}
                    placeholder="enter zip"
                    min="1000"
                    max="9999"
                    // autoComplete="none"
                    required
                />

                <label className="form__label" htmlFor="place">city:*</label>
                <input
                    className="form__input"
                    type="text"
                    name="place"
                    onChange={handleInputChange}
                    value={state.place}
                    placeholder="enter city"
                    // autoComplete="none"
                    required
                />

                <label className="form__label" htmlFor="email">email:*</label>
                <input
                    className={`form__input ${invalidUserEmail.class}`}
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    value={state.email}
                    placeholder="enter email"
                    // autoComplete="none"
                    required
                />

                <label className="form__label" htmlFor="phone">phone:</label>
                <input
                    className="form__input"
                    type="text"
                    name="phone"
                    onChange={handleInputChange}
                    value={state.phone}
                    placeholder="enter phone"
                // autoComplete="none"
                />

                <label className="form__label" htmlFor="github">github:</label>
                <input
                    className="form__input"
                    type="text"
                    name="github"
                    onChange={handleInputChange}
                    value={state.github}
                    placeholder="enter github"
                // autoComplete="none"
                />
                <button
                    className="form__btn"
                    name="addUser"
                    type="submit">
                    add user
                </button>
                <button
                    className="form__btn"
                    name="checkUsers"
                    onClick={handleCheckUsers}
                >
                    check users
                </button>
            </form>
            <p className="form__info">
                {addMessage.msg}
            </p>
        </div>
    );
}

export default ViewTwo;
