"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_1 = require("../../shared/middleware/validate");
const authenticate_1 = __importDefault(require("../../shared/middleware/authenticate"));
const authorize_1 = require("../../shared/middleware/authorize");
const category_controller_1 = require("./category.controller");
const category_validators_1 = require("./category.validators");
const router = (0, express_1.Router)();
router.post("/:brandId/categories", authenticate_1.default, (0, authorize_1.authorize)("brand"), (0, validate_1.validate)(category_validators_1.createCategorySchema), category_controller_1.createCategory);
exports.default = router;
//# sourceMappingURL=category.routes.js.map