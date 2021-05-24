const jwt = require("jsonwebtoken");
const config = require("../../../config/config");

exports.signToken = function (id) {
  return jwt.sign({ _id: id, iat: config.expireTime }, config.secrets.jwt );
};
