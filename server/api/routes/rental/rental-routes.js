const router = require("express").Router();
const logger = require("../../../util/logger");
const createRoutes = require('../../../util/createRoutes');
const controller = require('./rental-controller');
createRoutes(controller, router)

module.exports = router;
