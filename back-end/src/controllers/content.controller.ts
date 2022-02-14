import { Request, Response } from "express";
import { Callback } from "mongoose";
import multer from "multer";

import { CreateContentInput } from "../schemas/content.schema";
import { createContent, listContent } from "../services/content.service";

const storage = multer.diskStorage({
  destination: function (
    req: Request,
    file: Record<string, any>,
    cb: Callback
  ) {
    cb(null, "./uploads");
  },
  filename: function (req: Request, file: Record<string, any>, cb: Callback) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});

export const upload = multer({ storage });

export async function createContentHandler(
  req: Request<{}, {}, CreateContentInput["body"]>,
  res: Response
) {
  const body = req.body;
  const content = await createContent({
    ...body,
    imageName: req.file?.filename,
  });

  return res.send(content).status(201);
}

export async function listContentHandler(req: Request, res: Response) {
  const contents = await listContent({});

  if (!contents) return res.sendStatus(404);

  return res.send(contents);
}
