import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Brand: "Brand";
    readonly BrandDocument: "BrandDocument";
    readonly BrandSocialLink: "BrandSocialLink";
    readonly BrandFollower: "BrandFollower";
    readonly Product: "Product";
    readonly Variant: "Variant";
    readonly Category: "Category";
    readonly Review: "Review";
    readonly Cart: "Cart";
    readonly wishlist: "wishlist";
    readonly Order: "Order";
    readonly OrderBrand: "OrderBrand";
    readonly D_Company: "D_Company";
    readonly Courier: "Courier";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly phone: "phone";
    readonly email: "email";
    readonly role: "role";
    readonly password: "password";
    readonly picture_url: "picture_url";
    readonly picture_url_id: "picture_url_id";
    readonly otp: "otp";
    readonly otp_expiration: "otp_expiration";
    readonly otp_purpose: "otp_purpose";
    readonly isVerified: "isVerified";
    readonly isBanned: "isBanned";
    readonly refreshToken: "refreshToken";
    readonly created_At: "created_At";
    readonly updated_At: "updated_At";
    readonly payment_id: "payment_id";
    readonly passwordChangedAt: "passwordChangedAt";
    readonly failedLoginAttempts: "failedLoginAttempts";
    readonly lockedUntil: "lockedUntil";
    readonly isOnline: "isOnline";
    readonly brandDocumentId: "brandDocumentId";
    readonly wishlistUserId: "wishlistUserId";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const BrandScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly name: "name";
    readonly verificationStatus: "verificationStatus";
    readonly rating: "rating";
    readonly logoUrl: "logoUrl";
    readonly logoUrl_id: "logoUrl_id";
    readonly followersCount: "followersCount";
    readonly viewedTimes: "viewedTimes";
    readonly isPromoted: "isPromoted";
    readonly isActive: "isActive";
    readonly balance: "balance";
    readonly paymentDetails: "paymentDetails";
    readonly address: "address";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum];
export declare const BrandDocumentScalarFieldEnum: {
    readonly id: "id";
    readonly brandId: "brandId";
    readonly docType: "docType";
    readonly fileUrl: "fileUrl";
    readonly reviewedBy: "reviewedBy";
    readonly reviewedAt: "reviewedAt";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly rejectionReason: "rejectionReason";
};
export type BrandDocumentScalarFieldEnum = (typeof BrandDocumentScalarFieldEnum)[keyof typeof BrandDocumentScalarFieldEnum];
export declare const BrandSocialLinkScalarFieldEnum: {
    readonly brandId: "brandId";
    readonly platform: "platform";
    readonly url: "url";
};
export type BrandSocialLinkScalarFieldEnum = (typeof BrandSocialLinkScalarFieldEnum)[keyof typeof BrandSocialLinkScalarFieldEnum];
export declare const BrandFollowerScalarFieldEnum: {
    readonly brandId: "brandId";
    readonly userId: "userId";
    readonly followedAt: "followedAt";
};
export type BrandFollowerScalarFieldEnum = (typeof BrandFollowerScalarFieldEnum)[keyof typeof BrandFollowerScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly media: "media";
    readonly description: "description";
    readonly brandId: "brandId";
    readonly categoryId: "categoryId";
    readonly price: "price";
    readonly discount: "discount";
    readonly viewCount: "viewCount";
    readonly rating: "rating";
    readonly available: "available";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly wishlistUserId: "wishlistUserId";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const VariantScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly color: "color";
    readonly size: "size";
    readonly stock: "stock";
    readonly sold: "sold";
    readonly cartId: "cartId";
    readonly orderOrderId: "orderOrderId";
};
export type VariantScalarFieldEnum = (typeof VariantScalarFieldEnum)[keyof typeof VariantScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly brandId: "brandId";
    readonly name: "name";
    readonly imageUrl: "imageUrl";
    readonly media: "media";
    readonly ishidden: "ishidden";
    readonly createdAt: "createdAt";
    readonly updateAt: "updateAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const ReviewScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly content: "content";
    readonly userId: "userId";
};
export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];
export declare const CartScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly discount: "discount";
    readonly cartNote: "cartNote";
    readonly userLocation: "userLocation";
    readonly userNumber: "userNumber";
    readonly price: "price";
    readonly totalPrice: "totalPrice";
};
export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum];
export declare const WishlistScalarFieldEnum: {
    readonly userId: "userId";
};
export type WishlistScalarFieldEnum = (typeof WishlistScalarFieldEnum)[keyof typeof WishlistScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly orderId: "orderId";
    readonly userId: "userId";
    readonly discount: "discount";
    readonly status: "status";
    readonly otp: "otp";
    readonly price: "price";
    readonly totalPrice: "totalPrice";
    readonly address: "address";
    readonly phoneNumber: "phoneNumber";
    readonly deliveryCId: "deliveryCId";
    readonly courierId: "courierId";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderBrandScalarFieldEnum: {
    readonly orderId: "orderId";
    readonly brandId: "brandId";
};
export type OrderBrandScalarFieldEnum = (typeof OrderBrandScalarFieldEnum)[keyof typeof OrderBrandScalarFieldEnum];
export declare const D_CompanyScalarFieldEnum: {
    readonly deliveryCompany: "deliveryCompany";
    readonly name: "name";
    readonly address: "address";
    readonly phoneNumber: "phoneNumber";
    readonly isVerified: "isVerified";
    readonly isBanned: "isBanned";
    readonly balance: "balance";
};
export type D_CompanyScalarFieldEnum = (typeof D_CompanyScalarFieldEnum)[keyof typeof D_CompanyScalarFieldEnum];
export declare const CourierScalarFieldEnum: {
    readonly id: "id";
    readonly photo_url: "photo_url";
    readonly photo_id: "photo_id";
    readonly phoneNumber: "phoneNumber";
    readonly documents: "documents";
    readonly plateNumber: "plateNumber";
    readonly isVerified: "isVerified";
    readonly isBanned: "isBanned";
    readonly delieveryCId: "delieveryCId";
};
export type CourierScalarFieldEnum = (typeof CourierScalarFieldEnum)[keyof typeof CourierScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map