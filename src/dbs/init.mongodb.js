"use trict";

const mongoose = require("mongoose");
const { countConnect } = require("../helpers/check.connect");
const {
  db: { host, port, name },
} = require("../configs/config.mongodb");

const connectionString = `mongodb://${host}:${port}/${name}`;

class Database {
  constructor() {
    this.connect();
  }

  // connect
  connect(type) {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectionString)
      .then((_) => console.log("Connect MongoDb Successfully", countConnect()))
      .catch((err) => console.log(`Connect MongoDb Failed: ${err}`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongoDb = Database.getInstance();
module.exports = instanceMongoDb;
