// server.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

// Existing API route for users
app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.loginpage.findMany(); // Adjust for your table
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// New API route for accounts (users)
app.get('/accounts', async (req, res) => {
  try {
    const accounts = await prisma.loginpage.findMany(); // Fetching accounts/users
    res.json(accounts);
  } catch (error) {
    console.error('Error fetching accounts:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
