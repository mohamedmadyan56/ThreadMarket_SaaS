import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const saltRounds = 10;

  const usersData = [
    {
      username: "Admin",
      email: "admin@example.com",
      phone: "+201000000001",
      password: "Admin@123",
      role: "admin",
    },
    {
      username: "John Doe",
      email: "john@example.com",
      phone: "+201000000002",
      password: "User@123",
      role: "user",
    },
    {
      username: "Jane Smith",
      email: "jane@example.com",
      phone: "+201000000003",
      password: "User@123",
      role: "user",
    },
    {
      username: "Nike Store",
      email: "brand@example.com",
      phone: "+201000000004",
      password: "Brand@123",
      role: "brand",
    },
    {
      username: "Courier Mike",
      email: "courier@example.com",
      phone: "+201000000005",
      password: "Courier@123",
      role: "courier",
    },
    {
      username: "Delivery Center 1",
      email: "delivery@example.com",
      phone: "+201000000006",
      password: "Delivery@123",
      role: "delievryC",
    },
  ] as const;

  for (const u of usersData) {
    const hashedPassword = await bcrypt.hash(u.password, saltRounds);

    await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: {
        username: u.username,
        email: u.email,
        phone: u.phone,
        password: hashedPassword,
        role: u.role,
      },
    });
  }

  console.log("✅ Seeding finished.");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
