/* general imports */
const express = require("express");

const { sequelize } = require("../models");

/* model imports */
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

/* define express routes */
const router = express.Router();

/* import controller for course routes */
const courseController = require("../controllers/course.controller");

// get all all trainingGroups with trainingSubject and the participants
router.get("/traininggroups", courseController.findAllTrainingGroups);

// get all all trainingGroupSupervisors
router.get("/trainingGroupSupervisors", courseController.findTrainingGroupSupervisors);


/* export */
module.exports = router;