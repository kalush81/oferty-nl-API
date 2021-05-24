const ServiceModel = require("./services-model");
const logger = require("../../../util/logger");

exports.params = async  (req, res, next, id) => {
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

  } catch (err) {
    next(err)
  }
};

exports.getOne = (req, res, next) => {
    const service = req.service;
    res.send(service);
};

exports.update = async (req, res, next) => {
  try {
    const serviceUpdated = await ServiceModel.findByIdAndUpdate(
      req.service.id,
      req.body,
      { new: true }
    );
    res.send(serviceUpdated);

  } catch (err) {
    next(err)
  }
};

exports.create = async function createServiceItem (req, res, next)  {
  try {
    const rental = new ServiceModel(req.body);
    await rental.save();
    logger.log(rental);
    res.send(rental);

  } catch (error) {
    next(err)
  }
};

exports.delete = async (req, res, next) => {
  try {
    const title = await ServiceModel.findByIdAndRemove(req.service.id, {
      select: "title",
    });
    logger.log("doc with title:", title, "has been removed");
    res.send(title);

  } catch (err) {
    next(err)
  }
};
