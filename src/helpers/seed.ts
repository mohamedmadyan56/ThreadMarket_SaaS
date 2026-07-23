import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const saltRounds = 10;

  // ── Users ────────────────────────────────────────────────
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

  const createdUsers: Record<string, { id: string }> = {};

  for (const u of usersData) {
    const hashedPassword = await bcrypt.hash(u.password, saltRounds);

    const user = await prisma.user.upsert({
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

    createdUsers[u.email] = user;
  }

  // ── Brands ───────────────────────────────────────────────
  const brandOwner = createdUsers["brand@example.com"];

  const brandsData = [
    {
      name: "Nike Official Store",
      userId: brandOwner.id,
      address: "123 Sports Avenue, Cairo, Egypt",
      verificationStatus: "basic_verification" as const,
    },
    {
      name: "Urban Threads Co.",
      userId: createdUsers["john@example.com"].id,
      address: "456 Fashion Street, Alexandria, Egypt",
      verificationStatus: "pending" as const,
    },
    {
      name: "Cotton Comfort",
      userId: createdUsers["jane@example.com"].id,
      address: "789 Textile Road, Giza, Egypt",
      verificationStatus: "full_verification" as const,
    },
  ];

  for (const b of brandsData) {
    await prisma.brand.upsert({
      where: { userId: b.userId },
      update: {},
      create: {
        name: b.name,
        userId: b.userId,
        address: b.address,
        verificationStatus: b.verificationStatus,
      },
    });
  }

  // ── Brand Documents ──────────────────────────────────────
  const nikeBrand = await prisma.brand.findUnique({
    where: { userId: brandOwner.id },
  });

  if (nikeBrand) {
    const docsData = [
      {
        brandId: nikeBrand.id,
        docType: "business_registration" as const,
        fileUrl: "https://example.com/docs/nike_business_reg.pdf",
        status: "approved",
      },
      {
        brandId: nikeBrand.id,
        docType: "trademark_certificate" as const,
        fileUrl: "https://example.com/docs/nike_trademark.pdf",
        status: "pending",
      },
      {
        brandId: nikeBrand.id,
        docType: "proof_of_address" as const,
        fileUrl: "https://example.com/docs/nike_address.pdf",
        status: "pending",
      },
    ];

    for (const doc of docsData) {
      await prisma.brandDocument.create({ data: doc });
    }
  }

  // ── Brand Social Links ───────────────────────────────────
  if (nikeBrand) {
    const socialLinks = [
      { brandId: nikeBrand.id, platform: "instagram", url: "https://instagram.com/nike" },
      { brandId: nikeBrand.id, platform: "facebook", url: "https://facebook.com/nike" },
      { brandId: nikeBrand.id, platform: "twitter", url: "https://twitter.com/nike" },
    ];

    for (const link of socialLinks) {
      await prisma.brandSocialLink.upsert({
        where: { brandId_platform: { brandId: link.brandId, platform: link.platform } },
        update: { url: link.url },
        create: link,
      });
    }
  }

  // ── Categories ───────────────────────────────────────────
  const categoriesData = [
    { name: "T-Shirts", media: { icon: "👕" } },
    { name: "Jeans", media: { icon: "👖" } },
    { name: "Sneakers", media: { icon: "👟" } },
    { name: "Jackets", media: { icon: "🧥" } },
    { name: "Accessories", media: { icon: "🧢" } },
  ];

  const createdCategories: Record<string, { id: string }> = {};

  for (const c of categoriesData) {
    const cat = await prisma.category.upsert({
      where: { name: c.name },
      update: {},
      create: { name: c.name, media: c.media },
    });
    createdCategories[c.name] = cat;
  }

  // ── Products ─────────────────────────────────────────────
  if (nikeBrand) {
    const productsData = [
      {
        name: "Nike Air Max 270",
        description: "Comfortable running shoes with Air Max technology",
        brandId: nikeBrand.id,
        categoryId: createdCategories["Sneakers"].id,
        price: 1299.99,
        media: [{ url: "https://example.com/img/airmax1.jpg", type: "image" }],
      },
      {
        name: "Nike Dri-FIT Tee",
        description: "Moisture-wicking performance t-shirt",
        brandId: nikeBrand.id,
        categoryId: createdCategories["T-Shirts"].id,
        price: 349.99,
        media: [{ url: "https://example.com/img/drifit1.jpg", type: "image" }],
      },
      {
        name: "Nike Windrunner Jacket",
        description: "Lightweight windbreaker for all conditions",
        brandId: nikeBrand.id,
        categoryId: createdCategories["Jackets"].id,
        price: 899.99,
        media: [{ url: "https://example.com/img/windrunner.jpg", type: "image" }],
      },
    ];

    for (const p of productsData) {
      await prisma.product.create({ data: p });
    }
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
