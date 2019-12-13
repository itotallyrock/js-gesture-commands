export interface IConfig {
  SECRET_APP_KEY: string;
  NODE_ENV: string;
  ext: string;
  host: string;
  port: number;
}

export const config: IConfig = {
  NODE_ENV: process.env.NODE_ENV || "development",
  SECRET_APP_KEY: process.env.SECRET_APP_KEY || "DEV_KEY",
  ext: process.env.NODE_ENV !== "production" ? ".ts" : ".js",
  host: process.env.HOST || "0.0.0.0",
  port: parseInt(process.env.NODE_PORT || "3000", 10)
};
