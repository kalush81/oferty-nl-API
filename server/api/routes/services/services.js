const servicesRouter = require('express').Router();
const services = require("../../mokup-data/services.json");

servicesRouter.use((req, res, next) => {
    console.log('was requested for route')
    next()
})

servicesRouter.param('id', (req, res, next, id) => {
    const service = services.find(s => s.serviceId === id);
    if (!service) return res.status(404).send('service not found')
    req.service = service
    next();
})

servicesRouter.get("/", (req, res) => {
    res.send(services);
});
servicesRouter.get("/:id", (req, res) => {
    res.send(req.service);
});

module.exports = servicesRouter;