import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const createPost = async (req: Request, res: Response) => {
  const { title, content, author } = req.body;
  try {
    const post = await prisma.post.create({
      data: { title, content, author },
    });
    res.status(201).json(post);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  const { title, content, author } = req.body;
  try {
    const post = await prisma.post.update({
      where: { id: Number(req.params.id) },
      data: { title, content, author },
    });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await prisma.post.delete({
      where: { id: Number(req.params.id) },
    });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
