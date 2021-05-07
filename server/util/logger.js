const config = require('../config/config');
require('colors');

const logger = {
    log(...args) {
        //check if logging was set to true or false while setting up configuration
        config.logging ? args.map(arg => console.log(arg)) : () => {}
    }
}

module.exports = logger