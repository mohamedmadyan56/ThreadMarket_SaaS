declare class UserService {
    getCurrentUser(userId: string): Promise<{
        id: string;
        username: string;
        email: string;
        phone: string | null;
        role: import("../../generated/prisma/enums").Role;
    }>;
    updateCurrentUser(userId: string, updates: {
        name?: string;
        email?: string;
        phone?: string;
        profilePictureUrl?: string;
    }): Promise<{
        id: string;
        name: string;
    }>;
}
export declare const userService: UserService;
export {};
//# sourceMappingURL=user.service.d.ts.map