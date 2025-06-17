"use strict";

import mongoose from "mongoose";
import os from "os";
import process from "process";

const _SECONDS = 50000;

export const countConnect = (): void => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections: ${numConnection}`);
};

export const checkOverload = (): void => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCore = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    const maxConnection = numCore * 5;
    console.log(`Number of core: ${numCore}`);
    console.log(`Active connection: ${numConnection}`);
    console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnection) {
      console.log(`Connection overload detected`);
    }
  }, _SECONDS);
};
