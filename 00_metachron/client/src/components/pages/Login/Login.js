import React from "react";
import { useState } from "react";
// import { useEffect } from "react";
import axios from "axios";

function Login() {

    const url = "http://localhost:3001/";

    // const [data, setData] = useState([]);
    // const [error, setError] = useState("");

    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const [validation, setValidation] = useState("");

    /* handle user input ***********************************************/
    const handleInputChange = (event) => {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(state);

        axios.post(`${url}login`, {
            username: state.username,
            password: state.password
        }).then((response) => {
            setValidation(response.data);
            if (response.data !== "valid credentials") {
                const inputFields = document.querySelectorAll(".form__input");
                inputFields.forEach(input => {
                    input.classList.add("invalid");
                });
            } else {
                const inputFields = document.querySelectorAll(".form__input");
                inputFields.forEach(input => {
                    input.classList.remove("invalid");
                });
            }
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }


    /* handle default click ***********************************************/
    function handleClickDefault(event) {
        event.preventDefault();
        window.location.href="/dashboard";
        // console.log(data);
        // console.log(error);
    }

    // useEffect(() => {
    //     axios.get(`${url}users`)
    //     .then(res => {
    //         setData(res.data);
    //         setError({ msg: "fetch success" });
    //         // console.log(res);
    //     })
    //     .catch(err => {
    //         setError({ msg: "fetch error" });
    //         // console.log(`Error: ${err}`);
    //     })
    // }, []);

    /* renders to screen ***********************************************/
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

                    <p className="form__info">{validation}</p>
                </form>
            </div>
        </div>
    )
}

export default Login;