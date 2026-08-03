import jwt from "jsonwebtoken";
declare class TokenService {
    generateAccessToken(payload: object): string;
    generateRefreshToken(payload: object): string;
    verifyAccessToken(token: string): string | jwt.JwtPayload;
    verifyRefreshToken(token: string): string | jwt.JwtPayload;
}
export declare const tokenService: TokenService;
export {};
//# sourceMappingURL=token.service.d.ts.map