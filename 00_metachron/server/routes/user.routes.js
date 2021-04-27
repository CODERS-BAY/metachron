const express = require("express");

const { sequelize } = require("../models");

const bcrypt = require("bcrypt");

const { User } = require("../models");
const { Userrole } = require("../models");
const { Userdata } = require("../models");
const { Qualification } = require("../models");

const router = express.Router();

const userController = require("../controllers/user.controller.js");

// create user
router.post("/users", userController.createUser);

// get all users
router.get("/users", userController.findAllUsers);

// find one user by uuid
router.get("/users/:uuid", userController.findOneUser);

// find login-user by username & password
router.post("/login", userController.verifyUser);

// create userrole
router.post("/userroles", userController.createUserRole);

// get all userroles
router.get("/userroles", userController.findAllUserroles);

// create userdata
router.post("/userdata", userController.createUserData);

// get all usersets (user-userrole-userdata)
router.get("/usersets", userController.findAllUserSets);

// get one userset by uuid (user-userrole-userdata)
router.get("/usersets/:uuid", userController.findOneUserSet);


module.exports = router;