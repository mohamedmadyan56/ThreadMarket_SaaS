export declare const Role: {
    readonly user: "user";
    readonly brand: "brand";
    readonly admin: "admin";
    readonly delievryC: "delievryC";
    readonly courier: "courier";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const otpPurpose: {
    readonly resetpassword: "resetpassword";
    readonly signup: "signup";
};
export type otpPurpose = (typeof otpPurpose)[keyof typeof otpPurpose];
export declare const orderStatus: {
    readonly pending: "pending";
    readonly accepted: "accepted";
    readonly rejected: "rejected";
    readonly packing: "packing";
    readonly shipping: "shipping";
    readonly delivering: "delivering";
    readonly delivered: "delivered";
    readonly returned: "returned";
};
export type orderStatus = (typeof orderStatus)[keyof typeof orderStatus];
export declare const BrandVerificationTier: {
    readonly pending: "pending";
    readonly basic_verification: "basic_verification";
    readonly full_verification: "full_verification";
    readonly suspended: "suspended";
};
export type BrandVerificationTier = (typeof BrandVerificationTier)[keyof typeof BrandVerificationTier];
export declare const BrandDocType: {
    readonly trademark_certificate: "trademark_certificate";
    readonly business_registration: "business_registration";
    readonly representative_id: "representative_id";
    readonly proof_of_address: "proof_of_address";
    readonly shop_photo: "shop_photo";
    readonly product_packaging: "product_packaging";
    readonly social_platform: "social_platform";
    readonly website: "website";
    readonly invoice_sample: "invoice_sample";
};
export type BrandDocType = (typeof BrandDocType)[keyof typeof BrandDocType];
export declare const courierDocuments: {
    readonly nationalId: "nationalId";
    readonly drivingLicense: "drivingLicense";
    readonly vehicleRegistration: "vehicleRegistration";
    readonly plateNumber: "plateNumber";
};
export type courierDocuments = (typeof courierDocuments)[keyof typeof courierDocuments];
export declare const BrandDocRejectionReason: {
    readonly illegible: "illegible";
    readonly expired: "expired";
    readonly name_mismatch: "name_mismatch";
    readonly wrong_doc_type: "wrong_doc_type";
    readonly incomplete: "incomplete";
    readonly unsupported_format: "unsupported_format";
    readonly suspected_fraud: "suspected_fraud";
    readonly other: "other";
};
export type BrandDocRejectionReason = (typeof BrandDocRejectionReason)[keyof typeof BrandDocRejectionReason];
//# sourceMappingURL=enums.d.ts.map