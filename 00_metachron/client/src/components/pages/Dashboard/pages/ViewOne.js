import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function ViewOne() {

    const url = "http://localhost:3001/";

    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(`${url}usersets`)
        .then((response) => {
            // console.log(response.data);
            setUsers(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    /* all users */
    const userAllSnippets = users.map((user) => {
        return (
            <div key={user.uuid} className={`userCard ${user.Userrole.name}`}>
                <img src={user.pic_path} alt="profile_pic {user.username}" />
                <p>
                    Username: <span className="card__txt">{user.username}</span>
                    <br />
                    <span className="card__line"></span>
                    RealName: <span className="card__txt">{user.Userdatum.firstName} {user.Userdatum.lastName}</span>
                    <br />
                    Address: <span className="card__txt">{user.Userdatum.address}</span>
                    <br />
                    ZIP/Place: <span className="card__txt">{user.Userdatum.zip} {user.Userdatum.place}</span>
                    <br />
                    <span className="card__line"></span>
                    Email: <span className="card__txt">{user.Userdatum.email}</span>
                    <br />
                    Phone: <span className="card__txt">{user.Userdatum.phone}</span>
                    <br />
                    Github: <span className="card__txt"><a href="https://github.com">{user.Userdatum.github}</a></span>
                    <br />
                    Pic: <span className="card__txt"><a href={user.pic_path}>profile-picture-link</a></span>
                    <br />
                </p>
                <button className="btn btn__util">Edit</button>
                <button className="btn btn__util">Delete</button>
                </div>
        );
    });
    /* all admins */
    const userAdminSnippets = users.map((user) => {
        if (user.Userrole.name === "admin") {
            return (
                <div key={user.uuid} className={`userCard ${user.Userrole.name}`}>
                    <img src={user.pic_path} alt="profile_pic {user.username}" />
                    <p>
                        Username: <span className="card__txt">{user.username}</span>
                        <br />
                        <span className="card__line"></span>
                        RealName: <span className="card__txt">{user.Userdatum.firstName} {user.Userdatum.lastName}</span>
                        <br />
                        Address: <span className="card__txt">{user.Userdatum.address}</span>
                        <br />
                        ZIP/Place: <span className="card__txt">{user.Userdatum.zip} {user.Userdatum.place}</span>
                        <br />
                        <span className="card__line"></span>
                        Email: <span className="card__txt">{user.Userdatum.email}</span>
                        <br />
                        Phone: <span className="card__txt">{user.Userdatum.phone}</span>
                        <br />
                        Github: <span className="card__txt"><a href="https://github.com">{user.Userdatum.github}</a></span>
                        <br />
                        Pic: <span className="card__txt"><a href={user.pic_path}>profile-picture-link</a></span>
                        <br />
                    </p>
                    <button className="btn btn__util">Edit</button>
                    <button className="btn btn__util">Delete</button>
                </div>
            );
        }
        return null;
    });
    /* all trainer */
    const userTrainerSnippets = users.map((user) => {
        if (user.Userrole.name === "trainer") {
            return (
                <div key={user.uuid} className={`userCard ${user.Userrole.name}`}>
                    <img src={user.pic_path} alt="profile_pic {user.username}" />
                    <p>
                        Username: <span className="card__txt">{user.username}</span>
                        <br />
                        <span className="card__line"></span>
                        RealName: <span className="card__txt">{user.Userdatum.firstName} {user.Userdatum.lastName}</span>
                        <br />
                        Address: <span className="card__txt">{user.Userdatum.address}</span>
                        <br />
                        ZIP/Place: <span className="card__txt">{user.Userdatum.zip} {user.Userdatum.place}</span>
                        <br />
                        <span className="card__line"></span>
                        Email: <span className="card__txt">{user.Userdatum.email}</span>
                        <br />
                        Phone: <span className="card__txt">{user.Userdatum.phone}</span>
                        <br />
                        Github: <span className="card__txt"><a href="https://github.com">{user.Userdatum.github}</a></span>
                        <br />
                        Pic: <span className="card__txt"><a href={user.pic_path}>profile-picture-link</a></span>
                        <br />
                    </p>
                    <button className="btn btn__util">Edit</button>
                    <button className="btn btn__util">Delete</button>
                </div>
            );
        }
        return null;
    });
    /* all student */
    const userStudentSnippets = users.map((user) => {
        if (user.Userrole.name === "student") {
            return (
                <div key={user.uuid} className={`userCard ${user.Userrole.name}`}>
                    <img src={user.pic_path} alt="profile_pic {user.username}" />
                    <p>
                        Username: <span className="card__txt">{user.username}</span>
                        <br />
                        <span className="card__line"></span>
                        RealName: <span className="card__txt">{user.Userdatum.firstName} {user.Userdatum.lastName}</span>
                        <br />
                        Address: <span className="card__txt">{user.Userdatum.address}</span>
                        <br />
                        ZIP/Place: <span className="card__txt">{user.Userdatum.zip} {user.Userdatum.place}</span>
                        <br />
                        <span className="card__line"></span>
                        Email: <span className="card__txt">{user.Userdatum.email}</span>
                        <br />
                        Phone: <span className="card__txt">{user.Userdatum.phone}</span>
                        <br />
                        Github: <span className="card__txt"><a href="https://github.com">{user.Userdatum.github}</a></span>
                        <br />
                        Pic: <span className="card__txt"><a href={user.pic_path}>profile-picture-link</a></span>
                        <br />
                    </p>
                    <button className="btn btn__util">Edit</button>
                    <button className="btn btn__util">Delete</button>
                </div>
            );
        }
        return null;
    });

    const [contentCards, setContentCards] = useState([]);
    useEffect(() => {
        const allLink = document.getElementById("all");
        allLink.classList.add("filter--link--active");
        setContentCards(userAllSnippets);
    },[users]);

    function handleClickFilter(event) {
        event.preventDefault();
        
        const clickChoice = event.target.getAttribute("value")
        const allLink = document.getElementById("all");
        const adminLink = document.getElementById("admin");
        const trainerLink = document.getElementById("trainer");
        const studentLink = document.getElementById("student");


        if (clickChoice === "admin") {
            setContentCards(userAdminSnippets);
            allLink.classList.remove("filter--link--active");
            adminLink.classList.add("filter--link--active");
            trainerLink.classList.remove("filter--link--active");
            studentLink.classList.remove("filter--link--active");
            
        } else if (clickChoice === "trainer") {
            setContentCards(userTrainerSnippets);
            allLink.classList.remove("filter--link--active");
            adminLink.classList.remove("filter--link--active");
            trainerLink.classList.add("filter--link--active");
            studentLink.classList.remove("filter--link--active");
            
        } else if (clickChoice === "student") {
            setContentCards(userStudentSnippets);
            allLink.classList.remove("filter--link--active");
            adminLink.classList.remove("filter--link--active");
            trainerLink.classList.remove("filter--link--active");
            studentLink.classList.add("filter--link--active");
            
        } else {
            setContentCards(userAllSnippets);
            allLink.classList.add("filter--link--active");
            adminLink.classList.remove("filter--link--active");
            trainerLink.classList.remove("filter--link--active");
            studentLink.classList.remove("filter--link--active");
        
        }
    }

    return (
        <div className="view view__one">
            <div className="filter-control">
                <ul onClick={handleClickFilter}>
                    <p>Listview: </p>
                    <li className="filter--link" id="all" value="all">All</li>
                    <li className="filter--link" id="admin" value="admin">Admin</li>
                    <li className="filter--link" id="trainer" value="trainer">Trainer</li>
                    <li className="filter--link" id="student" value="student">Student</li>
                </ul>
            </div>
            <div className="card-container">
                {contentCards}
            </div>
        </div>
    );
}

export default ViewOne;