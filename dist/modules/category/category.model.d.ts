declare class CategoryModel {
    findByNameWithinBrand(brandId: string, name: string): Promise<{
        id: string;
    } | null>;
    create(brandId: string, name: string, imageUrl?: string): Promise<{
        id: string;
    }>;
}
export declare const categoryModel: CategoryModel;
export {};
//# sourceMappingURL=category.model.d.ts.map