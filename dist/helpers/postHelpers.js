"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.getPostById = exports.getPosts = exports.createPost = void 0;
const prismaClient_1 = __importDefault(require("../db/prismaClient"));
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, author } = req.body;
    try {
        const post = yield prismaClient_1.default.post.create({
            data: { title, content, author },
        });
        res.status(201).json(post);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createPost = createPost;
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield prismaClient_1.default.post.findMany();
        res.status(200).json(posts);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getPosts = getPosts;
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield prismaClient_1.default.post.findUnique({
            where: { id: Number(req.params.id) },
        });
        if (!post)
            return res.status(404).json({ message: "Post not found" });
        res.status(200).json(post);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getPostById = getPostById;
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, author } = req.body;
    try {
        const post = yield prismaClient_1.default.post.update({
            where: { id: Number(req.params.id) },
            data: { title, content, author },
        });
        if (!post)
            return res.status(404).json({ message: "Post not found" });
        res.status(200).json(post);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.updatePost = updatePost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield prismaClient_1.default.post.delete({
            where: { id: Number(req.params.id) },
        });
        if (!post)
            return res.status(404).json({ message: "Post not found" });
        res.status(204).send();
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.deletePost = deletePost;
