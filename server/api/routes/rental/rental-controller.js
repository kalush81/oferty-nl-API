const RentalModel = require("./rental-model");
const logger = require("../../../util/logger");

exports.params = async (req, res, next, id) => {
  try {
    const rentalItem = await RentalModel.findById(id);
    await RentalModel.populate(rentalItem, [
      { path: "issuer" , select: ["email", "phone"]},
    ]);
    if (!rentalItem) return res.send("no rentalItem with that ID");
    req.rentalItem = rentalItem;
    next();
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const rentalItems = await RentalModel.find({});
    res.send(rentalItems);
  } catch (err) {
    next(err);
  }
};

exports.getOne = (req, res) => {
  const rentalItem = req.rentalItem;
  res.send(rentalItem);
};

exports.update = async (req, res, next) => {
  try {
    const rentalItemUpdated = await RentalModel.findByIdAndUpdate(
      req.rentalItem.id,
      req.body,
      { new: true }
    );
    res.send(rentalItemUpdated);
  } catch (err) {
    next(err);
  }
};

exports.create = async function createRentalItem(req, res) {
  try {
    const rentalItem = new RentalModel(req.body);
    await rentalItem.save();
    res.send(rentalItem);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const title = await RentalModel.findByIdAndRemove(req.rentalItem.id, {
      select: "title",
    });
    res.send(title);
  } catch (err) {
    next(err);
  }
};

