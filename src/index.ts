import express from "express";
import router from "./routes";
import prisma from "./db/prismaClient";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", router);

app.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}`);
  await prisma.$connect();
  console.log("Connected to the database");
});
