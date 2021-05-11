const express = require("express");
const morgan = require("morgan");
const report = require("../util/report");

const appMiddleware = (app) => {
  app.use(morgan("tiny"));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use((req, res, next) => {
    JSON.stringify(req.body).length > 1900 // increase the value of incoming body later!
      ? report(res)
      : next();
  });
};

module.exports = appMiddleware;
