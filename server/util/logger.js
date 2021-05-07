const config = require('../config/config');

const logger = {
    log(text) {
        //check if logging was set to true or false while setting up configuration
        config.logging ? console.log(text) : () => {}
    }
}
//check if the config is correctly set
console.log('config obj:', config)

module.exports = logger