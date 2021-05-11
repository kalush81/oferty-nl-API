const express = require("express");
const path = require('path');
const config = require("./config/config");
const errHandler = require("./middleware/errorHandlerMiddleware");
const api = require("./api");
const logger = require("./util/logger");

const app = express();

app.use("/api", api);

//sets up all app level middlewares
require("./middleware/appMiddleware")(app);

//error handling middleware
app.use(errHandler(config.email));

module.exports = app;
