/* general imports */
const express = require("express");

const { sequelize } = require("../models");

/* bcrypt import */
const bcrypt = require("bcrypt");

/* model imports */
const { User } = require("../models");
const { Userrole } = require("../models");
const { Userdatainfo } = require("../models");
const { Qualification } = require("../models");

/* define express router */
const router = express.Router();

/* import controller for user routes */
const userController = require("../controllers/user.controller.js");

// create user
router.post("/users", userController.createUser);

// get all users
router.get("/users", userController.findAllUsers);

// find one user by uuid
router.get("/users/:uuid", userController.findOneUser);

// find one user by username
router.post("/checkDuplicateUser", userController.findDuplicateUser);

// find one user by email
router.post("/checkDuplicateUserEmail", userController.findDuplicateUserEmail);

// find login-user by username & password
router.post("/login", userController.verifyUser);

// create userrole
router.post("/userroles", userController.createUserRole);

// get all userroles
router.get("/userroles", userController.findAllUserroles);

// create userdatainfo
router.post("/userdata", userController.createUserdatainfo);

// get all usersets (user-userrole-userdatainfo)
router.get("/usersets", userController.findAllUserSets);

// create userset (user-userrole-userdatainfo)
router.post("/usersets", userController.createUserSet);

// update userset (user-userrole-userdatainfo)
router.put("/usersets", userController.updateUserset);

// get one userset by username (user-userrole-userdatainfo)
router.get("/usersets/:username", userController.findOneUserSetByUsername);

// get one userset by uuid (user-userrole-userdatainfo)
router.get("/usersets/:uuid", userController.findOneUserSet);

// delete userset (user-userdatainfo)
router.delete("/usersets/delete", userController.deleteUserSet);

// delete userset (user-userdatainfo)
router.delete("/qualifications/delete", userController.deleteQualification);

// get all qualifications
router.get("/qualifications", userController.findAllQualifications);

// create qualification
router.post("/qualifications", userController.createQualification);

// get all trainer usersets with their qualifications
router.get("/trainersets/qualifications", userController.findAllUserSetsWithQualifications);

// update qualifications for trainer
router.put("/qualifications", userController.updateQualificationFromTrainer);

/* export */
module.exports = router;