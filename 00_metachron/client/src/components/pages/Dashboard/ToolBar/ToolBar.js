import React, { useState, useEffect } from "react";

import MenuItems from "./MenuItems";

import { NavLink } from "react-router-dom";

function ToolBar() {

    const [windowWidth, setWindowWidth] = useState();
    window.addEventListener("resize", function (event) {
        event.preventDefault();
        setWindowWidth(window.innerWidth);
        const toolControl = document.querySelector(".tool__control");
        const view = document.querySelector(".view");
        const toolNavBtn = document.querySelector(".tool__nav__btn");
        if (windowWidth < 555) {
            toolControl.classList.add("swipe");
            view.classList.add("swipe");
            toolNavBtn.classList.add("swipe");
        } else {
            toolControl.classList.remove("swipe");
            view.classList.remove("swipe");
            toolNavBtn.classList.remove("swipe");
        }
    });

    /* populate nav */
    const MenuItemComponents = MenuItems.map((MenuItem) => {
        return (
            <li key={MenuItem.id} id={`sniplink_${MenuItem.id}`}>
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
    /* set logged userrole */
    const [userrole, setUserrole] = useState("");
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

            if (retrievedCredentials.userrole_id === 1) {
                setUserrole("Admin");
            } else if (retrievedCredentials.userrole_id === 2) {
                setUserrole("Trainer");
            } else {
                setUserrole("Student");
            }

            setPicpath(retrievedCredentials.pic_path);

            console.log(retrievedCredentials);
        } else {
            window.location.href = "/login";
        }
    }, []);

    /* check userrole to display specific nav-items */
    useEffect(() => {
        // const navLinkItemListAllUsers = document.getElementById("sniplink_2");
        const navLinkItemAddUser = document.getElementById("sniplink_3");
        const navLinkItemEditUser = document.getElementById("sniplink_4");
        const navLinkItemListAllTrainerQualifications = document.getElementById("sniplink_5");
        const navLinkItemQualifications = document.getElementById("sniplink_6");
        const navLinkItemListAllTrainingGroups = document.getElementById("sniplink_7");

        if (userrole === "Student") {
            // navLinkItemListAllUsers.classList.add("dnone");
            navLinkItemAddUser.classList.add("dnone");
            navLinkItemEditUser.classList.add("dnone");
            navLinkItemListAllTrainerQualifications.classList.add("dnone");
            navLinkItemQualifications.classList.add("dnone");
            navLinkItemListAllTrainingGroups.classList.add("dnone");
        }
    },[userrole]);

    /**
     * useEffect cleanup
     */
    useEffect(() => {
        return () => {
            console.log("garbage collector has done its work");
        };
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
                            {username} ({userrole})
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