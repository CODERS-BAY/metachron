import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

    const userSnippets = users.map((user) => {




        return (
            <div key={user.uuid} className="userCard" id={user.Userrole.name}>
                <img src={user.pic_path} alt="profile_pic {user.username}"/>
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


    function handleClickFilter(event) {
        alert("clicked " +  event.target.getAttribute("value"));

        
    }


    return (
        <div className="view view__one">
            <div className="filter-control">
                <ul onClick={handleClickFilter}>
                    <li className="filter--link filter--link--active" value="All" id="all">All</li>
                    <li className="filter--link" value="Admin" id="admin">Admin</li>
                    <li className="filter--link" value="Trainer" id="trainer">Trainer</li>
                    <li className="filter--link" value="Student" id="student">Student</li>
                </ul>
            </div>
            <div className="card-container">
                {userSnippets}
            </div>
        </div>
    );
}

export default ViewOne;


// className = { MenuItem.className }
// activeClassName = { MenuItem.activeClassName }