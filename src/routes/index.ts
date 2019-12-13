import { ParameterizedContext } from "koa";
import Router from "@koa/router";

const router = new Router();

router.get("healthcheck/", async (ctx: ParameterizedContext) => {
  ctx.body = "OK";
  ctx.status = 200;
});

export { router };
