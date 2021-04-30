import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Login() {

    const url = "http://localhost:3001/";

    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const [validation, setValidation] = useState("");


    /* check if localStorage is already populated then forward to dashboard */
    useEffect(() => {
        if (localStorage.getItem("userCredentials") !== null) {
            window.location.href = "/dashboard";
        }
    }, []);


    /* handle user input */
    const handleInputChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const inputFields = document.querySelectorAll(".form__input");

        axios.post(`${url}login`, {
            username: state.username,
            password: state.password
        }).then((response) => {

            setValidation(response.data);
            console.log(response.data);

            if (response.data.msg !== "valid credentials") {
                inputFields.forEach(input => {
                    input.classList.add("invalid");
                });

            } else {
                inputFields.forEach(input => {
                    input.classList.remove("invalid");
                });

                // set Storage
                const userCredentials = {
                    username: response.data.username,
                    pic_path: response.data.pic_path,
                    userrole_id: response.data.userrole_id,
                    userdata_id: response.data.userdata_id,
                    logDate: new Date().getTime(),
                    expDate: "expire ..."
                }
                localStorage.setItem("userCredentials", JSON.stringify(userCredentials));
                // redirect to dashboard as default
                window.location.href = "/dashboard";

            }

        }).catch((error) => {
            console.log(error);
        });
    }

    /* handle default click */
    function handleClickDefault(event) {
        event.preventDefault();

        // set Storage
        const userCredentials = {
            username: "default",
            pic_path: "https://image.shutterstock.com/image-vector/glowing-neon-document-icon-isolated-600w-1606897852.jpg",
            userrole_id: 3,
            userdata_id: "--",
            logDate: new Date().getTime(),
            expDate: "expire ..."
        }
        localStorage.setItem("userCredentials", JSON.stringify(userCredentials));
        // redirect to dashboard as default
        window.location.href = "/dashboard";
    }

    /* renders to screen */
    return (
        <div className="container container-login">
            <div className="form-wrapper">
                <form className="form__login" onSubmit={handleSubmit}>

                    <p className="form__title">Log in</p>

                    <input
                        className="form__input"
                        type="text"
                        name="username"
                        value={state.username}
                        onChange={handleInputChange}
                        placeholder="Username"
                        autoFocus
                    />

                    <i className="fa fa-user"></i>

                    <input
                        className="form__input"
                        type="password"
                        name="password"
                        value={state.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                    />

                    <i className="fa fa-key"></i>

                    <button
                        className="form__btn"
                        name="login"
                        type="submit">
                        Permissioned Login
                    </button>

                    <p className="form__or">or, if you don't care</p>

                    <button
                        className="form__btn"
                        name="default"
                        onClick={handleClickDefault}>
                        Proceed as Default
                     </button>

                    <p className="form__info">{validation.msg}</p>
                </form>
            </div>
        </div>
    )
}

export default Login;