import prisma from "../../config/database";

class categoryModel {
  async getCategories(filter: {
    search: string;
    skip?: number;
    take?: number;
  }) {
    return await prisma.category.findMany({
      where: {
        name: {
          contains: filter.search,
        },
        description: {
          contains: filter.search,
        },
      },
      skip: filter.skip,
      take: filter.take,
    });
  }
}

export const category = new categoryModel();
