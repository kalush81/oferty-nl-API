const ServiceModel = require("./services-model");
const logger = require("../../../util/logger");

exports.params = async (req, res, next, id) => {
  try {
    const service = await ServiceModel.findById(id);
    if (!service) return res.send("no service with that ID");
    req.service = service;
    next();
  } catch (err) {
    next(err)
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const services = await ServiceModel.find({});
    res.send(services);
  } catch (error) {
    logger.log(error);
    res.send("could not get all of them")
  }
};

exports.getOne = (req, res, next) => {
  try {
    const service = req.service;
    res.send(service);
  } catch (error) {
    logger.log(error);
    res.send("could not find it");
  }
};

exports.update = async (req, res, next) => {
  try {
    const serviceUpdated = await ServiceModel.findByIdAndUpdate(
      req.service.id,
      req.body,
      { new: true }
    );
    res.send(serviceUpdated);
  } catch (error) {
    logger.log(error);
    res.send("the item could not be updated");
  }
};

exports.create = async function createServiceItem (req, res)  {
  try {
    const rental = new ServiceModel(req.body);
    await rental.save();
    logger.log(rental);
    res.send(rental);
  } catch (error) {
    logger.log(error);
    res.send("your item could not be saved");
  }
};

exports.delete = async (req, res) => {
  try {
    const title = await ServiceModel.findByIdAndRemove(req.service.id, {
      select: "title",
    });
    logger.log("doc with title:", title, "has been removed");
    res.send(title);
  } catch (error) {
    logger.log(error);
    res.send("could not remove, try again");
  }
};
