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

/* find all trainingGroups with trainingSubject and the participants */
exports.findAllTrainingGroups = async (req, res) => {
    try {
        const trainingGroup = await TrainingGroup.findAll({
            include: [
                {
                    model: User
                },
                {
                    model: TrainingSubject
                }
            ]
        });

        return res.json(trainingGroup);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

/* find all trainingGroupSupervisors */
exports.findTrainingGroupSupervisors = async (req, res) => {
    try {
        const supervisors = await user_has_trainingGroup.findAll();
        
        return res.json(supervisors);

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}