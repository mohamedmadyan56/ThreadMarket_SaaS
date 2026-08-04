import prisma from "../../config/database";
import AppError from "../../shared/errors/AppError";
import { StatusCodes } from "http-status-codes";
import { Prisma } from "@prisma/client";



export interface CategoryFilter {
  search?: string;
  skip?: number;
  take?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  isHidden?: boolean;

}


export interface CategoryResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;

}

export interface createCategoryInput {
  name: string;
  description: string;
  media?: any;
}
export interface UpdateCategoryInput {
  name?: string;
  description?: string;
  media?: any;
  isHidden?: boolean;
}




// ─── Model ───
class CategoryModel {
  private buildWhereClause(filter: CategoryFilter): any {
    const where: any = {};


    if (filter.isHidden === undefined || filter.isHidden === false) {
      where.isHidden = false
    }



    if (filter.search) {
      where.OR = [
        { name: { search: filter.search } },
        { description: { search: filter.search } },
      ]
    }

    return where;

  }
  async getCategories(filter: CategoryFilter): Promise<CategoryResult<any>> {
    try {
      const where = this.buildWhereClause(filter);
      const take = filter.take ?? 10;
      const skip = filter.skip ?? 0;

      const [total, data] = await Promise.all([
        prisma.category.count({ where }),
        prisma.category.findMany({
          where,
          skip,
          take,
          orderBy: filter.sortBy
            ? { [filter.sortBy]: filter.sortOrder ?? "asc" }
            : { createdAt: "desc" },
        }),
      ]);

      return {
        data,
        total,
        page: Math.floor(skip / take) + 1,
        limit: take,
        totalPages: Math.ceil(total / take),
      };
    } catch (error) {
      throw new AppError(
        "فشل في جلب التصنيفات",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }








}