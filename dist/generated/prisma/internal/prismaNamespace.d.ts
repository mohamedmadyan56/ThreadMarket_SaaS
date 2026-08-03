import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "brand" | "brandDocument" | "brandSocialLink" | "brandFollower" | "product" | "variant" | "category" | "review" | "cart" | "wishlist" | "order" | "orderBrand" | "d_Company" | "courier";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Brand: {
            payload: Prisma.$BrandPayload<ExtArgs>;
            fields: Prisma.BrandFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BrandFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                findFirst: {
                    args: Prisma.BrandFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                findMany: {
                    args: Prisma.BrandFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>[];
                };
                create: {
                    args: Prisma.BrandCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                createMany: {
                    args: Prisma.BrandCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>[];
                };
                delete: {
                    args: Prisma.BrandDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                update: {
                    args: Prisma.BrandUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                deleteMany: {
                    args: Prisma.BrandDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BrandUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BrandUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>[];
                };
                upsert: {
                    args: Prisma.BrandUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                aggregate: {
                    args: Prisma.BrandAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBrand>;
                };
                groupBy: {
                    args: Prisma.BrandGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BrandCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandCountAggregateOutputType> | number;
                };
            };
        };
        BrandDocument: {
            payload: Prisma.$BrandDocumentPayload<ExtArgs>;
            fields: Prisma.BrandDocumentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BrandDocumentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandDocumentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BrandDocumentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandDocumentPayload>;
                };
                findFirst: {
                    args: Prisma.BrandDocumentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandDocumentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BrandDocumentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandDocumentPayload>;
                };
                findMany: {
                    args: Prisma.BrandDocumentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandDocumentPayload>[];
                };
                create: {
                    args: Prisma.BrandDocumentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandDocumentPayload>;
                };
                createMany: {
                    args: Prisma.BrandDocumentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BrandDocumentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandDocumentPayload>[];
                };
                delete: {
                    args: Prisma.BrandDocumentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandDocumentPayload>;
                };
                update: {
                    args: Prisma.BrandDocumentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandDocumentPayload>;
                };
                deleteMany: {
                    args: Prisma.BrandDocumentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BrandDocumentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BrandDocumentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandDocumentPayload>[];
                };
                upsert: {
                    args: Prisma.BrandDocumentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandDocumentPayload>;
                };
                aggregate: {
                    args: Prisma.BrandDocumentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBrandDocument>;
                };
                groupBy: {
                    args: Prisma.BrandDocumentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandDocumentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BrandDocumentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandDocumentCountAggregateOutputType> | number;
                };
            };
        };
        BrandSocialLink: {
            payload: Prisma.$BrandSocialLinkPayload<ExtArgs>;
            fields: Prisma.BrandSocialLinkFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BrandSocialLinkFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandSocialLinkPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BrandSocialLinkFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandSocialLinkPayload>;
                };
                findFirst: {
                    args: Prisma.BrandSocialLinkFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandSocialLinkPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BrandSocialLinkFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandSocialLinkPayload>;
                };
                findMany: {
                    args: Prisma.BrandSocialLinkFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandSocialLinkPayload>[];
                };
                create: {
                    args: Prisma.BrandSocialLinkCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandSocialLinkPayload>;
                };
                createMany: {
                    args: Prisma.BrandSocialLinkCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BrandSocialLinkCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandSocialLinkPayload>[];
                };
                delete: {
                    args: Prisma.BrandSocialLinkDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandSocialLinkPayload>;
                };
                update: {
                    args: Prisma.BrandSocialLinkUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandSocialLinkPayload>;
                };
                deleteMany: {
                    args: Prisma.BrandSocialLinkDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BrandSocialLinkUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BrandSocialLinkUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandSocialLinkPayload>[];
                };
                upsert: {
                    args: Prisma.BrandSocialLinkUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandSocialLinkPayload>;
                };
                aggregate: {
                    args: Prisma.BrandSocialLinkAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBrandSocialLink>;
                };
                groupBy: {
                    args: Prisma.BrandSocialLinkGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandSocialLinkGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BrandSocialLinkCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandSocialLinkCountAggregateOutputType> | number;
                };
            };
        };
        BrandFollower: {
            payload: Prisma.$BrandFollowerPayload<ExtArgs>;
            fields: Prisma.BrandFollowerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BrandFollowerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandFollowerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BrandFollowerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandFollowerPayload>;
                };
                findFirst: {
                    args: Prisma.BrandFollowerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandFollowerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BrandFollowerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandFollowerPayload>;
                };
                findMany: {
                    args: Prisma.BrandFollowerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandFollowerPayload>[];
                };
                create: {
                    args: Prisma.BrandFollowerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandFollowerPayload>;
                };
                createMany: {
                    args: Prisma.BrandFollowerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BrandFollowerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandFollowerPayload>[];
                };
                delete: {
                    args: Prisma.BrandFollowerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandFollowerPayload>;
                };
                update: {
                    args: Prisma.BrandFollowerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandFollowerPayload>;
                };
                deleteMany: {
                    args: Prisma.BrandFollowerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BrandFollowerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BrandFollowerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandFollowerPayload>[];
                };
                upsert: {
                    args: Prisma.BrandFollowerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandFollowerPayload>;
                };
                aggregate: {
                    args: Prisma.BrandFollowerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBrandFollower>;
                };
                groupBy: {
                    args: Prisma.BrandFollowerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandFollowerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BrandFollowerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandFollowerCountAggregateOutputType> | number;
                };
            };
        };
        Product: {
            payload: Prisma.$ProductPayload<ExtArgs>;
            fields: Prisma.ProductFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findFirst: {
                    args: Prisma.ProductFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findMany: {
                    args: Prisma.ProductFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                create: {
                    args: Prisma.ProductCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                createMany: {
                    args: Prisma.ProductCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                delete: {
                    args: Prisma.ProductDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                update: {
                    args: Prisma.ProductUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                upsert: {
                    args: Prisma.ProductUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                aggregate: {
                    args: Prisma.ProductAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct>;
                };
                groupBy: {
                    args: Prisma.ProductGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCountAggregateOutputType> | number;
                };
            };
        };
        Variant: {
            payload: Prisma.$VariantPayload<ExtArgs>;
            fields: Prisma.VariantFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VariantFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VariantFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload>;
                };
                findFirst: {
                    args: Prisma.VariantFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VariantFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload>;
                };
                findMany: {
                    args: Prisma.VariantFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload>[];
                };
                create: {
                    args: Prisma.VariantCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload>;
                };
                createMany: {
                    args: Prisma.VariantCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VariantCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload>[];
                };
                delete: {
                    args: Prisma.VariantDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload>;
                };
                update: {
                    args: Prisma.VariantUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload>;
                };
                deleteMany: {
                    args: Prisma.VariantDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VariantUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VariantUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload>[];
                };
                upsert: {
                    args: Prisma.VariantUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload>;
                };
                aggregate: {
                    args: Prisma.VariantAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVariant>;
                };
                groupBy: {
                    args: Prisma.VariantGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VariantGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VariantCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VariantCountAggregateOutputType> | number;
                };
            };
        };
        Category: {
            payload: Prisma.$CategoryPayload<ExtArgs>;
            fields: Prisma.CategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                findFirst: {
                    args: Prisma.CategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                findMany: {
                    args: Prisma.CategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                create: {
                    args: Prisma.CategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                createMany: {
                    args: Prisma.CategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                delete: {
                    args: Prisma.CategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                update: {
                    args: Prisma.CategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                upsert: {
                    args: Prisma.CategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                aggregate: {
                    args: Prisma.CategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategory>;
                };
                groupBy: {
                    args: Prisma.CategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryCountAggregateOutputType> | number;
                };
            };
        };
        Review: {
            payload: Prisma.$ReviewPayload<ExtArgs>;
            fields: Prisma.ReviewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReviewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                findFirst: {
                    args: Prisma.ReviewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                findMany: {
                    args: Prisma.ReviewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>[];
                };
                create: {
                    args: Prisma.ReviewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                createMany: {
                    args: Prisma.ReviewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>[];
                };
                delete: {
                    args: Prisma.ReviewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                update: {
                    args: Prisma.ReviewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                deleteMany: {
                    args: Prisma.ReviewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReviewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>[];
                };
                upsert: {
                    args: Prisma.ReviewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                aggregate: {
                    args: Prisma.ReviewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReview>;
                };
                groupBy: {
                    args: Prisma.ReviewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReviewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewCountAggregateOutputType> | number;
                };
            };
        };
        Cart: {
            payload: Prisma.$CartPayload<ExtArgs>;
            fields: Prisma.CartFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CartFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                findFirst: {
                    args: Prisma.CartFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                findMany: {
                    args: Prisma.CartFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>[];
                };
                create: {
                    args: Prisma.CartCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                createMany: {
                    args: Prisma.CartCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>[];
                };
                delete: {
                    args: Prisma.CartDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                update: {
                    args: Prisma.CartUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                deleteMany: {
                    args: Prisma.CartDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CartUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>[];
                };
                upsert: {
                    args: Prisma.CartUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                aggregate: {
                    args: Prisma.CartAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCart>;
                };
                groupBy: {
                    args: Prisma.CartGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CartCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartCountAggregateOutputType> | number;
                };
            };
        };
        wishlist: {
            payload: Prisma.$wishlistPayload<ExtArgs>;
            fields: Prisma.wishlistFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.wishlistFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.wishlistFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistPayload>;
                };
                findFirst: {
                    args: Prisma.wishlistFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.wishlistFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistPayload>;
                };
                findMany: {
                    args: Prisma.wishlistFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistPayload>[];
                };
                create: {
                    args: Prisma.wishlistCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistPayload>;
                };
                createMany: {
                    args: Prisma.wishlistCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.wishlistCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistPayload>[];
                };
                delete: {
                    args: Prisma.wishlistDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistPayload>;
                };
                update: {
                    args: Prisma.wishlistUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistPayload>;
                };
                deleteMany: {
                    args: Prisma.wishlistDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.wishlistUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.wishlistUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistPayload>[];
                };
                upsert: {
                    args: Prisma.wishlistUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistPayload>;
                };
                aggregate: {
                    args: Prisma.WishlistAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWishlist>;
                };
                groupBy: {
                    args: Prisma.wishlistGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WishlistGroupByOutputType>[];
                };
                count: {
                    args: Prisma.wishlistCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WishlistCountAggregateOutputType> | number;
                };
            };
        };
        Order: {
            payload: Prisma.$OrderPayload<ExtArgs>;
            fields: Prisma.OrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findFirst: {
                    args: Prisma.OrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findMany: {
                    args: Prisma.OrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                create: {
                    args: Prisma.OrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                createMany: {
                    args: Prisma.OrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                delete: {
                    args: Prisma.OrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                update: {
                    args: Prisma.OrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                upsert: {
                    args: Prisma.OrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                aggregate: {
                    args: Prisma.OrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder>;
                };
                groupBy: {
                    args: Prisma.OrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderCountAggregateOutputType> | number;
                };
            };
        };
        OrderBrand: {
            payload: Prisma.$OrderBrandPayload<ExtArgs>;
            fields: Prisma.OrderBrandFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderBrandFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderBrandPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderBrandFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderBrandPayload>;
                };
                findFirst: {
                    args: Prisma.OrderBrandFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderBrandPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderBrandFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderBrandPayload>;
                };
                findMany: {
                    args: Prisma.OrderBrandFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderBrandPayload>[];
                };
                create: {
                    args: Prisma.OrderBrandCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderBrandPayload>;
                };
                createMany: {
                    args: Prisma.OrderBrandCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderBrandCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderBrandPayload>[];
                };
                delete: {
                    args: Prisma.OrderBrandDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderBrandPayload>;
                };
                update: {
                    args: Prisma.OrderBrandUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderBrandPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderBrandDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderBrandUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderBrandUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderBrandPayload>[];
                };
                upsert: {
                    args: Prisma.OrderBrandUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderBrandPayload>;
                };
                aggregate: {
                    args: Prisma.OrderBrandAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderBrand>;
                };
                groupBy: {
                    args: Prisma.OrderBrandGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderBrandGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderBrandCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderBrandCountAggregateOutputType> | number;
                };
            };
        };
        D_Company: {
            payload: Prisma.$D_CompanyPayload<ExtArgs>;
            fields: Prisma.D_CompanyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.D_CompanyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$D_CompanyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.D_CompanyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$D_CompanyPayload>;
                };
                findFirst: {
                    args: Prisma.D_CompanyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$D_CompanyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.D_CompanyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$D_CompanyPayload>;
                };
                findMany: {
                    args: Prisma.D_CompanyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$D_CompanyPayload>[];
                };
                create: {
                    args: Prisma.D_CompanyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$D_CompanyPayload>;
                };
                createMany: {
                    args: Prisma.D_CompanyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.D_CompanyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$D_CompanyPayload>[];
                };
                delete: {
                    args: Prisma.D_CompanyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$D_CompanyPayload>;
                };
                update: {
                    args: Prisma.D_CompanyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$D_CompanyPayload>;
                };
                deleteMany: {
                    args: Prisma.D_CompanyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.D_CompanyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.D_CompanyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$D_CompanyPayload>[];
                };
                upsert: {
                    args: Prisma.D_CompanyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$D_CompanyPayload>;
                };
                aggregate: {
                    args: Prisma.D_CompanyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateD_Company>;
                };
                groupBy: {
                    args: Prisma.D_CompanyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.D_CompanyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.D_CompanyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.D_CompanyCountAggregateOutputType> | number;
                };
            };
        };
        Courier: {
            payload: Prisma.$CourierPayload<ExtArgs>;
            fields: Prisma.CourierFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CourierFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CourierFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>;
                };
                findFirst: {
                    args: Prisma.CourierFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CourierFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>;
                };
                findMany: {
                    args: Prisma.CourierFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>[];
                };
                create: {
                    args: Prisma.CourierCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>;
                };
                createMany: {
                    args: Prisma.CourierCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CourierCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>[];
                };
                delete: {
                    args: Prisma.CourierDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>;
                };
                update: {
                    args: Prisma.CourierUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>;
                };
                deleteMany: {
                    args: Prisma.CourierDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CourierUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CourierUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>[];
                };
                upsert: {
                    args: Prisma.CourierUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourierPayload>;
                };
                aggregate: {
                    args: Prisma.CourierAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCourier>;
                };
                groupBy: {
                    args: Prisma.CourierGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourierGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CourierCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourierCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Role'
 */
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
/**
 * Reference to a field of type 'Role[]'
 */
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'otpPurpose'
 */
export type EnumotpPurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'otpPurpose'>;
/**
 * Reference to a field of type 'otpPurpose[]'
 */
export type ListEnumotpPurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'otpPurpose[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'BrandVerificationTier'
 */
export type EnumBrandVerificationTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BrandVerificationTier'>;
/**
 * Reference to a field of type 'BrandVerificationTier[]'
 */
export type ListEnumBrandVerificationTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BrandVerificationTier[]'>;
/**
 * Reference to a field of type 'Decimal'
 */
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
/**
 * Reference to a field of type 'Decimal[]'
 */
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
/**
 * Reference to a field of type 'BigInt'
 */
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
/**
 * Reference to a field of type 'BigInt[]'
 */
export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'BrandDocRejectionReason'
 */
export type EnumBrandDocRejectionReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BrandDocRejectionReason'>;
/**
 * Reference to a field of type 'BrandDocRejectionReason[]'
 */
export type ListEnumBrandDocRejectionReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BrandDocRejectionReason[]'>;
/**
 * Reference to a field of type 'Json[]'
 */
export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>;
/**
 * Reference to a field of type 'orderStatus'
 */
export type EnumorderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'orderStatus'>;
/**
 * Reference to a field of type 'orderStatus[]'
 */
export type ListEnumorderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'orderStatus[]'>;
/**
 * Reference to a field of type 'courierDocuments[]'
 */
export type ListEnumcourierDocumentsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'courierDocuments[]'>;
/**
 * Reference to a field of type 'courierDocuments'
 */
export type EnumcourierDocumentsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'courierDocuments'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    brand?: Prisma.BrandOmit;
    brandDocument?: Prisma.BrandDocumentOmit;
    brandSocialLink?: Prisma.BrandSocialLinkOmit;
    brandFollower?: Prisma.BrandFollowerOmit;
    product?: Prisma.ProductOmit;
    variant?: Prisma.VariantOmit;
    category?: Prisma.CategoryOmit;
    review?: Prisma.ReviewOmit;
    cart?: Prisma.CartOmit;
    wishlist?: Prisma.wishlistOmit;
    order?: Prisma.OrderOmit;
    orderBrand?: Prisma.OrderBrandOmit;
    d_Company?: Prisma.D_CompanyOmit;
    courier?: Prisma.CourierOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map