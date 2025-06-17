"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 50000;

const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections: ${numConnection}`);
};

const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCore = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    const maxConnection = numCore * 5;
    console.log(`Number of core: ${numCore}`);
    console.log(`Active connection: ${numConnection}`);
    console.log(`Memory useage: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnection) {
      console.log(`Connection overload detected`);
    }
  }, _SECONDS);
};

module.exports = {
  countConnect,
  checkOverload,
};
