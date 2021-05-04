import React from "react";

function ViewTwo() {


    function onSubmit() {
        alert("submitted!");
    }

    function handleCheckUsers() {
        window.location.href = "/dashboard/viewone";
    }

    return (
        <div className="view view__two">
            <h2>Add User</h2>
            <form className="__form" onSubmit={onSubmit}>
                    <label className="form__label" htmlFor="username">username:</label>
                    <input
                        className="form__input"
                        type="text"
                        name="username"
                        placeholder="enter username"
                        minLength="4"
                        maxLength="15"
                        required
                    />

                    <label className="form__label" htmlFor="password">password:</label>
                    <input
                        className="form__input"
                        type="password"
                        name="password"
                        placeholder="enter username"
                        required
                    />
                    <label className="form__label" htmlFor="passwordConfirm">confirm:</label>
                    <input
                        className="form__input"
                        type="password"
                        name="passwordConfirm"
                        placeholder="retype password"
                        required
                    />

                    <label className="form__label" htmlFor="userrole">userrole:</label>
                    <select 
                        className="form__input"
                        name="userrole" 
                        required>
                            <option value="1" defaultValue>--userrole</option>
                            <option value="2">admin</option>
                            <option value="3">trainer</option>
                            <option value="4">student</option>
                    </select>

                    <label className="form__label" htmlFor="firstName">firstName:</label>
                    <input
                        className="form__input"
                        type="text"
                        name="firstName"
                        placeholder="enter firstName"
                        required
                    />

                    <label className="form__label" htmlFor="lastName">lastName:</label>
                    <input
                        className="form__input"
                        type="text"
                        name="lastName"
                        placeholder="enter lastName"
                        required
                    />

                    <label className="form__label" htmlFor="address">address:</label>
                    <input
                        className="form__input"
                        type="text"
                        name="address"
                        placeholder="enter address"
                        required
                    />

                    <label className="form__label" htmlFor="zip">zip:</label>
                    <input
                        className="form__input"
                        type="number"
                        name="zip"
                        placeholder="enter zip"
                        min="1000"
                        max="9999"
                        required
                    />

                    <label className="form__label" htmlFor="email">email:</label>
                    <input
                        className="form__input"
                        type="email"
                        name="email"
                        placeholder="enter email"
                        required
                    />

                    <label className="form__label" htmlFor="phone">phone:</label>
                    <input
                        className="form__input"
                        type="text"
                        name="phone"
                        placeholder="enter phone"
                    />

                    <label className="form__label" htmlFor="github">github:</label>
                    <input
                        className="form__input"
                        type="text"
                        name="github"
                        placeholder="enter github"
                    />
                <button
                    className="form__btn"
                    name="addUser"
                    type="submit">
                    add user
                </button>
                <button
                    className="form__btn"
                    name="checkUsers"
                    onClick={handleCheckUsers}
                    >
                    check users
                </button>
            </form>
        </div>
    );
}

export default ViewTwo;
