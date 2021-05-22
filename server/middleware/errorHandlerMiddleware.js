const logger = require("../util/logger");
const sendEmail = require("../util/sendEmail");

module.exports = (email) => (err, req, res, next) => {
  if (err) {
    logger.log("CHRIS, INTERNALL ERROR !!!: ", err);
    //@TODO
    // if email set to env notifying about server error
    if (email) {
      //sendEail(err.stack)
    }
    res.status(500).send({msg: 'something went wrong',err}); 
  }
};
