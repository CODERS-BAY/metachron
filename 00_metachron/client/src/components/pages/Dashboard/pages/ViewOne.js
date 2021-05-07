import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function ViewOne() {

    const url = "http://localhost:3001/";

    /*** delete user ***/
    const [toDelete, setToDelete] = useState({ username: "" });
    function handleDeleteClick(user, event) {
        event.preventDefault();
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
        setClickNavLink(event.target.getAttribute("value"));
    }

    /* filtered users */
    const userFilterSnippets = users.map((user) => {
        if (user.Userrole.name === clickNavLink) {
            return (
                <div key={user.uuid} className={`userCard ${user.Userrole.name}`}>
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
                    <button className="btn btn__edit">Edit</button>
                    <button className="btn btn__delete" onClick={(event) => { handleDeleteClick(user, event); }}>Delete</button>
                </div>
            );
        }
        if (clickNavLink === "all") {
            return (
                <div key={user.uuid} className={`userCard $`}>
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
                    <button className="btn btn__edit">Edit</button>
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


    
 
    
    
    





    return (
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
    );
}

export default ViewOne;