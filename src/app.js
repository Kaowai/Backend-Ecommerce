require("dotenv").config();
const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const app = express();
const morgan = require("morgan");

// init middleware
app.use(morgan("combined"));
app.use(helmet());
app.use(compression());

// init db
require("./dbs/init.mongodb");
const { checkOverload } = require("./helpers/check.connect");

checkOverload();

// init routes
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Welcome",
  });
});

// handling errors

module.exports = app;
