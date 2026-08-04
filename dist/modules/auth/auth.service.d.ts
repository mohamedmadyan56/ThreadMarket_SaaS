declare class AuthService {
    register(username: string, email: string, password: string, filePath?: string): Promise<{
        Token: string;
        expiration: number;
    }>;
    verifyRegisterOtp(token: string, otp: string): Promise<void>;
    login(identifier: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
        accessTokenExpiration: number;
        refreshTokenExpiration: number;
        user: {
            id: string;
            username: string;
            phone: string | null;
            email: string;
            role: import("../../generated/prisma/enums").Role;
            picture_url: string | null;
        };
    }>;
    logout(refreshToken: string | undefined, accessToken: string | undefined): Promise<void>;
    sendOtp(email: string, purpose: string): Promise<{
        Token: string;
        expiration: number;
    }>;
    verifyOtp(token: string, otp: string): Promise<{
        Token: string;
        expiration: number;
    }>;
    resetPassword(token: string, newPassword: string): Promise<void>;
    refreshAccessToken(incomingRefreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        accessTokenExpiration: number;
        refreshTokenExpiration: number;
    }>;
}
export declare const authService: AuthService;
export {};
//# sourceMappingURL=auth.service.d.ts.map