const router = require('express').Router();

router.use('/rentals', require('./routes/rentals/rentals'));
router.use('/services', require('./routes/services/services'));

router.use((req, res) => {
    res.send("url not exist");
});

module.exports = router