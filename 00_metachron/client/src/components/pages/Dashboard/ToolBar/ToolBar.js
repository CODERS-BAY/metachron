import React from "react";

import { useState } from "react";
import { useEffect } from "react";

import MenuItems from "./MenuItems";

import { NavLink } from "react-router-dom";

function ToolBar() {

    /* populate nav */
    const MenuItemComponents = MenuItems.map((MenuItem) => {
        return (
            <li key={MenuItem.id}>
                <NavLink
                    className={MenuItem.className}
                    activeClassName={MenuItem.activeClassName}
                    to={MenuItem.to}
                >
                    {MenuItem.name}
                </NavLink>
            </li>
        );
    });

    /* handle burger click for navigation display */
    function handleClickBurger() {
        const toolControl = document.querySelector(".tool__control");
        const view = document.querySelector(".view");
        const toolNavBtn = document.querySelector(".tool__nav__btn");
        toolControl.classList.toggle("swipe");
        view.classList.toggle("swipe");
        toolNavBtn.classList.toggle("swipe");
    }

    /* handle click logout */
    function handleClickLogout() {
        localStorage.clear();
    }

    /* set logged user */
    const [username, setUsername] = useState("");
    /* set user pic */
    const [picpath, setPicpath] = useState("");


    /* check if localStorage is populated */
    useEffect(() => {
        if (localStorage.getItem("userCredentials") !== null) {
            // get JSON string
            const userCredentials = localStorage.getItem("userCredentials");
            // parse JSON string to js object
            const retrievedCredentials = JSON.parse(userCredentials);
            setUsername(retrievedCredentials.username);
            setPicpath(retrievedCredentials.pic_path);
            console.log(retrievedCredentials);
        } else {
            window.location.href = "/login";
        }
    }, []);

    return (
        <div>
            <div className="tool__navbar">
                <div className="tool__nav__btn" onClick={handleClickBurger}>
                    <div className="tool__btn__burger"></div>
                </div>
                <div className="tool__nav__logged__as">
                    <p>logged in as: &nbsp;
                        <span className="accent">
                            {username}
                        </span>
                    </p>
                    <img src={picpath} alt="profile_pic" id="profile_pic" />
                </div>
            </div>
            <div className="tool__control">
                <div className="tool__items">
                    <ul>
                        {MenuItemComponents}
                    </ul>
                </div>
                <div className="dashboard__loggout">
                    <a href="/login" onClick={handleClickLogout}>
                        Logout
                                </a>
                </div>
            </div>
        </div>
    )
}

export default ToolBar;