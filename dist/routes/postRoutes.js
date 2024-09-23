"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postHelpers_1 = require("../helpers/postHelpers");
const postRouter = (0, express_1.Router)();
postRouter.post("/", postHelpers_1.createPost); // POST /api/posts
postRouter.get("/", postHelpers_1.getPosts); // GET /api/posts
postRouter.get("/:id", postHelpers_1.getPostById); // GET /api/posts/:id
postRouter.put("/:id", postHelpers_1.updatePost); // PUT /api/posts/:id
postRouter.delete("/:id", postHelpers_1.deletePost); // DELETE /api/posts/:id
exports.default = postRouter;
