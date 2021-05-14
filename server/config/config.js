const _ = require("lodash");

const config = {
  email: process.env.EMAIL || null,
  dev: "development",
  prod: "production",
  test: "testing",
  port: process.env.PORT || 4000,
  db: {
    uri: "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
  },
};

//chec if NODE_ENV is set, if not then deafult to config.dev
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;

//set config.env to whatever NODE_ENV is
config.env = process.env.NODE_ENV;

const configEnv = {
  logging: require(`./${config.env}`).logging,
};

module.exports = _.merge(config, configEnv);
