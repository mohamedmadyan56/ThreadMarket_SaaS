import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { ENV } from "../helpers/ENV";

const adapter = new PrismaPg({ connectionString: ENV.DATABASE_URL });

const prisma = new PrismaClient({ adapter });

export const connectDB = async () => {
  try {
    const client = await prisma.$connect();
    console.log(`Connected to database`);
  } catch (error) {
    console.log(error);
  }
};

export default prisma;
