"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_1 = require("../../shared/middleware/validate");
const authenticate_1 = __importDefault(require("../../shared/middleware/authenticate"));
const authorize_1 = require("../../shared/middleware/authorize");
const upload_1 = require("../../shared/utils/upload");
const brand_controller_1 = require("./brand.controller");
const brand_validators_1 = require("./brand.validators");
const router = (0, express_1.Router)();
router.use(authenticate_1.default);
router
    .route("/")
    .post((0, validate_1.validate)(brand_validators_1.createBrandSchema), (0, authorize_1.authorize)("admin", "user"), brand_controller_1.createBrand);
router.patch("/:brandId/profile", (0, authorize_1.authorize)("admin", "brand"), upload_1.upload.single("logo"), (0, validate_1.validate)(brand_validators_1.updateBrandProfileSchema), brand_controller_1.updateBrandProfile);
router.get("/:brandId/verification-status", (0, authorize_1.authorize)("admin", "brand"), (0, validate_1.validate)(brand_validators_1.brandVerificationStatusSchema), brand_controller_1.brandVerificationStatus);
router.get("/:brandId", (0, validate_1.validate)(brand_validators_1.getBrandProfileSchema), brand_controller_1.getPublicBrandProfile);
router.get("/:brandId/verification-status", authenticate_1.default, (0, validate_1.validate)(brand_validators_1.brandVerificationStatusSchema), brand_controller_1.brandVerificationStatus);
router.post("/:brandId/documents", (0, authorize_1.authorize)("admin", "brand"), upload_1.upload.array("documents"), (0, validate_1.validate)(brand_validators_1.createBrandDocumentsSchema), brand_controller_1.createBrandDocument);
exports.default = router;
//# sourceMappingURL=brand.routes.js.map