const express = require("express");

const { sequelize } = require("../models");

const { User } = require("../models");
const { Userrole } = require("../models");
const { Userdatainfo } = require("../models");

const { user_has_qualification } = require("../models");
const { user_has_trainingGroup } = require("../models");
const { user_attend_on_event } = require("../models");

const { Qualification } = require("../models");
const { TrainingGroup } = require("../models");
const { Event } = require("../models");
const { TrainingSubject } = require("../models");
const { TrainingContent } = require("../models");



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
exports.createUserdatainfo = async (req, res) => {
    const { firstName, lastName, address, zip, place, email, phone, github } = req.body;
    try {
        const userdata = await Userdatainfo.create({
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

/* create user set **************************************************/
exports.createUserSet = async (req, res) => {
    const { username, password, userrole_id, firstName, lastName, address, zip, place, email, phone, github } = req.body;

    let profilePic;
    if (userrole_id === "1") {
        profilePic = "https://image.shutterstock.com/image-vector/glowing-neon-crossed-arrows-icon-600w-1937094904.jpg";
    }
    else if (userrole_id === "2") {
        profilePic = "https://image.shutterstock.com/image-vector/glowing-neon-old-wooden-wheel-600w-1937095906.jpg";
    } else {
        profilePic = "https://image.shutterstock.com/image-vector/glowing-neon-document-icon-isolated-600w-1606897852.jpg";
    }

    try {
        const userData = await Userdatainfo.create({
            firstName,
            lastName,
            address,
            zip,
            place,
            email,
            phone,
            github
        });
        const userFindData = await Userdatainfo.findOne({
            where: {
                email: email
            }
        });
        const user = await User.create({
            username,
            password,
            pic_path: profilePic,
            userrole_id,
            userdata_id: userFindData.id
        });
        const userSet = { user, userData };
        return res.json(userSet);
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

/* findDuplicate user by username ******************************/
exports.findDuplicateUser = async (req, res) => {
    const { username } = req.body;
    try {
        const duplicateUser = await User.findOne({
            where: {
                username: username
            }
        });
        if (duplicateUser != null) {
            return res.json({ duplicate: true });
        } else {
            return res.json({ duplicate: false });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};
/* findDuplicate user email ******************************/
exports.findDuplicateUserEmail = async (req, res) => {
    const { email } = req.body;
    try {
        const duplicateUserEmail = await Userdatainfo.findOne({
            where: {
                email: email
            }
        });
        if (duplicateUserEmail != null) {
            return res.json({ duplicate: true });
        } else {
            return res.json({ duplicate: false });
        }
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
                return res.json({
                    msg: "valid credentials",
                    username: user.username,
                    pic_path: user.pic_path,
                    userrole_id: user.userrole_id,
                    userdata_id: user.userdata_id
                });
            } else {
                return res.json({
                    msg: "invalid credentials",
                });
            }
        } else {
            return res.json({
                msg: "invalid credentials",
            });
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
                    model: Userdatainfo
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
                    model: Userdatainfo
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

/* findOne userset by username (user-role-data) */
exports.findOneUserSetByUsername = async (req, res) => {
    const username = req.params.username;
    try {
        const userset = await User.findOne({
            include: [
                {
                    model: Userrole
                },
                {
                    model: Userdatainfo
                }
            ],
            where: {
                username: username
            }
        });
        return res.json(userset);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

/* delete userset by username */
exports.deleteUserSet = async (req, res) => {
    const { username } = req.body;

    try {
        
        //find user to delete
        const user = await User.findOne({
            where: {
                username: username,
            }
        });
        
        if (user === null) {
            return res.json({ msg: "no such user found" });
        }
        
        // delete from event table
        await Event.destroy({
            where: {
                trainer_id: user.id,
            }
        });
        // delete from user_has_trainingGroup table
        await user_has_trainingGroup.destroy({
            where: {
                user_id: user.id,
            }
        });
        // delete from user_has_trainingGroup table
        await user_has_trainingGroup.destroy({
            where: {
                supervisor: user.id,
            }
        });
        // delete from user table
        await User.destroy({
            where: {
                id: user.id,
            }
        });
        // delete from userdatainfo table
        await Userdatainfo.destroy({
            where: {
                id: user.id,
            }
        });
        // delete from user_attend_on_event table
        await user_attend_on_event.destroy({
            where: {
                user_id: user.id,
            }
        });

        return res.json({ msg: `user ${username} successfully deleted` });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};


/* update user */
