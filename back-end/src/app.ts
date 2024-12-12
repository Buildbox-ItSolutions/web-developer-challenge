import express from "express";
import config from "config";
import cors from "cors";

import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";

const port = config.get<number>("port");
const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(cors());

app.listen(port, async () => {
  logger.info(`App's up at http://localhost:${port}/`);
  await connect();

  routes(app);
});
