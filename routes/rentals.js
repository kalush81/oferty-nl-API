const rentalsRouter = require('express').Router();
const rentals = require("../mokup-data/oferty.json");

let num = 5;

const editBeforCreatingRentalItem = (req, res, next) => {
    num++;
    const item = {
        offerId: '5abc'+num,
        category: 'wypożyczalnia',
        title: req.body.title,
        description: req.body.title,
        hourly_price: req.body.hourly_price || 'not set',
        daily_price: req.body.daily_price || 'not set',
        userId: req.body.userId,
    }
    req.item = item;
    next();
}

rentalsRouter.param('id', (req, res, next, id) => {
    const item = rentals.find(item => item.offerId === id)
    if (!item) {
        return res.status(404).send('offer not found')
    } 
    req.item = item;
    next()
})

rentalsRouter.get('/', (req, res) => {
    res.send(rentals);
})

rentalsRouter.get("/:id", (req, res) => {
    res.send(req.item);
});

rentalsRouter.post("/", editBeforCreatingRentalItem, (req, res) => {
    rentals.push(req.item)
    res.send(req.item);
});

module.exports = rentalsRouter

