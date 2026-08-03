import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Brand
 *
 */
export type BrandModel = runtime.Types.Result.DefaultSelection<Prisma.$BrandPayload>;
export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null;
    _avg: BrandAvgAggregateOutputType | null;
    _sum: BrandSumAggregateOutputType | null;
    _min: BrandMinAggregateOutputType | null;
    _max: BrandMaxAggregateOutputType | null;
};
export type BrandAvgAggregateOutputType = {
    rating: runtime.Decimal | null;
    followersCount: number | null;
    viewedTimes: number | null;
    balance: runtime.Decimal | null;
};
export type BrandSumAggregateOutputType = {
    rating: runtime.Decimal | null;
    followersCount: number | null;
    viewedTimes: bigint | null;
    balance: runtime.Decimal | null;
};
export type BrandMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    verificationStatus: $Enums.BrandVerificationTier | null;
    rating: runtime.Decimal | null;
    logoUrl: string | null;
    logoUrl_id: string | null;
    followersCount: number | null;
    viewedTimes: bigint | null;
    isPromoted: boolean | null;
    isActive: boolean | null;
    balance: runtime.Decimal | null;
    address: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BrandMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    verificationStatus: $Enums.BrandVerificationTier | null;
    rating: runtime.Decimal | null;
    logoUrl: string | null;
    logoUrl_id: string | null;
    followersCount: number | null;
    viewedTimes: bigint | null;
    isPromoted: boolean | null;
    isActive: boolean | null;
    balance: runtime.Decimal | null;
    address: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BrandCountAggregateOutputType = {
    id: number;
    userId: number;
    name: number;
    verificationStatus: number;
    rating: number;
    logoUrl: number;
    logoUrl_id: number;
    followersCount: number;
    viewedTimes: number;
    isPromoted: number;
    isActive: number;
    balance: number;
    paymentDetails: number;
    address: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BrandAvgAggregateInputType = {
    rating?: true;
    followersCount?: true;
    viewedTimes?: true;
    balance?: true;
};
export type BrandSumAggregateInputType = {
    rating?: true;
    followersCount?: true;
    viewedTimes?: true;
    balance?: true;
};
export type BrandMinAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    verificationStatus?: true;
    rating?: true;
    logoUrl?: true;
    logoUrl_id?: true;
    followersCount?: true;
    viewedTimes?: true;
    isPromoted?: true;
    isActive?: true;
    balance?: true;
    address?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BrandMaxAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    verificationStatus?: true;
    rating?: true;
    logoUrl?: true;
    logoUrl_id?: true;
    followersCount?: true;
    viewedTimes?: true;
    isPromoted?: true;
    isActive?: true;
    balance?: true;
    address?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BrandCountAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    verificationStatus?: true;
    rating?: true;
    logoUrl?: true;
    logoUrl_id?: true;
    followersCount?: true;
    viewedTimes?: true;
    isPromoted?: true;
    isActive?: true;
    balance?: true;
    paymentDetails?: true;
    address?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BrandAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: Prisma.BrandWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Brands to fetch.
     */
    orderBy?: Prisma.BrandOrderByWithRelationInput | Prisma.BrandOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BrandWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Brands.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BrandAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BrandSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType;
};
export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
    [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBrand[P]> : Prisma.GetScalarType<T[P], AggregateBrand[P]>;
};
export type BrandGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandWhereInput;
    orderBy?: Prisma.BrandOrderByWithAggregationInput | Prisma.BrandOrderByWithAggregationInput[];
    by: Prisma.BrandScalarFieldEnum[] | Prisma.BrandScalarFieldEnum;
    having?: Prisma.BrandScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BrandCountAggregateInputType | true;
    _avg?: BrandAvgAggregateInputType;
    _sum?: BrandSumAggregateInputType;
    _min?: BrandMinAggregateInputType;
    _max?: BrandMaxAggregateInputType;
};
export type BrandGroupByOutputType = {
    id: string;
    userId: string;
    name: string;
    verificationStatus: $Enums.BrandVerificationTier;
    rating: runtime.Decimal;
    logoUrl: string | null;
    logoUrl_id: string | null;
    followersCount: number;
    viewedTimes: bigint;
    isPromoted: boolean;
    isActive: boolean;
    balance: runtime.Decimal;
    paymentDetails: runtime.JsonValue | null;
    address: string;
    createdAt: Date;
    updatedAt: Date;
    _count: BrandCountAggregateOutputType | null;
    _avg: BrandAvgAggregateOutputType | null;
    _sum: BrandSumAggregateOutputType | null;
    _min: BrandMinAggregateOutputType | null;
    _max: BrandMaxAggregateOutputType | null;
};
export type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BrandGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BrandGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BrandGroupByOutputType[P]>;
}>>;
export type BrandWhereInput = {
    AND?: Prisma.BrandWhereInput | Prisma.BrandWhereInput[];
    OR?: Prisma.BrandWhereInput[];
    NOT?: Prisma.BrandWhereInput | Prisma.BrandWhereInput[];
    id?: Prisma.UuidFilter<"Brand"> | string;
    userId?: Prisma.UuidFilter<"Brand"> | string;
    name?: Prisma.StringFilter<"Brand"> | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFilter<"Brand"> | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFilter<"Brand"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.StringNullableFilter<"Brand"> | string | null;
    logoUrl_id?: Prisma.StringNullableFilter<"Brand"> | string | null;
    followersCount?: Prisma.IntFilter<"Brand"> | number;
    viewedTimes?: Prisma.BigIntFilter<"Brand"> | bigint | number;
    isPromoted?: Prisma.BoolFilter<"Brand"> | boolean;
    isActive?: Prisma.BoolFilter<"Brand"> | boolean;
    balance?: Prisma.DecimalFilter<"Brand"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.JsonNullableFilter<"Brand">;
    address?: Prisma.StringFilter<"Brand"> | string;
    createdAt?: Prisma.DateTimeFilter<"Brand"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Brand"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    documents?: Prisma.BrandDocumentListRelationFilter;
    socialLinks?: Prisma.BrandSocialLinkListRelationFilter;
    followers?: Prisma.BrandFollowerListRelationFilter;
    categories?: Prisma.CategoryListRelationFilter;
    products?: Prisma.ProductListRelationFilter;
    orderBrands?: Prisma.OrderBrandListRelationFilter;
};
export type BrandOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    logoUrl_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    followersCount?: Prisma.SortOrder;
    viewedTimes?: Prisma.SortOrder;
    isPromoted?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    paymentDetails?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    documents?: Prisma.BrandDocumentOrderByRelationAggregateInput;
    socialLinks?: Prisma.BrandSocialLinkOrderByRelationAggregateInput;
    followers?: Prisma.BrandFollowerOrderByRelationAggregateInput;
    categories?: Prisma.CategoryOrderByRelationAggregateInput;
    products?: Prisma.ProductOrderByRelationAggregateInput;
    orderBrands?: Prisma.OrderBrandOrderByRelationAggregateInput;
};
export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.BrandWhereInput | Prisma.BrandWhereInput[];
    OR?: Prisma.BrandWhereInput[];
    NOT?: Prisma.BrandWhereInput | Prisma.BrandWhereInput[];
    name?: Prisma.StringFilter<"Brand"> | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFilter<"Brand"> | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFilter<"Brand"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.StringNullableFilter<"Brand"> | string | null;
    logoUrl_id?: Prisma.StringNullableFilter<"Brand"> | string | null;
    followersCount?: Prisma.IntFilter<"Brand"> | number;
    viewedTimes?: Prisma.BigIntFilter<"Brand"> | bigint | number;
    isPromoted?: Prisma.BoolFilter<"Brand"> | boolean;
    isActive?: Prisma.BoolFilter<"Brand"> | boolean;
    balance?: Prisma.DecimalFilter<"Brand"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.JsonNullableFilter<"Brand">;
    address?: Prisma.StringFilter<"Brand"> | string;
    createdAt?: Prisma.DateTimeFilter<"Brand"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Brand"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    documents?: Prisma.BrandDocumentListRelationFilter;
    socialLinks?: Prisma.BrandSocialLinkListRelationFilter;
    followers?: Prisma.BrandFollowerListRelationFilter;
    categories?: Prisma.CategoryListRelationFilter;
    products?: Prisma.ProductListRelationFilter;
    orderBrands?: Prisma.OrderBrandListRelationFilter;
}, "id" | "userId">;
export type BrandOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    logoUrl_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    followersCount?: Prisma.SortOrder;
    viewedTimes?: Prisma.SortOrder;
    isPromoted?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    paymentDetails?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BrandCountOrderByAggregateInput;
    _avg?: Prisma.BrandAvgOrderByAggregateInput;
    _max?: Prisma.BrandMaxOrderByAggregateInput;
    _min?: Prisma.BrandMinOrderByAggregateInput;
    _sum?: Prisma.BrandSumOrderByAggregateInput;
};
export type BrandScalarWhereWithAggregatesInput = {
    AND?: Prisma.BrandScalarWhereWithAggregatesInput | Prisma.BrandScalarWhereWithAggregatesInput[];
    OR?: Prisma.BrandScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BrandScalarWhereWithAggregatesInput | Prisma.BrandScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Brand"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"Brand"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Brand"> | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierWithAggregatesFilter<"Brand"> | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalWithAggregatesFilter<"Brand"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.StringNullableWithAggregatesFilter<"Brand"> | string | null;
    logoUrl_id?: Prisma.StringNullableWithAggregatesFilter<"Brand"> | string | null;
    followersCount?: Prisma.IntWithAggregatesFilter<"Brand"> | number;
    viewedTimes?: Prisma.BigIntWithAggregatesFilter<"Brand"> | bigint | number;
    isPromoted?: Prisma.BoolWithAggregatesFilter<"Brand"> | boolean;
    isActive?: Prisma.BoolWithAggregatesFilter<"Brand"> | boolean;
    balance?: Prisma.DecimalWithAggregatesFilter<"Brand"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.JsonNullableWithAggregatesFilter<"Brand">;
    address?: Prisma.StringWithAggregatesFilter<"Brand"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Brand"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Brand"> | Date | string;
};
export type BrandCreateInput = {
    id?: string;
    name: string;
    verificationStatus?: $Enums.BrandVerificationTier;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: string | null;
    logoUrl_id?: string | null;
    followersCount?: number;
    viewedTimes?: bigint | number;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBrandInput;
    documents?: Prisma.BrandDocumentCreateNestedManyWithoutBrandInput;
    socialLinks?: Prisma.BrandSocialLinkCreateNestedManyWithoutBrandInput;
    followers?: Prisma.BrandFollowerCreateNestedManyWithoutBrandInput;
    categories?: Prisma.CategoryCreateNestedManyWithoutBrandInput;
    products?: Prisma.ProductCreateNestedManyWithoutBrandInput;
    orderBrands?: Prisma.OrderBrandCreateNestedManyWithoutBrandInput;
};
export type BrandUncheckedCreateInput = {
    id?: string;
    userId: string;
    name: string;
    verificationStatus?: $Enums.BrandVerificationTier;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: string | null;
    logoUrl_id?: string | null;
    followersCount?: number;
    viewedTimes?: bigint | number;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.BrandDocumentUncheckedCreateNestedManyWithoutBrandInput;
    socialLinks?: Prisma.BrandSocialLinkUncheckedCreateNestedManyWithoutBrandInput;
    followers?: Prisma.BrandFollowerUncheckedCreateNestedManyWithoutBrandInput;
    categories?: Prisma.CategoryUncheckedCreateNestedManyWithoutBrandInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBrandInput;
    orderBrands?: Prisma.OrderBrandUncheckedCreateNestedManyWithoutBrandInput;
};
export type BrandUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBrandNestedInput;
    documents?: Prisma.BrandDocumentUpdateManyWithoutBrandNestedInput;
    socialLinks?: Prisma.BrandSocialLinkUpdateManyWithoutBrandNestedInput;
    followers?: Prisma.BrandFollowerUpdateManyWithoutBrandNestedInput;
    categories?: Prisma.CategoryUpdateManyWithoutBrandNestedInput;
    products?: Prisma.ProductUpdateManyWithoutBrandNestedInput;
    orderBrands?: Prisma.OrderBrandUpdateManyWithoutBrandNestedInput;
};
export type BrandUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.BrandDocumentUncheckedUpdateManyWithoutBrandNestedInput;
    socialLinks?: Prisma.BrandSocialLinkUncheckedUpdateManyWithoutBrandNestedInput;
    followers?: Prisma.BrandFollowerUncheckedUpdateManyWithoutBrandNestedInput;
    categories?: Prisma.CategoryUncheckedUpdateManyWithoutBrandNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBrandNestedInput;
    orderBrands?: Prisma.OrderBrandUncheckedUpdateManyWithoutBrandNestedInput;
};
export type BrandCreateManyInput = {
    id?: string;
    userId: string;
    name: string;
    verificationStatus?: $Enums.BrandVerificationTier;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: string | null;
    logoUrl_id?: string | null;
    followersCount?: number;
    viewedTimes?: bigint | number;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BrandUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandNullableScalarRelationFilter = {
    is?: Prisma.BrandWhereInput | null;
    isNot?: Prisma.BrandWhereInput | null;
};
export type BrandCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    logoUrl_id?: Prisma.SortOrder;
    followersCount?: Prisma.SortOrder;
    viewedTimes?: Prisma.SortOrder;
    isPromoted?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    paymentDetails?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BrandAvgOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
    followersCount?: Prisma.SortOrder;
    viewedTimes?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
};
export type BrandMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    logoUrl_id?: Prisma.SortOrder;
    followersCount?: Prisma.SortOrder;
    viewedTimes?: Prisma.SortOrder;
    isPromoted?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BrandMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    logoUrl_id?: Prisma.SortOrder;
    followersCount?: Prisma.SortOrder;
    viewedTimes?: Prisma.SortOrder;
    isPromoted?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BrandSumOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
    followersCount?: Prisma.SortOrder;
    viewedTimes?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
};
export type BrandScalarRelationFilter = {
    is?: Prisma.BrandWhereInput;
    isNot?: Prisma.BrandWhereInput;
};
export type BrandCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutUserInput, Prisma.BrandUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutUserInput;
    connect?: Prisma.BrandWhereUniqueInput;
};
export type BrandUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutUserInput, Prisma.BrandUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutUserInput;
    connect?: Prisma.BrandWhereUniqueInput;
};
export type BrandUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutUserInput, Prisma.BrandUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutUserInput;
    upsert?: Prisma.BrandUpsertWithoutUserInput;
    disconnect?: Prisma.BrandWhereInput | boolean;
    delete?: Prisma.BrandWhereInput | boolean;
    connect?: Prisma.BrandWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BrandUpdateToOneWithWhereWithoutUserInput, Prisma.BrandUpdateWithoutUserInput>, Prisma.BrandUncheckedUpdateWithoutUserInput>;
};
export type BrandUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutUserInput, Prisma.BrandUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutUserInput;
    upsert?: Prisma.BrandUpsertWithoutUserInput;
    disconnect?: Prisma.BrandWhereInput | boolean;
    delete?: Prisma.BrandWhereInput | boolean;
    connect?: Prisma.BrandWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BrandUpdateToOneWithWhereWithoutUserInput, Prisma.BrandUpdateWithoutUserInput>, Prisma.BrandUncheckedUpdateWithoutUserInput>;
};
export type EnumBrandVerificationTierFieldUpdateOperationsInput = {
    set?: $Enums.BrandVerificationTier;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type BrandCreateNestedOneWithoutDocumentsInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutDocumentsInput, Prisma.BrandUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutDocumentsInput;
    connect?: Prisma.BrandWhereUniqueInput;
};
export type BrandUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutDocumentsInput, Prisma.BrandUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutDocumentsInput;
    upsert?: Prisma.BrandUpsertWithoutDocumentsInput;
    connect?: Prisma.BrandWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BrandUpdateToOneWithWhereWithoutDocumentsInput, Prisma.BrandUpdateWithoutDocumentsInput>, Prisma.BrandUncheckedUpdateWithoutDocumentsInput>;
};
export type BrandCreateNestedOneWithoutSocialLinksInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutSocialLinksInput, Prisma.BrandUncheckedCreateWithoutSocialLinksInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutSocialLinksInput;
    connect?: Prisma.BrandWhereUniqueInput;
};
export type BrandUpdateOneRequiredWithoutSocialLinksNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutSocialLinksInput, Prisma.BrandUncheckedCreateWithoutSocialLinksInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutSocialLinksInput;
    upsert?: Prisma.BrandUpsertWithoutSocialLinksInput;
    connect?: Prisma.BrandWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BrandUpdateToOneWithWhereWithoutSocialLinksInput, Prisma.BrandUpdateWithoutSocialLinksInput>, Prisma.BrandUncheckedUpdateWithoutSocialLinksInput>;
};
export type BrandCreateNestedOneWithoutFollowersInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutFollowersInput, Prisma.BrandUncheckedCreateWithoutFollowersInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutFollowersInput;
    connect?: Prisma.BrandWhereUniqueInput;
};
export type BrandUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutFollowersInput, Prisma.BrandUncheckedCreateWithoutFollowersInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutFollowersInput;
    upsert?: Prisma.BrandUpsertWithoutFollowersInput;
    connect?: Prisma.BrandWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BrandUpdateToOneWithWhereWithoutFollowersInput, Prisma.BrandUpdateWithoutFollowersInput>, Prisma.BrandUncheckedUpdateWithoutFollowersInput>;
};
export type BrandCreateNestedOneWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutProductsInput, Prisma.BrandUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutProductsInput;
    connect?: Prisma.BrandWhereUniqueInput;
};
export type BrandUpdateOneRequiredWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutProductsInput, Prisma.BrandUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutProductsInput;
    upsert?: Prisma.BrandUpsertWithoutProductsInput;
    connect?: Prisma.BrandWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BrandUpdateToOneWithWhereWithoutProductsInput, Prisma.BrandUpdateWithoutProductsInput>, Prisma.BrandUncheckedUpdateWithoutProductsInput>;
};
export type BrandCreateNestedOneWithoutCategoriesInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutCategoriesInput, Prisma.BrandUncheckedCreateWithoutCategoriesInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutCategoriesInput;
    connect?: Prisma.BrandWhereUniqueInput;
};
export type BrandUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutCategoriesInput, Prisma.BrandUncheckedCreateWithoutCategoriesInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutCategoriesInput;
    upsert?: Prisma.BrandUpsertWithoutCategoriesInput;
    connect?: Prisma.BrandWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BrandUpdateToOneWithWhereWithoutCategoriesInput, Prisma.BrandUpdateWithoutCategoriesInput>, Prisma.BrandUncheckedUpdateWithoutCategoriesInput>;
};
export type BrandCreateNestedOneWithoutOrderBrandsInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutOrderBrandsInput, Prisma.BrandUncheckedCreateWithoutOrderBrandsInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutOrderBrandsInput;
    connect?: Prisma.BrandWhereUniqueInput;
};
export type BrandUpdateOneRequiredWithoutOrderBrandsNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutOrderBrandsInput, Prisma.BrandUncheckedCreateWithoutOrderBrandsInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutOrderBrandsInput;
    upsert?: Prisma.BrandUpsertWithoutOrderBrandsInput;
    connect?: Prisma.BrandWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BrandUpdateToOneWithWhereWithoutOrderBrandsInput, Prisma.BrandUpdateWithoutOrderBrandsInput>, Prisma.BrandUncheckedUpdateWithoutOrderBrandsInput>;
};
export type BrandCreateWithoutUserInput = {
    id?: string;
    name: string;
    verificationStatus?: $Enums.BrandVerificationTier;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: string | null;
    logoUrl_id?: string | null;
    followersCount?: number;
    viewedTimes?: bigint | number;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.BrandDocumentCreateNestedManyWithoutBrandInput;
    socialLinks?: Prisma.BrandSocialLinkCreateNestedManyWithoutBrandInput;
    followers?: Prisma.BrandFollowerCreateNestedManyWithoutBrandInput;
    categories?: Prisma.CategoryCreateNestedManyWithoutBrandInput;
    products?: Prisma.ProductCreateNestedManyWithoutBrandInput;
    orderBrands?: Prisma.OrderBrandCreateNestedManyWithoutBrandInput;
};
export type BrandUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    verificationStatus?: $Enums.BrandVerificationTier;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: string | null;
    logoUrl_id?: string | null;
    followersCount?: number;
    viewedTimes?: bigint | number;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.BrandDocumentUncheckedCreateNestedManyWithoutBrandInput;
    socialLinks?: Prisma.BrandSocialLinkUncheckedCreateNestedManyWithoutBrandInput;
    followers?: Prisma.BrandFollowerUncheckedCreateNestedManyWithoutBrandInput;
    categories?: Prisma.CategoryUncheckedCreateNestedManyWithoutBrandInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBrandInput;
    orderBrands?: Prisma.OrderBrandUncheckedCreateNestedManyWithoutBrandInput;
};
export type BrandCreateOrConnectWithoutUserInput = {
    where: Prisma.BrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandCreateWithoutUserInput, Prisma.BrandUncheckedCreateWithoutUserInput>;
};
export type BrandUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.BrandUpdateWithoutUserInput, Prisma.BrandUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.BrandCreateWithoutUserInput, Prisma.BrandUncheckedCreateWithoutUserInput>;
    where?: Prisma.BrandWhereInput;
};
export type BrandUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.BrandWhereInput;
    data: Prisma.XOR<Prisma.BrandUpdateWithoutUserInput, Prisma.BrandUncheckedUpdateWithoutUserInput>;
};
export type BrandUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.BrandDocumentUpdateManyWithoutBrandNestedInput;
    socialLinks?: Prisma.BrandSocialLinkUpdateManyWithoutBrandNestedInput;
    followers?: Prisma.BrandFollowerUpdateManyWithoutBrandNestedInput;
    categories?: Prisma.CategoryUpdateManyWithoutBrandNestedInput;
    products?: Prisma.ProductUpdateManyWithoutBrandNestedInput;
    orderBrands?: Prisma.OrderBrandUpdateManyWithoutBrandNestedInput;
};
export type BrandUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.BrandDocumentUncheckedUpdateManyWithoutBrandNestedInput;
    socialLinks?: Prisma.BrandSocialLinkUncheckedUpdateManyWithoutBrandNestedInput;
    followers?: Prisma.BrandFollowerUncheckedUpdateManyWithoutBrandNestedInput;
    categories?: Prisma.CategoryUncheckedUpdateManyWithoutBrandNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBrandNestedInput;
    orderBrands?: Prisma.OrderBrandUncheckedUpdateManyWithoutBrandNestedInput;
};
export type BrandCreateWithoutDocumentsInput = {
    id?: string;
    name: string;
    verificationStatus?: $Enums.BrandVerificationTier;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: string | null;
    logoUrl_id?: string | null;
    followersCount?: number;
    viewedTimes?: bigint | number;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBrandInput;
    socialLinks?: Prisma.BrandSocialLinkCreateNestedManyWithoutBrandInput;
    followers?: Prisma.BrandFollowerCreateNestedManyWithoutBrandInput;
    categories?: Prisma.CategoryCreateNestedManyWithoutBrandInput;
    products?: Prisma.ProductCreateNestedManyWithoutBrandInput;
    orderBrands?: Prisma.OrderBrandCreateNestedManyWithoutBrandInput;
};
export type BrandUncheckedCreateWithoutDocumentsInput = {
    id?: string;
    userId: string;
    name: string;
    verificationStatus?: $Enums.BrandVerificationTier;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: string | null;
    logoUrl_id?: string | null;
    followersCount?: number;
    viewedTimes?: bigint | number;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    socialLinks?: Prisma.BrandSocialLinkUncheckedCreateNestedManyWithoutBrandInput;
    followers?: Prisma.BrandFollowerUncheckedCreateNestedManyWithoutBrandInput;
    categories?: Prisma.CategoryUncheckedCreateNestedManyWithoutBrandInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBrandInput;
    orderBrands?: Prisma.OrderBrandUncheckedCreateNestedManyWithoutBrandInput;
};
export type BrandCreateOrConnectWithoutDocumentsInput = {
    where: Prisma.BrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandCreateWithoutDocumentsInput, Prisma.BrandUncheckedCreateWithoutDocumentsInput>;
};
export type BrandUpsertWithoutDocumentsInput = {
    update: Prisma.XOR<Prisma.BrandUpdateWithoutDocumentsInput, Prisma.BrandUncheckedUpdateWithoutDocumentsInput>;
    create: Prisma.XOR<Prisma.BrandCreateWithoutDocumentsInput, Prisma.BrandUncheckedCreateWithoutDocumentsInput>;
    where?: Prisma.BrandWhereInput;
};
export type BrandUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: Prisma.BrandWhereInput;
    data: Prisma.XOR<Prisma.BrandUpdateWithoutDocumentsInput, Prisma.BrandUncheckedUpdateWithoutDocumentsInput>;
};
export type BrandUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBrandNestedInput;
    socialLinks?: Prisma.BrandSocialLinkUpdateManyWithoutBrandNestedInput;
    followers?: Prisma.BrandFollowerUpdateManyWithoutBrandNestedInput;
    categories?: Prisma.CategoryUpdateManyWithoutBrandNestedInput;
    products?: Prisma.ProductUpdateManyWithoutBrandNestedInput;
    orderBrands?: Prisma.OrderBrandUpdateManyWithoutBrandNestedInput;
};
export type BrandUncheckedUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    socialLinks?: Prisma.BrandSocialLinkUncheckedUpdateManyWithoutBrandNestedInput;
    followers?: Prisma.BrandFollowerUncheckedUpdateManyWithoutBrandNestedInput;
    categories?: Prisma.CategoryUncheckedUpdateManyWithoutBrandNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBrandNestedInput;
    orderBrands?: Prisma.OrderBrandUncheckedUpdateManyWithoutBrandNestedInput;
};
export type BrandCreateWithoutSocialLinksInput = {
    id?: string;
    name: string;
    verificationStatus?: $Enums.BrandVerificationTier;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: string | null;
    logoUrl_id?: string | null;
    followersCount?: number;
    viewedTimes?: bigint | number;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBrandInput;
    documents?: Prisma.BrandDocumentCreateNestedManyWithoutBrandInput;
    followers?: Prisma.BrandFollowerCreateNestedManyWithoutBrandInput;
    categories?: Prisma.CategoryCreateNestedManyWithoutBrandInput;
    products?: Prisma.ProductCreateNestedManyWithoutBrandInput;
    orderBrands?: Prisma.OrderBrandCreateNestedManyWithoutBrandInput;
};
export type BrandUncheckedCreateWithoutSocialLinksInput = {
    id?: string;
    userId: string;
    name: string;
    verificationStatus?: $Enums.BrandVerificationTier;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: string | null;
    logoUrl_id?: string | null;
    followersCount?: number;
    viewedTimes?: bigint | number;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.BrandDocumentUncheckedCreateNestedManyWithoutBrandInput;
    followers?: Prisma.BrandFollowerUncheckedCreateNestedManyWithoutBrandInput;
    categories?: Prisma.CategoryUncheckedCreateNestedManyWithoutBrandInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBrandInput;
    orderBrands?: Prisma.OrderBrandUncheckedCreateNestedManyWithoutBrandInput;
};
export type BrandCreateOrConnectWithoutSocialLinksInput = {
    where: Prisma.BrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandCreateWithoutSocialLinksInput, Prisma.BrandUncheckedCreateWithoutSocialLinksInput>;
};
export type BrandUpsertWithoutSocialLinksInput = {
    update: Prisma.XOR<Prisma.BrandUpdateWithoutSocialLinksInput, Prisma.BrandUncheckedUpdateWithoutSocialLinksInput>;
    create: Prisma.XOR<Prisma.BrandCreateWithoutSocialLinksInput, Prisma.BrandUncheckedCreateWithoutSocialLinksInput>;
    where?: Prisma.BrandWhereInput;
};
export type BrandUpdateToOneWithWhereWithoutSocialLinksInput = {
    where?: Prisma.BrandWhereInput;
    data: Prisma.XOR<Prisma.BrandUpdateWithoutSocialLinksInput, Prisma.BrandUncheckedUpdateWithoutSocialLinksInput>;
};
export type BrandUpdateWithoutSocialLinksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBrandNestedInput;
    documents?: Prisma.BrandDocumentUpdateManyWithoutBrandNestedInput;
    followers?: Prisma.BrandFollowerUpdateManyWithoutBrandNestedInput;
    categories?: Prisma.CategoryUpdateManyWithoutBrandNestedInput;
    products?: Prisma.ProductUpdateManyWithoutBrandNestedInput;
    orderBrands?: Prisma.OrderBrandUpdateManyWithoutBrandNestedInput;
};
export type BrandUncheckedUpdateWithoutSocialLinksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.BrandDocumentUncheckedUpdateManyWithoutBrandNestedInput;
    followers?: Prisma.BrandFollowerUncheckedUpdateManyWithoutBrandNestedInput;
    categories?: Prisma.CategoryUncheckedUpdateManyWithoutBrandNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBrandNestedInput;
    orderBrands?: Prisma.OrderBrandUncheckedUpdateManyWithoutBrandNestedInput;
};
export type BrandCreateWithoutFollowersInput = {
    id?: string;
    name: string;
    verificationStatus?: $Enums.BrandVerificationTier;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: string | null;
    logoUrl_id?: string | null;
    followersCount?: number;
    viewedTimes?: bigint | number;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBrandInput;
    documents?: Prisma.BrandDocumentCreateNestedManyWithoutBrandInput;
    socialLinks?: Prisma.BrandSocialLinkCreateNestedManyWithoutBrandInput;
    categories?: Prisma.CategoryCreateNestedManyWithoutBrandInput;
    products?: Prisma.ProductCreateNestedManyWithoutBrandInput;
    orderBrands?: Prisma.OrderBrandCreateNestedManyWithoutBrandInput;
};
export type BrandUncheckedCreateWithoutFollowersInput = {
    id?: string;
    userId: string;
    name: string;
    verificationStatus?: $Enums.BrandVerificationTier;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: string | null;
    logoUrl_id?: string | null;
    followersCount?: number;
    viewedTimes?: bigint | number;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.BrandDocumentUncheckedCreateNestedManyWithoutBrandInput;
    socialLinks?: Prisma.BrandSocialLinkUncheckedCreateNestedManyWithoutBrandInput;
    categories?: Prisma.CategoryUncheckedCreateNestedManyWithoutBrandInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBrandInput;
    orderBrands?: Prisma.OrderBrandUncheckedCreateNestedManyWithoutBrandInput;
};
export type BrandCreateOrConnectWithoutFollowersInput = {
    where: Prisma.BrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandCreateWithoutFollowersInput, Prisma.BrandUncheckedCreateWithoutFollowersInput>;
};
export type BrandUpsertWithoutFollowersInput = {
    update: Prisma.XOR<Prisma.BrandUpdateWithoutFollowersInput, Prisma.BrandUncheckedUpdateWithoutFollowersInput>;
    create: Prisma.XOR<Prisma.BrandCreateWithoutFollowersInput, Prisma.BrandUncheckedCreateWithoutFollowersInput>;
    where?: Prisma.BrandWhereInput;
};
export type BrandUpdateToOneWithWhereWithoutFollowersInput = {
    where?: Prisma.BrandWhereInput;
    data: Prisma.XOR<Prisma.BrandUpdateWithoutFollowersInput, Prisma.BrandUncheckedUpdateWithoutFollowersInput>;
};
export type BrandUpdateWithoutFollowersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBrandNestedInput;
    documents?: Prisma.BrandDocumentUpdateManyWithoutBrandNestedInput;
    socialLinks?: Prisma.BrandSocialLinkUpdateManyWithoutBrandNestedInput;
    categories?: Prisma.CategoryUpdateManyWithoutBrandNestedInput;
    products?: Prisma.ProductUpdateManyWithoutBrandNestedInput;
    orderBrands?: Prisma.OrderBrandUpdateManyWithoutBrandNestedInput;
};
export type BrandUncheckedUpdateWithoutFollowersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.BrandDocumentUncheckedUpdateManyWithoutBrandNestedInput;
    socialLinks?: Prisma.BrandSocialLinkUncheckedUpdateManyWithoutBrandNestedInput;
    categories?: Prisma.CategoryUncheckedUpdateManyWithoutBrandNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBrandNestedInput;
    orderBrands?: Prisma.OrderBrandUncheckedUpdateManyWithoutBrandNestedInput;
};
export type BrandCreateWithoutProductsInput = {
    id?: string;
    name: string;
    verificationStatus?: $Enums.BrandVerificationTier;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: string | null;
    logoUrl_id?: string | null;
    followersCount?: number;
    viewedTimes?: bigint | number;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBrandInput;
    documents?: Prisma.BrandDocumentCreateNestedManyWithoutBrandInput;
    socialLinks?: Prisma.BrandSocialLinkCreateNestedManyWithoutBrandInput;
    followers?: Prisma.BrandFollowerCreateNestedManyWithoutBrandInput;
    categories?: Prisma.CategoryCreateNestedManyWithoutBrandInput;
    orderBrands?: Prisma.OrderBrandCreateNestedManyWithoutBrandInput;
};
export type BrandUncheckedCreateWithoutProductsInput = {
    id?: string;
    userId: string;
    name: string;
    verificationStatus?: $Enums.BrandVerificationTier;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: string | null;
    logoUrl_id?: string | null;
    followersCount?: number;
    viewedTimes?: bigint | number;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.BrandDocumentUncheckedCreateNestedManyWithoutBrandInput;
    socialLinks?: Prisma.BrandSocialLinkUncheckedCreateNestedManyWithoutBrandInput;
    followers?: Prisma.BrandFollowerUncheckedCreateNestedManyWithoutBrandInput;
    categories?: Prisma.CategoryUncheckedCreateNestedManyWithoutBrandInput;
    orderBrands?: Prisma.OrderBrandUncheckedCreateNestedManyWithoutBrandInput;
};
export type BrandCreateOrConnectWithoutProductsInput = {
    where: Prisma.BrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandCreateWithoutProductsInput, Prisma.BrandUncheckedCreateWithoutProductsInput>;
};
export type BrandUpsertWithoutProductsInput = {
    update: Prisma.XOR<Prisma.BrandUpdateWithoutProductsInput, Prisma.BrandUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.BrandCreateWithoutProductsInput, Prisma.BrandUncheckedCreateWithoutProductsInput>;
    where?: Prisma.BrandWhereInput;
};
export type BrandUpdateToOneWithWhereWithoutProductsInput = {
    where?: Prisma.BrandWhereInput;
    data: Prisma.XOR<Prisma.BrandUpdateWithoutProductsInput, Prisma.BrandUncheckedUpdateWithoutProductsInput>;
};
export type BrandUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBrandNestedInput;
    documents?: Prisma.BrandDocumentUpdateManyWithoutBrandNestedInput;
    socialLinks?: Prisma.BrandSocialLinkUpdateManyWithoutBrandNestedInput;
    followers?: Prisma.BrandFollowerUpdateManyWithoutBrandNestedInput;
    categories?: Prisma.CategoryUpdateManyWithoutBrandNestedInput;
    orderBrands?: Prisma.OrderBrandUpdateManyWithoutBrandNestedInput;
};
export type BrandUncheckedUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.BrandDocumentUncheckedUpdateManyWithoutBrandNestedInput;
    socialLinks?: Prisma.BrandSocialLinkUncheckedUpdateManyWithoutBrandNestedInput;
    followers?: Prisma.BrandFollowerUncheckedUpdateManyWithoutBrandNestedInput;
    categories?: Prisma.CategoryUncheckedUpdateManyWithoutBrandNestedInput;
    orderBrands?: Prisma.OrderBrandUncheckedUpdateManyWithoutBrandNestedInput;
};
export type BrandCreateWithoutCategoriesInput = {
    id?: string;
    name: string;
    verificationStatus?: $Enums.BrandVerificationTier;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: string | null;
    logoUrl_id?: string | null;
    followersCount?: number;
    viewedTimes?: bigint | number;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBrandInput;
    documents?: Prisma.BrandDocumentCreateNestedManyWithoutBrandInput;
    socialLinks?: Prisma.BrandSocialLinkCreateNestedManyWithoutBrandInput;
    followers?: Prisma.BrandFollowerCreateNestedManyWithoutBrandInput;
    products?: Prisma.ProductCreateNestedManyWithoutBrandInput;
    orderBrands?: Prisma.OrderBrandCreateNestedManyWithoutBrandInput;
};
export type BrandUncheckedCreateWithoutCategoriesInput = {
    id?: string;
    userId: string;
    name: string;
    verificationStatus?: $Enums.BrandVerificationTier;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: string | null;
    logoUrl_id?: string | null;
    followersCount?: number;
    viewedTimes?: bigint | number;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.BrandDocumentUncheckedCreateNestedManyWithoutBrandInput;
    socialLinks?: Prisma.BrandSocialLinkUncheckedCreateNestedManyWithoutBrandInput;
    followers?: Prisma.BrandFollowerUncheckedCreateNestedManyWithoutBrandInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBrandInput;
    orderBrands?: Prisma.OrderBrandUncheckedCreateNestedManyWithoutBrandInput;
};
export type BrandCreateOrConnectWithoutCategoriesInput = {
    where: Prisma.BrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandCreateWithoutCategoriesInput, Prisma.BrandUncheckedCreateWithoutCategoriesInput>;
};
export type BrandUpsertWithoutCategoriesInput = {
    update: Prisma.XOR<Prisma.BrandUpdateWithoutCategoriesInput, Prisma.BrandUncheckedUpdateWithoutCategoriesInput>;
    create: Prisma.XOR<Prisma.BrandCreateWithoutCategoriesInput, Prisma.BrandUncheckedCreateWithoutCategoriesInput>;
    where?: Prisma.BrandWhereInput;
};
export type BrandUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: Prisma.BrandWhereInput;
    data: Prisma.XOR<Prisma.BrandUpdateWithoutCategoriesInput, Prisma.BrandUncheckedUpdateWithoutCategoriesInput>;
};
export type BrandUpdateWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBrandNestedInput;
    documents?: Prisma.BrandDocumentUpdateManyWithoutBrandNestedInput;
    socialLinks?: Prisma.BrandSocialLinkUpdateManyWithoutBrandNestedInput;
    followers?: Prisma.BrandFollowerUpdateManyWithoutBrandNestedInput;
    products?: Prisma.ProductUpdateManyWithoutBrandNestedInput;
    orderBrands?: Prisma.OrderBrandUpdateManyWithoutBrandNestedInput;
};
export type BrandUncheckedUpdateWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.BrandDocumentUncheckedUpdateManyWithoutBrandNestedInput;
    socialLinks?: Prisma.BrandSocialLinkUncheckedUpdateManyWithoutBrandNestedInput;
    followers?: Prisma.BrandFollowerUncheckedUpdateManyWithoutBrandNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBrandNestedInput;
    orderBrands?: Prisma.OrderBrandUncheckedUpdateManyWithoutBrandNestedInput;
};
export type BrandCreateWithoutOrderBrandsInput = {
    id?: string;
    name: string;
    verificationStatus?: $Enums.BrandVerificationTier;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: string | null;
    logoUrl_id?: string | null;
    followersCount?: number;
    viewedTimes?: bigint | number;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBrandInput;
    documents?: Prisma.BrandDocumentCreateNestedManyWithoutBrandInput;
    socialLinks?: Prisma.BrandSocialLinkCreateNestedManyWithoutBrandInput;
    followers?: Prisma.BrandFollowerCreateNestedManyWithoutBrandInput;
    categories?: Prisma.CategoryCreateNestedManyWithoutBrandInput;
    products?: Prisma.ProductCreateNestedManyWithoutBrandInput;
};
export type BrandUncheckedCreateWithoutOrderBrandsInput = {
    id?: string;
    userId: string;
    name: string;
    verificationStatus?: $Enums.BrandVerificationTier;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: string | null;
    logoUrl_id?: string | null;
    followersCount?: number;
    viewedTimes?: bigint | number;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.BrandDocumentUncheckedCreateNestedManyWithoutBrandInput;
    socialLinks?: Prisma.BrandSocialLinkUncheckedCreateNestedManyWithoutBrandInput;
    followers?: Prisma.BrandFollowerUncheckedCreateNestedManyWithoutBrandInput;
    categories?: Prisma.CategoryUncheckedCreateNestedManyWithoutBrandInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBrandInput;
};
export type BrandCreateOrConnectWithoutOrderBrandsInput = {
    where: Prisma.BrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandCreateWithoutOrderBrandsInput, Prisma.BrandUncheckedCreateWithoutOrderBrandsInput>;
};
export type BrandUpsertWithoutOrderBrandsInput = {
    update: Prisma.XOR<Prisma.BrandUpdateWithoutOrderBrandsInput, Prisma.BrandUncheckedUpdateWithoutOrderBrandsInput>;
    create: Prisma.XOR<Prisma.BrandCreateWithoutOrderBrandsInput, Prisma.BrandUncheckedCreateWithoutOrderBrandsInput>;
    where?: Prisma.BrandWhereInput;
};
export type BrandUpdateToOneWithWhereWithoutOrderBrandsInput = {
    where?: Prisma.BrandWhereInput;
    data: Prisma.XOR<Prisma.BrandUpdateWithoutOrderBrandsInput, Prisma.BrandUncheckedUpdateWithoutOrderBrandsInput>;
};
export type BrandUpdateWithoutOrderBrandsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBrandNestedInput;
    documents?: Prisma.BrandDocumentUpdateManyWithoutBrandNestedInput;
    socialLinks?: Prisma.BrandSocialLinkUpdateManyWithoutBrandNestedInput;
    followers?: Prisma.BrandFollowerUpdateManyWithoutBrandNestedInput;
    categories?: Prisma.CategoryUpdateManyWithoutBrandNestedInput;
    products?: Prisma.ProductUpdateManyWithoutBrandNestedInput;
};
export type BrandUncheckedUpdateWithoutOrderBrandsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.EnumBrandVerificationTierFieldUpdateOperationsInput | $Enums.BrandVerificationTier;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    followersCount?: Prisma.IntFieldUpdateOperationsInput | number;
    viewedTimes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    isPromoted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDetails?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.BrandDocumentUncheckedUpdateManyWithoutBrandNestedInput;
    socialLinks?: Prisma.BrandSocialLinkUncheckedUpdateManyWithoutBrandNestedInput;
    followers?: Prisma.BrandFollowerUncheckedUpdateManyWithoutBrandNestedInput;
    categories?: Prisma.CategoryUncheckedUpdateManyWithoutBrandNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBrandNestedInput;
};
/**
 * Count Type BrandCountOutputType
 */
export type BrandCountOutputType = {
    documents: number;
    socialLinks: number;
    followers: number;
    categories: number;
    products: number;
    orderBrands: number;
};
export type BrandCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    documents?: boolean | BrandCountOutputTypeCountDocumentsArgs;
    socialLinks?: boolean | BrandCountOutputTypeCountSocialLinksArgs;
    followers?: boolean | BrandCountOutputTypeCountFollowersArgs;
    categories?: boolean | BrandCountOutputTypeCountCategoriesArgs;
    products?: boolean | BrandCountOutputTypeCountProductsArgs;
    orderBrands?: boolean | BrandCountOutputTypeCountOrderBrandsArgs;
};
/**
 * BrandCountOutputType without action
 */
export type BrandCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: Prisma.BrandCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * BrandCountOutputType without action
 */
export type BrandCountOutputTypeCountDocumentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandDocumentWhereInput;
};
/**
 * BrandCountOutputType without action
 */
export type BrandCountOutputTypeCountSocialLinksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandSocialLinkWhereInput;
};
/**
 * BrandCountOutputType without action
 */
export type BrandCountOutputTypeCountFollowersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandFollowerWhereInput;
};
/**
 * BrandCountOutputType without action
 */
export type BrandCountOutputTypeCountCategoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoryWhereInput;
};
/**
 * BrandCountOutputType without action
 */
export type BrandCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
/**
 * BrandCountOutputType without action
 */
export type BrandCountOutputTypeCountOrderBrandsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderBrandWhereInput;
};
export type BrandSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    verificationStatus?: boolean;
    rating?: boolean;
    logoUrl?: boolean;
    logoUrl_id?: boolean;
    followersCount?: boolean;
    viewedTimes?: boolean;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: boolean;
    paymentDetails?: boolean;
    address?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    documents?: boolean | Prisma.Brand$documentsArgs<ExtArgs>;
    socialLinks?: boolean | Prisma.Brand$socialLinksArgs<ExtArgs>;
    followers?: boolean | Prisma.Brand$followersArgs<ExtArgs>;
    categories?: boolean | Prisma.Brand$categoriesArgs<ExtArgs>;
    products?: boolean | Prisma.Brand$productsArgs<ExtArgs>;
    orderBrands?: boolean | Prisma.Brand$orderBrandsArgs<ExtArgs>;
    _count?: boolean | Prisma.BrandCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brand"]>;
export type BrandSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    verificationStatus?: boolean;
    rating?: boolean;
    logoUrl?: boolean;
    logoUrl_id?: boolean;
    followersCount?: boolean;
    viewedTimes?: boolean;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: boolean;
    paymentDetails?: boolean;
    address?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brand"]>;
export type BrandSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    verificationStatus?: boolean;
    rating?: boolean;
    logoUrl?: boolean;
    logoUrl_id?: boolean;
    followersCount?: boolean;
    viewedTimes?: boolean;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: boolean;
    paymentDetails?: boolean;
    address?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brand"]>;
export type BrandSelectScalar = {
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    verificationStatus?: boolean;
    rating?: boolean;
    logoUrl?: boolean;
    logoUrl_id?: boolean;
    followersCount?: boolean;
    viewedTimes?: boolean;
    isPromoted?: boolean;
    isActive?: boolean;
    balance?: boolean;
    paymentDetails?: boolean;
    address?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BrandOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "name" | "verificationStatus" | "rating" | "logoUrl" | "logoUrl_id" | "followersCount" | "viewedTimes" | "isPromoted" | "isActive" | "balance" | "paymentDetails" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["brand"]>;
export type BrandInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    documents?: boolean | Prisma.Brand$documentsArgs<ExtArgs>;
    socialLinks?: boolean | Prisma.Brand$socialLinksArgs<ExtArgs>;
    followers?: boolean | Prisma.Brand$followersArgs<ExtArgs>;
    categories?: boolean | Prisma.Brand$categoriesArgs<ExtArgs>;
    products?: boolean | Prisma.Brand$productsArgs<ExtArgs>;
    orderBrands?: boolean | Prisma.Brand$orderBrandsArgs<ExtArgs>;
    _count?: boolean | Prisma.BrandCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BrandIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BrandIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BrandPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Brand";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        documents: Prisma.$BrandDocumentPayload<ExtArgs>[];
        socialLinks: Prisma.$BrandSocialLinkPayload<ExtArgs>[];
        followers: Prisma.$BrandFollowerPayload<ExtArgs>[];
        categories: Prisma.$CategoryPayload<ExtArgs>[];
        products: Prisma.$ProductPayload<ExtArgs>[];
        orderBrands: Prisma.$OrderBrandPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        name: string;
        verificationStatus: $Enums.BrandVerificationTier;
        rating: runtime.Decimal;
        logoUrl: string | null;
        logoUrl_id: string | null;
        followersCount: number;
        viewedTimes: bigint;
        isPromoted: boolean;
        isActive: boolean;
        balance: runtime.Decimal;
        paymentDetails: runtime.JsonValue | null;
        /**
         * *
         *    * {
         *    * "method": "bank_transfer",
         *    * "verified": false,
         *    * "updatedAt": "2026-07-19T10:00:00Z",
         *    * "details": {
         *    * "bankIban": "DE89370400440532013000",
         *    * "bankBic": "COBADEFFXXX",
         *    * "accountHolderName": "Acme Brand LLC"
         *    * }
         *    * details will be flexiable based on payment gateway
         *    * }
         */
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["brand"]>;
    composites: {};
};
export type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BrandPayload, S>;
export type BrandCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BrandCountAggregateInputType | true;
};
export interface BrandDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Brand'];
        meta: {
            name: 'Brand';
        };
    };
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: Prisma.SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: Prisma.SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     *
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BrandFindManyArgs>(args?: Prisma.SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     *
     */
    create<T extends BrandCreateArgs>(args: Prisma.SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BrandCreateManyArgs>(args?: Prisma.SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     *
     */
    delete<T extends BrandDeleteArgs>(args: Prisma.SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BrandUpdateArgs>(args: Prisma.SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: Prisma.SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BrandUpdateManyArgs>(args: Prisma.SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BrandUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: Prisma.SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(args?: Prisma.Subset<T, BrandCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BrandCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandAggregateArgs>(args: Prisma.Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>;
    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends BrandGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BrandGroupByArgs['orderBy'];
    } : {
        orderBy?: BrandGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Brand model
     */
    readonly fields: BrandFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Brand.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BrandClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    documents<T extends Prisma.Brand$documentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Brand$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    socialLinks<T extends Prisma.Brand$socialLinksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Brand$socialLinksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandSocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    followers<T extends Prisma.Brand$followersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Brand$followersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandFollowerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    categories<T extends Prisma.Brand$categoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Brand$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    products<T extends Prisma.Brand$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Brand$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderBrands<T extends Prisma.Brand$orderBrandsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Brand$orderBrandsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderBrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Brand model
 */
export interface BrandFieldRefs {
    readonly id: Prisma.FieldRef<"Brand", 'String'>;
    readonly userId: Prisma.FieldRef<"Brand", 'String'>;
    readonly name: Prisma.FieldRef<"Brand", 'String'>;
    readonly verificationStatus: Prisma.FieldRef<"Brand", 'BrandVerificationTier'>;
    readonly rating: Prisma.FieldRef<"Brand", 'Decimal'>;
    readonly logoUrl: Prisma.FieldRef<"Brand", 'String'>;
    readonly logoUrl_id: Prisma.FieldRef<"Brand", 'String'>;
    readonly followersCount: Prisma.FieldRef<"Brand", 'Int'>;
    readonly viewedTimes: Prisma.FieldRef<"Brand", 'BigInt'>;
    readonly isPromoted: Prisma.FieldRef<"Brand", 'Boolean'>;
    readonly isActive: Prisma.FieldRef<"Brand", 'Boolean'>;
    readonly balance: Prisma.FieldRef<"Brand", 'Decimal'>;
    readonly paymentDetails: Prisma.FieldRef<"Brand", 'Json'>;
    readonly address: Prisma.FieldRef<"Brand", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Brand", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Brand", 'DateTime'>;
}
/**
 * Brand findUnique
 */
export type BrandFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: Prisma.BrandSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brand
     */
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandInclude<ExtArgs> | null;
    /**
     * Filter, which Brand to fetch.
     */
    where: Prisma.BrandWhereUniqueInput;
};
/**
 * Brand findUniqueOrThrow
 */
export type BrandFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: Prisma.BrandSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brand
     */
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandInclude<ExtArgs> | null;
    /**
     * Filter, which Brand to fetch.
     */
    where: Prisma.BrandWhereUniqueInput;
};
/**
 * Brand findFirst
 */
export type BrandFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: Prisma.BrandSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brand
     */
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandInclude<ExtArgs> | null;
    /**
     * Filter, which Brand to fetch.
     */
    where?: Prisma.BrandWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Brands to fetch.
     */
    orderBy?: Prisma.BrandOrderByWithRelationInput | Prisma.BrandOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Brands.
     */
    cursor?: Prisma.BrandWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Brands.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Brands.
     */
    distinct?: Prisma.BrandScalarFieldEnum | Prisma.BrandScalarFieldEnum[];
};
/**
 * Brand findFirstOrThrow
 */
export type BrandFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: Prisma.BrandSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brand
     */
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandInclude<ExtArgs> | null;
    /**
     * Filter, which Brand to fetch.
     */
    where?: Prisma.BrandWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Brands to fetch.
     */
    orderBy?: Prisma.BrandOrderByWithRelationInput | Prisma.BrandOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Brands.
     */
    cursor?: Prisma.BrandWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Brands.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Brands.
     */
    distinct?: Prisma.BrandScalarFieldEnum | Prisma.BrandScalarFieldEnum[];
};
/**
 * Brand findMany
 */
export type BrandFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: Prisma.BrandSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brand
     */
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandInclude<ExtArgs> | null;
    /**
     * Filter, which Brands to fetch.
     */
    where?: Prisma.BrandWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Brands to fetch.
     */
    orderBy?: Prisma.BrandOrderByWithRelationInput | Prisma.BrandOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Brands.
     */
    cursor?: Prisma.BrandWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Brands.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Brands.
     */
    distinct?: Prisma.BrandScalarFieldEnum | Prisma.BrandScalarFieldEnum[];
};
/**
 * Brand create
 */
export type BrandCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: Prisma.BrandSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brand
     */
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandInclude<ExtArgs> | null;
    /**
     * The data needed to create a Brand.
     */
    data: Prisma.XOR<Prisma.BrandCreateInput, Prisma.BrandUncheckedCreateInput>;
};
/**
 * Brand createMany
 */
export type BrandCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: Prisma.BrandCreateManyInput | Prisma.BrandCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Brand createManyAndReturn
 */
export type BrandCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: Prisma.BrandSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Brand
     */
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    /**
     * The data used to create many Brands.
     */
    data: Prisma.BrandCreateManyInput | Prisma.BrandCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Brand update
 */
export type BrandUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: Prisma.BrandSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brand
     */
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandInclude<ExtArgs> | null;
    /**
     * The data needed to update a Brand.
     */
    data: Prisma.XOR<Prisma.BrandUpdateInput, Prisma.BrandUncheckedUpdateInput>;
    /**
     * Choose, which Brand to update.
     */
    where: Prisma.BrandWhereUniqueInput;
};
/**
 * Brand updateMany
 */
export type BrandUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: Prisma.XOR<Prisma.BrandUpdateManyMutationInput, Prisma.BrandUncheckedUpdateManyInput>;
    /**
     * Filter which Brands to update
     */
    where?: Prisma.BrandWhereInput;
    /**
     * Limit how many Brands to update.
     */
    limit?: number;
};
/**
 * Brand updateManyAndReturn
 */
export type BrandUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: Prisma.BrandSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Brand
     */
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    /**
     * The data used to update Brands.
     */
    data: Prisma.XOR<Prisma.BrandUpdateManyMutationInput, Prisma.BrandUncheckedUpdateManyInput>;
    /**
     * Filter which Brands to update
     */
    where?: Prisma.BrandWhereInput;
    /**
     * Limit how many Brands to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Brand upsert
 */
export type BrandUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: Prisma.BrandSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brand
     */
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandInclude<ExtArgs> | null;
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: Prisma.BrandWhereUniqueInput;
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: Prisma.XOR<Prisma.BrandCreateInput, Prisma.BrandUncheckedCreateInput>;
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BrandUpdateInput, Prisma.BrandUncheckedUpdateInput>;
};
/**
 * Brand delete
 */
export type BrandDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: Prisma.BrandSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brand
     */
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandInclude<ExtArgs> | null;
    /**
     * Filter which Brand to delete.
     */
    where: Prisma.BrandWhereUniqueInput;
};
/**
 * Brand deleteMany
 */
export type BrandDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: Prisma.BrandWhereInput;
    /**
     * Limit how many Brands to delete.
     */
    limit?: number;
};
/**
 * Brand.documents
 */
export type Brand$documentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandDocument
     */
    select?: Prisma.BrandDocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandDocument
     */
    omit?: Prisma.BrandDocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandDocumentInclude<ExtArgs> | null;
    where?: Prisma.BrandDocumentWhereInput;
    orderBy?: Prisma.BrandDocumentOrderByWithRelationInput | Prisma.BrandDocumentOrderByWithRelationInput[];
    cursor?: Prisma.BrandDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandDocumentScalarFieldEnum | Prisma.BrandDocumentScalarFieldEnum[];
};
/**
 * Brand.socialLinks
 */
export type Brand$socialLinksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandSocialLink
     */
    select?: Prisma.BrandSocialLinkSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandSocialLink
     */
    omit?: Prisma.BrandSocialLinkOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandSocialLinkInclude<ExtArgs> | null;
    where?: Prisma.BrandSocialLinkWhereInput;
    orderBy?: Prisma.BrandSocialLinkOrderByWithRelationInput | Prisma.BrandSocialLinkOrderByWithRelationInput[];
    cursor?: Prisma.BrandSocialLinkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandSocialLinkScalarFieldEnum | Prisma.BrandSocialLinkScalarFieldEnum[];
};
/**
 * Brand.followers
 */
export type Brand$followersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandFollower
     */
    select?: Prisma.BrandFollowerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandFollower
     */
    omit?: Prisma.BrandFollowerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandFollowerInclude<ExtArgs> | null;
    where?: Prisma.BrandFollowerWhereInput;
    orderBy?: Prisma.BrandFollowerOrderByWithRelationInput | Prisma.BrandFollowerOrderByWithRelationInput[];
    cursor?: Prisma.BrandFollowerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandFollowerScalarFieldEnum | Prisma.BrandFollowerScalarFieldEnum[];
};
/**
 * Brand.categories
 */
export type Brand$categoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: Prisma.CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByWithRelationInput | Prisma.CategoryOrderByWithRelationInput[];
    cursor?: Prisma.CategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoryScalarFieldEnum | Prisma.CategoryScalarFieldEnum[];
};
/**
 * Brand.products
 */
export type Brand$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: Prisma.ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
/**
 * Brand.orderBrands
 */
export type Brand$orderBrandsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderBrand
     */
    select?: Prisma.OrderBrandSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderBrand
     */
    omit?: Prisma.OrderBrandOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderBrandInclude<ExtArgs> | null;
    where?: Prisma.OrderBrandWhereInput;
    orderBy?: Prisma.OrderBrandOrderByWithRelationInput | Prisma.OrderBrandOrderByWithRelationInput[];
    cursor?: Prisma.OrderBrandWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderBrandScalarFieldEnum | Prisma.OrderBrandScalarFieldEnum[];
};
/**
 * Brand without action
 */
export type BrandDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: Prisma.BrandSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brand
     */
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandInclude<ExtArgs> | null;
};
//# sourceMappingURL=Brand.d.ts.map