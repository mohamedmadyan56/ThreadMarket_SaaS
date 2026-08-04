"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../generated/prisma/client");
const env_1 = require("./env");
const adapter = new adapter_pg_1.PrismaPg({ connectionString: env_1.ENV.DATABASE_URL });
const prisma = new client_1.PrismaClient({ adapter });
const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log("Connected to database");
    }
    catch (error) {
        console.log(error);
    }
};
exports.connectDB = connectDB;
exports.default = prisma;
//# sourceMappingURL=database.js.map