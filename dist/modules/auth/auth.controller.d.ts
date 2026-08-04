import { Request, Response } from "express";
export declare const register: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const verifyRegisterOtp: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const login: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const logout: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const sendOtp: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const verifyOtp: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const resetPassword: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const refreshAccessToken: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
//# sourceMappingURL=auth.controller.d.ts.map