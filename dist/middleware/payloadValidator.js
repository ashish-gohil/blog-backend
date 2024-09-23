"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePost = void 0;
const zod_1 = require("zod");
const postSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(1, { message: "Title is required and must be a string." }),
    content: zod_1.z
        .string()
        .min(1, { message: "Content is required and must be a string." }),
    author: zod_1.z
        .string()
        .min(1, { message: "Author is required and must be a string." }),
});
const validatePost = (req, res, next) => {
    try {
        postSchema.parse(req.body);
        next();
    }
    catch (error) {
        return res.status(400).json({ message: error.errors });
    }
};
exports.validatePost = validatePost;
