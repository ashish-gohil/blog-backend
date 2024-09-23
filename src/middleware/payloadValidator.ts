import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const postSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required and must be a string." }),
  content: z
    .string()
    .min(1, { message: "Content is required and must be a string." }),
  author: z
    .string()
    .min(1, { message: "Author is required and must be a string." }),
});

export const validatePost = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    postSchema.parse(req.body);
    next();
  } catch (error: any) {
    return res.status(400).json({ message: error.errors });
  }
};
