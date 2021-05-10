import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function ViewThree() {

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

    /**********************************************************************/
    const [searchTerm, setSearchTerm] = useState("");

    // get all users from db
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(`${url}usersets`)
            .then((response) => {
                // console.log(response.data);
                setUsers(response.data);

                if (localStorage.getItem("searchUserCredentials") !== null) {
                    // get JSON string
                    const searchUserCredentials = localStorage.getItem("searchUserCredentials");
                    // parse JSON string to js object
                    const retrievedStorageUser = JSON.parse(searchUserCredentials);
                    // console.log(retrievedStorageUser.username);
                    setSearchTerm(retrievedStorageUser.username);
                }
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {

        const form = document.querySelector(".__form");
        if (searchTerm === "") {
            form.style.pointerEvents = "none";
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
            form.style.pointerEvents = "all";
            setTimeout(() => {
                axios.get(`${url}usersets/${searchTerm}`)
                    .then((response) => {
                        // console.log(response.data);
                        setState({
                            username: response.data.username,
                            password: response.data.password,
                            passwordConfirm: response.data.password,
                            userrole_id: response.data.userrole_id,
                            firstName: response.data.Userdatainfo.firstName,
                            lastName: response.data.Userdatainfo.lastName,
                            address: response.data.Userdatainfo.address,
                            zip: response.data.Userdatainfo.zip,
                            place: response.data.Userdatainfo.place,
                            email: response.data.Userdatainfo.email,
                            phone: response.data.Userdatainfo.phone,
                            github: response.data.Userdatainfo.github
                        });
                    }).catch((error) => {
                        console.log(error);
                    });
            }, 1500);
        }
    }, [searchTerm]);


    /* handle user input */
    const handleInputChange = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    }



    /**********************************************************************/

    /* back to main view and list all users */
    function handleCheckUsers(event) {
        event.preventDefault();
        window.location.href = "/dashboard/viewone";
    }

    /* on submit edit user */
    function onSubmit() {
        console.log("onsubmit");
    }

    return (
        <div className="view view__three">
            <h2>Edit User</h2>

            <label htmlFor="usersets">which user are you looking for ...</label>
            <input
                type="text"
                list="usersets"
                name="usersets"
                id="users"
                placeholder="which user are you looking for ..."
                className="search__input"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <datalist id="usersets">
                {users.map(user => (
                    <option
                        key={user.uuid}
                        value={user.username}
                    />
                ))}
            </datalist>

            <form className="__form" onSubmit={onSubmit} autoComplete="none">
                <label className="form__label" htmlFor="username">username:*</label>
                <input
                    className={`form__input`}
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

                <label className="form__label" htmlFor="password"> new pwd:*</label>
                <input
                    className={`form__input`}
                    id="inputPassword"
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    value={state.password}
                    placeholder="enter new password"
                    // autoComplete="none"
                    required
                />
                <label className="form__label" htmlFor="passwordConfirm">re - pwd:*</label>
                <input
                    className={`form__input`}
                    id="inputPasswordConfirm"
                    type="password"
                    name="passwordConfirm"
                    onChange={handleInputChange}
                    value={state.password}
                    placeholder="retype new password"
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
                    value={`${state.address}`}
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
                    className={`form__input`}
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
                    edit user
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
                "editMessage.msg"
            </p>
        </div>
    );
}

export default ViewThree;
