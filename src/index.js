const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const {
    routes: talentsRoutes,
} = require("./talents/routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/talents", talentsRoutes);

app.listen(3000, () => {console.info('Listening on port 3000.');});

module.exports = app;