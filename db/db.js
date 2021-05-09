const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Offerty', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected to db on localhost')
});

