import z from "zod";
import { type Request, type Response, type NextFunction } from "express";
export declare const validate: (schema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validate.d.ts.map