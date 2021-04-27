const express = require("express");
const cors = require("cors");

const { sequelize } = require("./models");

require("dotenv").config();

// port setup
const port = process.env.SERVER_PORT || 3333;

const app = express();

// parse automatically everything coming from frontend
app.use(express.json());
// allow sending data from frontend to backend
const corsOptions = {
    origin: "http://localhost:3000",
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
// app.options('*', cors());
// app.use(cors());

// simple home route
app.get("/", (req, res) => {
    res.json({ message: "express is running" });
    // const password = "admin";
    // bcrypt.genSalt(10,(err, salt) => {
    //     bcrypt.hash(password, salt, (error, hash) => {
    //         res.json(hash);
    //     });
    // });
});

// user routes
app.use("/", require("./routes/user.routes"));


// set port, listen for requests
if (require.main === module) {
    app.listen(port, async () => {
        console.log(`Server started on http://localhost:${port}.`);
        await sequelize.authenticate();
        console.log("Database connected.");
        // await sequelize.sync();
        // await sequelize.sync({ force: true });
        // console.log("Database synced.");
    });
} else {
    module.exports = app;
}