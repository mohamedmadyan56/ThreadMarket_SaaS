import { category } from "./category.model";
class CategoryService {
  async getCategories(filter: {
    search: string;
    skip?: number;
    take?: number;
  }) {
    return await category.getCategories(filter);
  }
}

export const categoryService = new CategoryService();
