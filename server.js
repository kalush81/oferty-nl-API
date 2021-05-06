const express = require("express");
const morgan = require('morgan');
const rentalsRouter = require("./routes/rentals");
const servicesRouter = require("./routes/services");

const app = express();

app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile("index.html", (err) => {
        if (err) return res.status(500).send(err);
    });
});

//rentals API
app.use("/rentals", rentalsRouter);

//services API
app.use("/services", servicesRouter);

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
