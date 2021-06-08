const express = require("express");
const cors = require("cors");

const { sequelize } = require("./models");

require("dotenv").config();

/* port setup */
const port = process.env.SERVER_PORT || 3333;

const app = express();

/* parse automatically everything coming from frontend */
app.use(express.json());
// allow sending data from frontend to backend
const corsOptions = {
    origin: "http://localhost:3000",
    optionSuccessStatus: 200
}

/* allows cross-origin resource sharing */
app.use(cors(corsOptions));
// app.options('*', cors());
// app.use(cors());

// simple home route
/* define simple home route */
app.get("/", (req, res) => {
    res.json({ message: "express is running" });
});

/* define user routes */ 
app.use("/", require("./routes/user.routes"));

/* define course routes */ 
app.use("/", require("./routes/course.routes"));

/* set port, listen for requests */
if (require.main === module) {
    app.listen(port, async () => {
        console.log(`Server started on http://localhost:${port}.`);
        await sequelize.authenticate();
        console.log("Database connected.");
        // await sequelize.sync({ force: true });
        // console.log("Database synced.");
    });
} else {
    module.exports = app;
}