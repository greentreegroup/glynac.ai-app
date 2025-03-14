import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Hash password
  const hashedPassword = await bcrypt.hash('password123', 10); // Hash password

  // Insert a single user into the LoginPage table
  const newUser = await prisma.loginPage.create({
    data: {
      email: 'user1@example.com',
      password: hashedPassword,  // Use hashed password
      name: 'John Doe',
      role: 'USER',
      is_active: true,
      date_created: new Date(),
    },
  });

  console.log('Inserted user:', newUser);

  // Insert multiple rows at once
  const users = await prisma.loginPage.createMany({
    data: [
      {
        email: 'user2@example.com',
        password: await bcrypt.hash('password456', 10),
        name: 'Jane Doe',
        role: 'ADMIN',
        is_active: true,
        date_created: new Date(),
      },
      {
        email: 'user3@example.com',
        password: await bcrypt.hash('password789', 10),
        name: 'Alice Smith',
        role: 'USER',
        is_active: true,
        date_created: new Date(),
      },
    ],
  });

  console.log('Inserted multiple users:', users);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
