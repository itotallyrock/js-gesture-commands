import "reflect-metadata";
import { app } from "./app";
import { config } from "./config";

async function bootstrap() {
  try {
    app.listen(config.port, config.host, () => {
      // eslint-disable-next-line no-console
      console.log(
        `Server is running, and available at:\n\n\thttp://localhost/ || http://localhost:${config.port}/\n`
      );
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Unexpected Error", err);
  }
}

bootstrap();
