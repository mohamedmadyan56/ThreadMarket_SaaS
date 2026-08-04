import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Brand
 *
 */
export type Brand = Prisma.BrandModel;
/**
 * Model BrandDocument
 *
 */
export type BrandDocument = Prisma.BrandDocumentModel;
/**
 * Model BrandSocialLink
 *
 */
export type BrandSocialLink = Prisma.BrandSocialLinkModel;
/**
 * Model BrandFollower
 *
 */
export type BrandFollower = Prisma.BrandFollowerModel;
/**
 * Model Product
 *
 */
export type Product = Prisma.ProductModel;
/**
 * Model Variant
 *
 */
export type Variant = Prisma.VariantModel;
/**
 * Model Category
 *
 */
export type Category = Prisma.CategoryModel;
/**
 * Model Review
 *
 */
export type Review = Prisma.ReviewModel;
/**
 * Model Cart
 *
 */
export type Cart = Prisma.CartModel;
/**
 * Model wishlist
 *
 */
export type wishlist = Prisma.wishlistModel;
/**
 * Model Order
 *
 */
export type Order = Prisma.OrderModel;
/**
 * Model OrderBrand
 *
 */
export type OrderBrand = Prisma.OrderBrandModel;
/**
 * Model D_Company
 *
 */
export type D_Company = Prisma.D_CompanyModel;
/**
 * Model Courier
 *
 */
export type Courier = Prisma.CourierModel;
//# sourceMappingURL=client.d.ts.map