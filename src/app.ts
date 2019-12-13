import Koa from "koa";
import cors from "@koa/cors";
import koaBody from "koa-bodyparser";
import logger from "koa-logger";
import koaJson from "koa-json";

import { config } from "./config";
import { router } from "./routes";

const app = new Koa();

app.keys = [config.SECRET_APP_KEY];

app.use(koaBody());
app.use(cors());
app.use(logger());
app.use(koaJson());
app.use(router.routes());
app.use(router.allowedMethods());

export { app };
