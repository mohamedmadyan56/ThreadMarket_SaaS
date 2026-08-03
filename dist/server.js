"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const env_1 = require("./config/env");
const database_1 = require("./config/database");
const auth_routes_1 = __importDefault(require("./modules/auth/auth.routes"));
const brand_routes_1 = __importDefault(require("./modules/brand/brand.routes"));
const user_routes_1 = __importDefault(require("./modules/user/user.routes"));
const category_routes_1 = __importDefault(require("./modules/category/category.routes"));
const app = (0, express_1.default)();
(0, database_1.connectDB)();
// Middleware — كلها كانت مفقودة قبل كده
app.use((0, helmet_1.default)()); // أمان HTTP headers
app.use((0, cors_1.default)({ origin: true, credentials: true })); // CORS للـ frontend
app.use((0, morgan_1.default)("dev")); // تسجيل الطلبات
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)()); // ← جديد: عشان req.cookies يشتغل
// Routes — من الموديولات الجديدة
app.use("/api/v1/auth", auth_routes_1.default);
app.use("/api/v1/brands", brand_routes_1.default);
app.use("/api/v1/users", user_routes_1.default);
app.use("/api/v1/brands", category_routes_1.default);
// Error handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.log(err);
    res
        .status(statusCode)
        .json({ success: false, message: err.message || "Internal Server Error" });
});
// 404
app.use((req, res) => {
    res.status(404).json({ success: false, message: "Route not found" });
});
app.listen(env_1.ENV.PORT, () => {
    console.log(`Server is running on port ${env_1.ENV.PORT}`);
});
//# sourceMappingURL=server.js.map