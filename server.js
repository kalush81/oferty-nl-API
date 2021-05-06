const express = require("express");
const morgan = require('morgan');
const app = express();
const services = require("./mokup-data/services.json");
const rentalsRouter = require("./routes/rentals");

app.use(morgan('tiny'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile("index.html", (err) => {
        if (err) return res.status(500).send(err);
    });
});
let num = 5;
//rentals API
app.use("/rentals", rentalsRouter);

//services API
app.get("/services", (req, res) => {
    res.send(services);
});
app.get("/services/:id", (req, res) => {
    const item = services.find((item) => item.serviceId === req.params.id);
    if (!item) return res.status(404).send("service item not found");
    res.send(item);
});

//error handling middleware
app.use((err, req, res, next) => {
    if (err) console.error('POJAWIL SIE BLAD JAKIS: ', err)
});
app.use((req, res) => {
    res.send("url not exist");
});
app.listen(3000, () => {
    console.log("server is up and running on 3000");
});
