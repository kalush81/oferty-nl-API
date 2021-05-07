const express = require("express");
const api = require('./api');

const app = express();

require('./middleware/appMiddleware')(app);

app.use('/api', api)

//error handling middleware
app.use((err, req, res, next) => {
    if (err) {
        console.error('CHRIS, INTERNALL ERROR !!!: ', err)
        res.status(500).send(err) //server error
    } 
});

app.use((req, res) => {
    res.send("url not exist");
});

module.exports = app
