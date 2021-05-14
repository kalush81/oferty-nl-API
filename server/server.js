const express = require("express");
const config = require("./config/config");
const errHandler = require("./middleware/errorHandlerMiddleware");
const api = require("./api");

const app = express();

//sets up all app level middlewares
require("./middleware/appMiddleware")(app);

app.use("/api", api);

//error handling middleware
app.use(errHandler(config.email));

module.exports = app;
