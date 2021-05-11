const servicesRouter = require("express").Router();
const logger = require("../../../util/logger");
const ServiceModel = require("./services-model");

servicesRouter.param("id", async (req, res, next, id) => {
  const service = await ServiceModel.findById(id);
  if (!service) {
    return res.status(404).send(`rental item wit id: ${id} not found`);
  }
  req.item = item;
  next();
});

servicesRouter.get("/", async (req, res) => {
  try {
    const services = await ServiceModel.find({});
    res.send(services);
  } catch (error) {
    logger.log(error);
    res.send(error.message);
  }
});
servicesRouter.get("/:id", (req, res) => {
  return res.send({ msg: "here is the service item", service: req.service });
});

module.exports = servicesRouter;
