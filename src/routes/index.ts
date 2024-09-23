import { Router } from "express";
import postRouter from "./postRouter";

const router = Router();

router.use("/posts", postRouter);

export default router;
