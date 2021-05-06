const servicesRouter = require('express').Router();
const services = require("../mokup-data/services.json");

servicesRouter.get("/services", (req, res) => {
    res.send(services);
});
servicesRouter.get("/services/:id", (req, res) => {
    const item = services.find((item) => item.serviceId === req.params.id);
    if (!item) return res.status(404).send("service item not found");
    res.send(item);
});

module.exports = servicesRouter;