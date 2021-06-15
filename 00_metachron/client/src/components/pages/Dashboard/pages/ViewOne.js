import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewOne() {

    const url = "http://localhost:3001/";

    /*** delete user ***/
    const [toDelete, setToDelete] = useState({ username: "" });
    function handleDeleteClick(user, event) {
        event.preventDefault();

        if (window.confirm(`ensure deletion of entry from database!`)) {
            console.log("deletion confirmed");
            axios.delete(`${url}usersets/delete`, {
                data: {
                    username: user.username,
                }
            }).then((response) => {
                console.log(response.data);
                setToDelete({ username: user.username });
            }).catch((error) => {
                console.log(error);
            });
        } else {
            console.log("deletion aborted");
        }
    }

    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(`${url}usersets`)
            .then((response) => {
                // console.log(response.data);
                setUsers(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }, [toDelete]);

    const filterNavlinks = [
        { id: "all", name: "all", value: "all", className: "filter--link", activeClassName: "filter--link--active" },
        { id: "admin", name: "admin", value: "admin", className: "filter--link", activeClassName: "filter--link--active" },
        { id: "trainer", name: "trainer", value: "trainer", className: "filter--link", activeClassName: "filter--link--active" },
        { id: "student", name: "student", value: "student", className: "filter--link", activeClassName: "filter--link--active" },
    ];

    const [clickNavLink, setClickNavLink] = useState([]);
    function handleClickFilter(event) {
        event.preventDefault();
        let value = event.target.getAttribute("value");

        if (value === "all") setClickNavLink("all");
        else if (value === "admin") setClickNavLink("admin");
        else if (value === "trainer") setClickNavLink("trainer");
        else if (value === "student") setClickNavLink("student");
    }

    /* border for hover usercards */
    function handleMouseOver(uuid, event) {
        const userCard = document.getElementById(uuid);
        userCard.style.border = "2px solid rgb(55,155,255)";
    }
    function handleMouseOut(uuid, event) {
        const userCard = document.getElementById(uuid);
        userCard.style.border = "none";
    }

    /* filtered users */
    const userFilterSnippets = users.map((user) => {
        if (user.Userrole.name === clickNavLink) {
            return (
                <div key={user.uuid}
                    id={user.uuid}
                    className={`userCard ${user.Userrole.name}`}
                    onMouseOver={(event) => handleMouseOver(user.uuid, event)}
                    onMouseOut={(event) => handleMouseOut(user.uuid, event)}
                >
                    <img src={user.pic_path} alt={`profile-pic-${user.username}`} />
                    <p>
                        Username: <span className="card__txt">{user.username}</span>
                        <br />
                           RealName: <span className="card__txt">{user.Userdatainfo.firstName} {user.Userdatainfo.lastName}</span>
                        <br />
                           Address: <span className="card__txt">{user.Userdatainfo.address}</span>
                        <br />
                           ZIP/Place: <span className="card__txt">{user.Userdatainfo.zip} {user.Userdatainfo.place}</span>
                        <br />
                           Email: <span className="card__txt">{user.Userdatainfo.email}</span>
                        <br />
                           Phone: <span className="card__txt">{user.Userdatainfo.phone}</span>
                        <br />
                           Github: <span className="card__txt"><a href="https://github.com">{user.Userdatainfo.github}</a></span>
                        <br />
                           Pic: <span className="card__txt"><a href={user.pic_path}>profile-picture-link</a></span>
                        <br />
                    </p>
                    <button className="btn btn__edit" onClick={(event) => { handleEditClick(user, event); }}>Edit</button>
                    <button className="btn btn__delete" onClick={(event) => { handleDeleteClick(user, event); }}>Delete</button>
                </div>
            );
        }
        if (clickNavLink === "all") {
            return (
                <div key={user.uuid}
                    id={user.uuid}
                    className={`userCard`}
                    onMouseOver={(event) => handleMouseOver(user.uuid, event)}
                    onMouseOut={(event) => handleMouseOut(user.uuid, event)}
                >
                    <img src={user.pic_path} alt={`profile-pic-${user.username}`} />
                    <p>
                        Username: <span className="card__txt">{user.username}</span>
                        <br />
                    RealName: <span className="card__txt">{user.Userdatainfo.firstName} {user.Userdatainfo.lastName}</span>
                        <br />
                    Address: <span className="card__txt">{user.Userdatainfo.address}</span>
                        <br />
                    ZIP/City: <span className="card__txt">{user.Userdatainfo.zip} {user.Userdatainfo.place}</span>
                        <br />
                    Email: <span className="card__txt">{user.Userdatainfo.email}</span>
                        <br />
                    Phone: <span className="card__txt">{user.Userdatainfo.phone}</span>
                        <br />
                    Github: <span className="card__txt"><a href={`https://github.com/${user.Userdatainfo.github}`}>{user.Userdatainfo.github}</a></span>
                        <br />
                    Pic: <span className="card__txt"><a href={user.pic_path}>{user.Userrole.name}</a></span>
                        <br />
                    </p>
                    <button className="btn btn__edit" onClick={(event) => { handleEditClick(user, event); }}>Edit</button>
                    <button className="btn btn__delete" onClick={(event) => { handleDeleteClick(user, event); }}>Delete</button>
                </div>
            );
        }
        return null;
    });

    function handleAddClick() {
        window.location.href = "/dashboard/viewtwo";
    }

    const emptyUserCard = (
        <div className="userCard emptyUserCard" onClick={handleAddClick}>
            <p>
                want to add a new {((clickNavLink === "admin") ? "admin" : (clickNavLink === "trainer") ? "trainer" : (clickNavLink === "student") ? "student" : "user")}?
                    </p>
            <div className="plusSymbole"></div>
        </div>
    );

    const [activeLink, setActiveLink] = useState();
    useEffect(() => {
        setClickNavLink("all");
        setActiveLink("all");
    }, []);

    function handleEditClick(user, event) {
        const searchUserCredentials = {
            uuid: user.uuid,
            username: user.username
        }
        localStorage.setItem("searchUserCredentials", JSON.stringify(searchUserCredentials));
        window.location.href = "/dashboard/viewthree";
    }

    /* set logged userrole */
    const [userrole, setUserrole] = useState("");

    /* check if localStorage is populated */
    useEffect(() => {
        // get JSON string
        const userCredentials = localStorage.getItem("userCredentials");
        // parse JSON string to js object
        const retrievedCredentials = JSON.parse(userCredentials);
        
        if (retrievedCredentials.userrole_id === 1) {
            setUserrole("Admin");
        } else if (retrievedCredentials.userrole_id === 2) {
            setUserrole("Trainer");
        } else {
            setUserrole("Student");
        }
    }, [users]);
    
    /* disable buttons if userrole is student */
    useEffect(() => {
        const userCard = document.getElementsByClassName("userCard")[0];
        const btnsEdit = document.querySelectorAll(".btn__edit");
        const btnsDelete = document.querySelectorAll(".btn__delete");

        if (userrole === "Student") {
            userCard.classList.add("dnone");
            btnsEdit.forEach((btn) => {
                    btn.style.pointerEvents = "none";
                    btn.style.backgroundColor = "lightgrey";
                });
                btnsDelete.forEach((btn) => {
                    btn.style.pointerEvents = "none";
                    btn.style.backgroundColor = "lightgrey";
            });
        }
    }, [users, userrole]);

    /**
     * useEffect cleanup
     */
    useEffect(() => {
        return () => {
            console.log("garbage collector has done its work");
        };
    }, []);

    return (
        <>
            <div className="view view__one">
                <h2>List all Users</h2>
                <div className="filter-control">
                    <ul onClick={handleClickFilter}>
                        <p>Listview: </p>
                        {filterNavlinks.map((filterNavLink) => {
                            return (
                                <li key={filterNavLink.id}
                                    id={filterNavLink.id}
                                    onClick={() => setActiveLink(filterNavLink.id)}
                                    className={`${filterNavLink.className} ${activeLink === filterNavLink.id ? filterNavLink.activeClassName : ""}`}
                                    value={filterNavLink.value}>
                                    {filterNavLink.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="card-container">
                    {emptyUserCard}
                    {userFilterSnippets}
                </div>
            </div>

        </>
    );
}

export default ViewOne;
