import React from "react";
import MenuItems from "./MenuItems";

import { NavLink } from "react-router-dom";

function ToolBar() {

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

    function handleClickBurger() {
        const toolControl = document.querySelector(".tool__control");
        const view = document.querySelector(".view");
        const toolNavBtn = document.querySelector(".tool__nav__btn");
        toolControl.classList.toggle("swipe");
        view.classList.toggle("swipe");
        toolNavBtn.classList.toggle("swipe");
    }

    return (
        <div>
            <div className="tool__navbar">
                <div className="tool__nav__btn" onClick={handleClickBurger}>
                    <div className="tool__btn__burger"></div>
                </div>
                <div className="tool__nav__logged__as">
                    <p>current role-view: student</p>
                </div>
            </div>
            <div className="tool__control">
                <div className="tool__items">
                    <ul>
                        {MenuItemComponents}
                    </ul>
                </div>
                <div className="dashboard__loggout">
                    <a href="/login">
                        Logout
                        </a>
                </div>
            </div>
        </div>
    )
}

export default ToolBar;