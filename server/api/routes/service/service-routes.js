const router = require("express").Router();
const controller = require('./service-controller');
const logger = require("../../../util/logger");
const createRoutes = require('../../../util/createRoutes');
createRoutes(controller, router)

module.exports = router;
