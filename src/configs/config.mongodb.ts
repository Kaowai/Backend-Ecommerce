"use strict";

interface AppConfig {
  port: number | string;
}

interface DbConfig {
  host: string;
  port: number | string;
  name: string;
}

interface EnvConfig {
  app: AppConfig;
  db: DbConfig;
}

const dev: EnvConfig = {
  app: {
    port: process.env.DEV_APP_PORT || 3000,
  },
  db: {
    host: process.env.DEV_DB_HOST || "localhost",
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || "shopDev",
  },
};

const prod: EnvConfig = {
  app: {
    port: process.env.PROD_APP_PORT || 3001,
  },
  db: {
    host: process.env.PROD_DB_HOST || "localhost",
    port: process.env.PROD_DB_PORT || 27017,
    name: process.env.PROD_DB_NAME || "shopProd",
  },
};

const config: Record<string, EnvConfig> = { dev, prod };
const env = (process.env.NODE_ENV as keyof typeof config) || "dev";

export default config[env];
