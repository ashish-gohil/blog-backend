import { Router } from "express";
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../helpers/postHelpers";
import { validatePost } from "../middleware/payloadValidator";

const postRouter = Router();

postRouter.post("/", validatePost, createPost);
postRouter.get("/", getPosts);
postRouter.get("/:id", getPostById);
postRouter.put("/:id", validatePost, updatePost);
postRouter.delete("/:id", deletePost);

export default postRouter;
