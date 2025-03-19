// api/server.js
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"; // Import bcrypt

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

// API route for registering a new account
app.post("/api/register", async (req, res) => {
  const { email, password, name, role, is_active, date_created } = req.body;

  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAccount = await prisma.loginPage.create({
      data: {
        email,
        password: hashedPassword, // Store the hashed password
        name,
        role,
        is_active,
        date_created: new Date(date_created), // Ensure date is a Date object
      },
    });
    res.status(201).json(newAccount); // Respond with the created account
  } catch (error) {
    console.error("Error creating account:", error);
    res.status(500).json({ error: "Error creating account" });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001 🚀");
});