const express = require("express");
const morgan = require("morgan");

const appMiddleware = (app) => {
  app.use(morgan("tiny"));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
};

module.exports = appMiddleware;
