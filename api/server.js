import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// ✅ Add a default route to check if the server is running
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// API route for fetching accounts
app.get("/api/accounts", async (req, res) => {
  try {
    const accounts = await prisma.loginPage.findMany();
    res.json(accounts);
  } catch (error) {
    console.error("Error fetching accounts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001 🚀");
});
