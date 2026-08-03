import { z } from "zod";
export declare const createCategorySchema: z.ZodObject<{
    brandId: z.ZodString;
    name: z.ZodString;
    imageUrl: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    brandId: string;
    imageUrl?: string | undefined;
}, {
    name: string;
    brandId: string;
    imageUrl?: string | undefined;
}>;
//# sourceMappingURL=category.validators.d.ts.map