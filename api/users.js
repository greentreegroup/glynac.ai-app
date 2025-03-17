// api/users.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const users = await prisma.loginPage.findMany(); // Fetch from the LoginPage table
            res.status(200).json(users); // Return users from the database
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Error fetching users' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}