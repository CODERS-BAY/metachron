import React from 'react'

function CreateNewUserModal() {

    function onSubmit() {
        alert("submitted!");
    }

    return (
        <div className="createNewUserModal">
            <form on Submit={onSubmit}>
                <p>
                    <label for="username">Username:</label>
                    <input 
                        type="text"
                        name="username"
                        placeholder="enter Username"
                    />
                    <label for="password">Password:</label>
                    <input 
                        type="password"
                        name="password"
                        placeholder="enter Username"
                    />
                </p>
                <button
                    className=""
                    name="addUser"
                    type="submit">
                    add user
                </button>
            </form>

        </div>
    );
    
}

export default CreateNewUserModal;
