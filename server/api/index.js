const router = require('express').Router();

router.use('/rentals', require('./routes/rentals/rentals'));
router.use('/services', require('./routes/services/services'));

module.exports = router