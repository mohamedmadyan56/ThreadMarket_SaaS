import z from "zod";
export declare const updateProfileSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    profilePictureUrl: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    phone?: string | undefined;
    email?: string | undefined;
    name?: string | undefined;
    profilePictureUrl?: string | undefined;
}, {
    phone?: string | undefined;
    email?: string | undefined;
    name?: string | undefined;
    profilePictureUrl?: string | undefined;
}>, {
    phone?: string | undefined;
    email?: string | undefined;
    name?: string | undefined;
    profilePictureUrl?: string | undefined;
}, {
    phone?: string | undefined;
    email?: string | undefined;
    name?: string | undefined;
    profilePictureUrl?: string | undefined;
}>;
//# sourceMappingURL=user.validators.d.ts.map