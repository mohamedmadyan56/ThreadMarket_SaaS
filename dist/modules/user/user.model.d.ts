import type { Role } from "../../generated/prisma/enums";
export interface UserProfile {
    id: string;
    username: string;
    email: string;
    phone: string | null;
    role: Role;
}
declare class UserModel {
    findProfileById(id: string): Promise<UserProfile | null>;
    findByEmail(email: string): Promise<{
        id: string;
        phone: string | null;
        email: string;
        username: string;
        role: Role;
        password: string;
        picture_url: string | null;
        picture_url_id: string | null;
        otp: string | null;
        otp_expiration: Date | null;
        otp_purpose: import("../../generated/prisma/enums").otpPurpose | null;
        isVerified: boolean;
        isBanned: boolean;
        refreshToken: string | null;
        created_At: Date;
        updated_At: Date;
        payment_id: string | null;
        passwordChangedAt: Date | null;
        failedLoginAttempts: number;
        lockedUntil: Date | null;
        isOnline: boolean;
        brandDocumentId: string | null;
        wishlistUserId: string | null;
    } | null>;
    findByPhone(phone: string): Promise<{
        id: string;
        phone: string | null;
        email: string;
        username: string;
        role: Role;
        password: string;
        picture_url: string | null;
        picture_url_id: string | null;
        otp: string | null;
        otp_expiration: Date | null;
        otp_purpose: import("../../generated/prisma/enums").otpPurpose | null;
        isVerified: boolean;
        isBanned: boolean;
        refreshToken: string | null;
        created_At: Date;
        updated_At: Date;
        payment_id: string | null;
        passwordChangedAt: Date | null;
        failedLoginAttempts: number;
        lockedUntil: Date | null;
        isOnline: boolean;
        brandDocumentId: string | null;
        wishlistUserId: string | null;
    } | null>;
    updateProfile(userId: string, data: any): Promise<UserProfile>;
}
export declare const userModel: UserModel;
export {};
//# sourceMappingURL=user.model.d.ts.map