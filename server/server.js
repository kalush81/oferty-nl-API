const express = require("express");
const emailMeError = require('./config/config').email
const errHandler =  require("./middleware/errorHandlerMiddleware");

const api = require('./api');
const app = express();

//sets up all app level middlewares
require('./middleware/appMiddleware')(app);

//api all routes
app.use('/api', api)

//error handling middleware
app.use(errHandler(emailMeError));

module.exports = app
