const RentalModel = require("./rental-model");
const logger = require("../../../util/logger");

exports.params = async (req, res, next, id) => {
  try {
    const rentalItem = await RentalModel.findById(id);
    
    const withIssuer = await RentalModel.populate(rentalItem, [{path: 'issuer', select: 'email'}])
    //withIssuer.issuer.rentals.push(withIssuer._id);
    console.log(withIssuer)
    if (!rentalItem) return res.send("no rentalItem with that ID");
    req.rentalItem = rentalItem;
    next();
  } catch (err) {
    next(err)
  }
};

exports.getAll =  async (req, res, next) => {
  try {
    const rentalItems = await RentalModel.find({});
    res.send(rentalItems);
   } catch (error) {
     logger.log(error);
     res.send("could not get all of them")
   }
};

exports.getOne = (req, res, next) => {
  try {
    const rentalItem = req.rentalItem;
    res.send(rentalItem);
  } catch (error) {
    logger.log(error);
    res.send("could not find it");
  }
};

exports.update = async (req, res, next) => {
  try {
    const rentalItemUpdated = await RentalModel.findByIdAndUpdate(
      req.rentalItem.id,
      req.body,
      { new: true }
    );
    res.send(rentalItemUpdated);
  } catch (error) {
    logger.log(error);
    res.send("the rental item could not be updated");
  }
};

exports.create = async function createRentalItem (req, res) {
  try {
    const rentalItem = new RentalModel(req.body);
    //console.log('***', rentalItem.shortTitle)
    await rentalItem.save();
    logger.log(rentalItem);
    res.send(rentalItem);
  } catch (error) {
    logger.log(error);
    res.send("your item could not be saved");
  }
};

exports.delete = async (req, res) => {
  try {
    const title = await RentalModel.findByIdAndRemove(req.rentalItem.id, {
      select: "title",
    });
    logger.log("doc with title:", title, "has been removed");
    res.send(title);
  } catch (error) {
    logger.log(error);
    res.send("could not remove, try again");
  }
};
