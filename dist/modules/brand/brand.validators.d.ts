import { z } from "zod";
export declare const brandVerificationStatusSchema: z.ZodObject<{
    brandId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    brandId: string;
}, {
    brandId: string;
}>;
export declare const createBrandSchema: z.ZodObject<{
    name: z.ZodString;
    location: z.ZodObject<{
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        latitude: number;
        longitude: number;
    }, {
        latitude: number;
        longitude: number;
    }>;
}, "strip", z.ZodTypeAny, {
    name: string;
    location: {
        latitude: number;
        longitude: number;
    };
}, {
    name: string;
    location: {
        latitude: number;
        longitude: number;
    };
}>;
export declare const getBrandProfileSchema: z.ZodObject<{
    brandId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    brandId: string;
}, {
    brandId: string;
}>;
export declare const updateBrandProfileSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    isActive: z.ZodEffects<z.ZodOptional<z.ZodBoolean>, boolean | undefined, unknown>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    isActive?: boolean | undefined;
}, {
    name?: string | undefined;
    isActive?: unknown;
}>;
export declare const createBrandDocumentsSchema: z.ZodEffects<z.ZodObject<{
    brandId: z.ZodString;
    docTypes: z.ZodEffects<z.ZodArray<z.ZodEnum<[string, ...string[]]>, "atleastone">, [string, ...string[]], unknown>;
}, "strip", z.ZodTypeAny, {
    brandId: string;
    docTypes: [string, ...string[]];
}, {
    brandId: string;
    docTypes?: unknown;
}>, {
    docTypes: [string, ...string[]];
    brandId: string;
}, {
    brandId: string;
    docTypes?: unknown;
}>;
//# sourceMappingURL=brand.validators.d.ts.map