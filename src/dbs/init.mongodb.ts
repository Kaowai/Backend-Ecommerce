"use strict";

import mongoose from "mongoose";
import { countConnect } from "../helpers/check.connect";
import config from "../configs/config.mongodb";

const { host, port, name } = config.db;
const connectionString = `mongodb://${host}:${port}/${name}`;

class Database {
  private static instance: Database;

  private constructor() {
    this.connect();
  }

  // connect
  private connect(): void {
    mongoose.set("debug", true);
    mongoose.set("debug", { color: true });

    mongoose
      .connect(connectionString)
      .then(() => console.log("Connect MongoDb Successfully", countConnect()))
      .catch((err) => console.log(`Connect MongoDb Failed: ${err}`));
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongoDb = Database.getInstance();
export default instanceMongoDb;
