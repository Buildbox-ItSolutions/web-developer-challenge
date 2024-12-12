import { Express } from "express";

import {
  createContentHandler,
  listContentHandler,
} from "./controllers/content.controller";
import { upload } from "./controllers/content.controller";

function routes(app: Express) {
  app.post("/create/content", upload.single("image"), createContentHandler);

  app.get("/list/content", listContentHandler);
}

export default routes;
