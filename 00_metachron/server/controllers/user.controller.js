const express = require("express");

const { sequelize } = require("../models");

const { User } = require("../models");
const { Userrole } = require("../models");
const { Userdata } = require("../models");

const bcrypt = require("bcrypt");
const saltRounds = 10;

/* create user */
exports.createUser = async (req, res) => {
    const { username, password, pic_path, userrole_id, userdata_id } = req.body;
    try {
        const user = await User.create({
            username: username,
            password: password,
            pic_path: pic_path,
            userrole_id: userrole_id,
            userdata_id: userdata_id
        });
        return res.json(user);

    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

/* create user role */
exports.createUserRole = async (req, res) => {
    const { name } = req.body;
    try {
        const userrole = await Userrole.create({
            name
        });
        return res.json(userrole);

    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

/* create user data */
exports.createUserData = async (req, res) => {
    const { firstName, lastName, address, zip, place, email, phone, github } = req.body;
    try {
        const userdata = await Userdata.create({
            firstName,
            lastName,
            address,
            zip,
            place,
            email,
            phone,
            github
        });
        return res.json(userdata);

    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

/* findOne user by uuid */
exports.findOneUser = async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const user = await User.findOne({
            where: {
                uuid: uuid
            }
        });
        return res.json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

/* verify User by username and password */
exports.verifyUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({
            where: {
                username: username,
            }
        });
        if (user != null) {
            const checkedPWD = await bcrypt.compareSync(password, user.password);
            // console.log(checkPWD);
            if (checkedPWD) {                
                return res.json("valid credentials");
            } else {
                return res.json("invalid credentials");
            }
        } else {
            return res.json("invalid credentials");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

/* findAll users */
exports.findAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

/* findAll userroles */
exports.findAllUserroles = async (req, res) => {
    try {
        const userrole = await Userrole.findAll();
        return res.json(userrole);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

/* findAll usersets (user-role-data) */
exports.findAllUserSets = async (req, res) => {
    try {
        const usersets = await User.findAll({
            include: [
                {
                    model: Userrole
                },
                {
                    model: Userdata
                }
            ]
        });
        return res.json(usersets);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

/* findOne userset by uuid (user-role-data) */
exports.findOneUserSet = async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const userset = await User.findOne({
            include: [
                {
                    model: Userrole
                },
                {
                    model: Userdata
                }
            ],
            where: {
                uuid: uuid
            }
        });
        return res.json(userset);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

/* update user */

/* delete user */

