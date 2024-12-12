import { Router } from "express";
import { MainController } from "../controllers/main.controller";

const router = Router();

router.get("/", new MainController().index);

router.post("/v1/api/posts/add", new MainController().createPost);

router.get("/v1/api/posts", new MainController().getPosts);

router.delete("/v1/api/posts/remove/:id", new MainController().deletePost);

export default router;
