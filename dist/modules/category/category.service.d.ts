declare class CategoryService {
    createCategory(brandId: string, userId: string, role: string, name: string, imageUrl?: string): Promise<{
        id: string;
    }>;
}
export declare const categoryService: CategoryService;
export {};
//# sourceMappingURL=category.service.d.ts.map