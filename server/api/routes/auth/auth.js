const jwt = require("jsonwebtoken");
const { secrets, expireTime } = require("../../../config");

exports.signToken = function (id) {
  return jwt.sign({ _id: id }, secrets, expireTime);
};
