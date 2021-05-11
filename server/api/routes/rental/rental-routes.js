const rentalsRouter = require("express").Router();
const RentalModel = require("./rental-model");
const logger = require("../../../util/logger");
require("colors");

rentalsRouter.param("id", async (req, res, next, id) => {
  const item = await RentalModel.findById(id);
  if (!item) {
    return res.status(404).send(`rental item wit id: ${id} not found`);
  }
  req.item = item;
  next();
});

rentalsRouter.get("/", async function getAllOffers(req, res) {
  try {
    const offers = await RentalModel.find({});
    res.send(offers);
  } catch (error) {
    logger.log(error.message);
    res.send(error.message);
  }
});

rentalsRouter.get("/:id", function getOfferById(req, res) {
  return res.send({ msg: "here is the rental item", item: req.item });
});

rentalsRouter.post("/", async function create(req, res) {
  try {
    const rental = await new RentalModel(req.item);
    await rental.save();
    return res.send(req.item);
  } catch (error) {
    logger.log(error);
    res.send("your item could not be saved");
  }
});

module.exports = rentalsRouter;
