import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model BrandFollower
 *
 */
export type BrandFollowerModel = runtime.Types.Result.DefaultSelection<Prisma.$BrandFollowerPayload>;
export type AggregateBrandFollower = {
    _count: BrandFollowerCountAggregateOutputType | null;
    _min: BrandFollowerMinAggregateOutputType | null;
    _max: BrandFollowerMaxAggregateOutputType | null;
};
export type BrandFollowerMinAggregateOutputType = {
    brandId: string | null;
    userId: string | null;
    followedAt: Date | null;
};
export type BrandFollowerMaxAggregateOutputType = {
    brandId: string | null;
    userId: string | null;
    followedAt: Date | null;
};
export type BrandFollowerCountAggregateOutputType = {
    brandId: number;
    userId: number;
    followedAt: number;
    _all: number;
};
export type BrandFollowerMinAggregateInputType = {
    brandId?: true;
    userId?: true;
    followedAt?: true;
};
export type BrandFollowerMaxAggregateInputType = {
    brandId?: true;
    userId?: true;
    followedAt?: true;
};
export type BrandFollowerCountAggregateInputType = {
    brandId?: true;
    userId?: true;
    followedAt?: true;
    _all?: true;
};
export type BrandFollowerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BrandFollower to aggregate.
     */
    where?: Prisma.BrandFollowerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BrandFollowers to fetch.
     */
    orderBy?: Prisma.BrandFollowerOrderByWithRelationInput | Prisma.BrandFollowerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BrandFollowerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BrandFollowers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BrandFollowers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BrandFollowers
    **/
    _count?: true | BrandFollowerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BrandFollowerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BrandFollowerMaxAggregateInputType;
};
export type GetBrandFollowerAggregateType<T extends BrandFollowerAggregateArgs> = {
    [P in keyof T & keyof AggregateBrandFollower]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBrandFollower[P]> : Prisma.GetScalarType<T[P], AggregateBrandFollower[P]>;
};
export type BrandFollowerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandFollowerWhereInput;
    orderBy?: Prisma.BrandFollowerOrderByWithAggregationInput | Prisma.BrandFollowerOrderByWithAggregationInput[];
    by: Prisma.BrandFollowerScalarFieldEnum[] | Prisma.BrandFollowerScalarFieldEnum;
    having?: Prisma.BrandFollowerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BrandFollowerCountAggregateInputType | true;
    _min?: BrandFollowerMinAggregateInputType;
    _max?: BrandFollowerMaxAggregateInputType;
};
export type BrandFollowerGroupByOutputType = {
    brandId: string;
    userId: string;
    followedAt: Date;
    _count: BrandFollowerCountAggregateOutputType | null;
    _min: BrandFollowerMinAggregateOutputType | null;
    _max: BrandFollowerMaxAggregateOutputType | null;
};
export type GetBrandFollowerGroupByPayload<T extends BrandFollowerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BrandFollowerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BrandFollowerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BrandFollowerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BrandFollowerGroupByOutputType[P]>;
}>>;
export type BrandFollowerWhereInput = {
    AND?: Prisma.BrandFollowerWhereInput | Prisma.BrandFollowerWhereInput[];
    OR?: Prisma.BrandFollowerWhereInput[];
    NOT?: Prisma.BrandFollowerWhereInput | Prisma.BrandFollowerWhereInput[];
    brandId?: Prisma.UuidFilter<"BrandFollower"> | string;
    userId?: Prisma.UuidFilter<"BrandFollower"> | string;
    followedAt?: Prisma.DateTimeFilter<"BrandFollower"> | Date | string;
    brand?: Prisma.XOR<Prisma.BrandScalarRelationFilter, Prisma.BrandWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type BrandFollowerOrderByWithRelationInput = {
    brandId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    followedAt?: Prisma.SortOrder;
    brand?: Prisma.BrandOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type BrandFollowerWhereUniqueInput = Prisma.AtLeast<{
    brandId_userId?: Prisma.BrandFollowerBrandIdUserIdCompoundUniqueInput;
    AND?: Prisma.BrandFollowerWhereInput | Prisma.BrandFollowerWhereInput[];
    OR?: Prisma.BrandFollowerWhereInput[];
    NOT?: Prisma.BrandFollowerWhereInput | Prisma.BrandFollowerWhereInput[];
    brandId?: Prisma.UuidFilter<"BrandFollower"> | string;
    userId?: Prisma.UuidFilter<"BrandFollower"> | string;
    followedAt?: Prisma.DateTimeFilter<"BrandFollower"> | Date | string;
    brand?: Prisma.XOR<Prisma.BrandScalarRelationFilter, Prisma.BrandWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "brandId_userId">;
export type BrandFollowerOrderByWithAggregationInput = {
    brandId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    followedAt?: Prisma.SortOrder;
    _count?: Prisma.BrandFollowerCountOrderByAggregateInput;
    _max?: Prisma.BrandFollowerMaxOrderByAggregateInput;
    _min?: Prisma.BrandFollowerMinOrderByAggregateInput;
};
export type BrandFollowerScalarWhereWithAggregatesInput = {
    AND?: Prisma.BrandFollowerScalarWhereWithAggregatesInput | Prisma.BrandFollowerScalarWhereWithAggregatesInput[];
    OR?: Prisma.BrandFollowerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BrandFollowerScalarWhereWithAggregatesInput | Prisma.BrandFollowerScalarWhereWithAggregatesInput[];
    brandId?: Prisma.UuidWithAggregatesFilter<"BrandFollower"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"BrandFollower"> | string;
    followedAt?: Prisma.DateTimeWithAggregatesFilter<"BrandFollower"> | Date | string;
};
export type BrandFollowerCreateInput = {
    followedAt?: Date | string;
    brand: Prisma.BrandCreateNestedOneWithoutFollowersInput;
    user: Prisma.UserCreateNestedOneWithoutBrandFollowersInput;
};
export type BrandFollowerUncheckedCreateInput = {
    brandId: string;
    userId: string;
    followedAt?: Date | string;
};
export type BrandFollowerUpdateInput = {
    followedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brand?: Prisma.BrandUpdateOneRequiredWithoutFollowersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutBrandFollowersNestedInput;
};
export type BrandFollowerUncheckedUpdateInput = {
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    followedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandFollowerCreateManyInput = {
    brandId: string;
    userId: string;
    followedAt?: Date | string;
};
export type BrandFollowerUpdateManyMutationInput = {
    followedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandFollowerUncheckedUpdateManyInput = {
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    followedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandFollowerListRelationFilter = {
    every?: Prisma.BrandFollowerWhereInput;
    some?: Prisma.BrandFollowerWhereInput;
    none?: Prisma.BrandFollowerWhereInput;
};
export type BrandFollowerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BrandFollowerBrandIdUserIdCompoundUniqueInput = {
    brandId: string;
    userId: string;
};
export type BrandFollowerCountOrderByAggregateInput = {
    brandId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    followedAt?: Prisma.SortOrder;
};
export type BrandFollowerMaxOrderByAggregateInput = {
    brandId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    followedAt?: Prisma.SortOrder;
};
export type BrandFollowerMinOrderByAggregateInput = {
    brandId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    followedAt?: Prisma.SortOrder;
};
export type BrandFollowerCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BrandFollowerCreateWithoutUserInput, Prisma.BrandFollowerUncheckedCreateWithoutUserInput> | Prisma.BrandFollowerCreateWithoutUserInput[] | Prisma.BrandFollowerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BrandFollowerCreateOrConnectWithoutUserInput | Prisma.BrandFollowerCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BrandFollowerCreateManyUserInputEnvelope;
    connect?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
};
export type BrandFollowerUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BrandFollowerCreateWithoutUserInput, Prisma.BrandFollowerUncheckedCreateWithoutUserInput> | Prisma.BrandFollowerCreateWithoutUserInput[] | Prisma.BrandFollowerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BrandFollowerCreateOrConnectWithoutUserInput | Prisma.BrandFollowerCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BrandFollowerCreateManyUserInputEnvelope;
    connect?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
};
export type BrandFollowerUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BrandFollowerCreateWithoutUserInput, Prisma.BrandFollowerUncheckedCreateWithoutUserInput> | Prisma.BrandFollowerCreateWithoutUserInput[] | Prisma.BrandFollowerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BrandFollowerCreateOrConnectWithoutUserInput | Prisma.BrandFollowerCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BrandFollowerUpsertWithWhereUniqueWithoutUserInput | Prisma.BrandFollowerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BrandFollowerCreateManyUserInputEnvelope;
    set?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
    disconnect?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
    delete?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
    connect?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
    update?: Prisma.BrandFollowerUpdateWithWhereUniqueWithoutUserInput | Prisma.BrandFollowerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BrandFollowerUpdateManyWithWhereWithoutUserInput | Prisma.BrandFollowerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BrandFollowerScalarWhereInput | Prisma.BrandFollowerScalarWhereInput[];
};
export type BrandFollowerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BrandFollowerCreateWithoutUserInput, Prisma.BrandFollowerUncheckedCreateWithoutUserInput> | Prisma.BrandFollowerCreateWithoutUserInput[] | Prisma.BrandFollowerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BrandFollowerCreateOrConnectWithoutUserInput | Prisma.BrandFollowerCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BrandFollowerUpsertWithWhereUniqueWithoutUserInput | Prisma.BrandFollowerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BrandFollowerCreateManyUserInputEnvelope;
    set?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
    disconnect?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
    delete?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
    connect?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
    update?: Prisma.BrandFollowerUpdateWithWhereUniqueWithoutUserInput | Prisma.BrandFollowerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BrandFollowerUpdateManyWithWhereWithoutUserInput | Prisma.BrandFollowerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BrandFollowerScalarWhereInput | Prisma.BrandFollowerScalarWhereInput[];
};
export type BrandFollowerCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.BrandFollowerCreateWithoutBrandInput, Prisma.BrandFollowerUncheckedCreateWithoutBrandInput> | Prisma.BrandFollowerCreateWithoutBrandInput[] | Prisma.BrandFollowerUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandFollowerCreateOrConnectWithoutBrandInput | Prisma.BrandFollowerCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.BrandFollowerCreateManyBrandInputEnvelope;
    connect?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
};
export type BrandFollowerUncheckedCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.BrandFollowerCreateWithoutBrandInput, Prisma.BrandFollowerUncheckedCreateWithoutBrandInput> | Prisma.BrandFollowerCreateWithoutBrandInput[] | Prisma.BrandFollowerUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandFollowerCreateOrConnectWithoutBrandInput | Prisma.BrandFollowerCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.BrandFollowerCreateManyBrandInputEnvelope;
    connect?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
};
export type BrandFollowerUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.BrandFollowerCreateWithoutBrandInput, Prisma.BrandFollowerUncheckedCreateWithoutBrandInput> | Prisma.BrandFollowerCreateWithoutBrandInput[] | Prisma.BrandFollowerUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandFollowerCreateOrConnectWithoutBrandInput | Prisma.BrandFollowerCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.BrandFollowerUpsertWithWhereUniqueWithoutBrandInput | Prisma.BrandFollowerUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.BrandFollowerCreateManyBrandInputEnvelope;
    set?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
    disconnect?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
    delete?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
    connect?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
    update?: Prisma.BrandFollowerUpdateWithWhereUniqueWithoutBrandInput | Prisma.BrandFollowerUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.BrandFollowerUpdateManyWithWhereWithoutBrandInput | Prisma.BrandFollowerUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.BrandFollowerScalarWhereInput | Prisma.BrandFollowerScalarWhereInput[];
};
export type BrandFollowerUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.BrandFollowerCreateWithoutBrandInput, Prisma.BrandFollowerUncheckedCreateWithoutBrandInput> | Prisma.BrandFollowerCreateWithoutBrandInput[] | Prisma.BrandFollowerUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandFollowerCreateOrConnectWithoutBrandInput | Prisma.BrandFollowerCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.BrandFollowerUpsertWithWhereUniqueWithoutBrandInput | Prisma.BrandFollowerUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.BrandFollowerCreateManyBrandInputEnvelope;
    set?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
    disconnect?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
    delete?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
    connect?: Prisma.BrandFollowerWhereUniqueInput | Prisma.BrandFollowerWhereUniqueInput[];
    update?: Prisma.BrandFollowerUpdateWithWhereUniqueWithoutBrandInput | Prisma.BrandFollowerUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.BrandFollowerUpdateManyWithWhereWithoutBrandInput | Prisma.BrandFollowerUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.BrandFollowerScalarWhereInput | Prisma.BrandFollowerScalarWhereInput[];
};
export type BrandFollowerCreateWithoutUserInput = {
    followedAt?: Date | string;
    brand: Prisma.BrandCreateNestedOneWithoutFollowersInput;
};
export type BrandFollowerUncheckedCreateWithoutUserInput = {
    brandId: string;
    followedAt?: Date | string;
};
export type BrandFollowerCreateOrConnectWithoutUserInput = {
    where: Prisma.BrandFollowerWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandFollowerCreateWithoutUserInput, Prisma.BrandFollowerUncheckedCreateWithoutUserInput>;
};
export type BrandFollowerCreateManyUserInputEnvelope = {
    data: Prisma.BrandFollowerCreateManyUserInput | Prisma.BrandFollowerCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type BrandFollowerUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.BrandFollowerWhereUniqueInput;
    update: Prisma.XOR<Prisma.BrandFollowerUpdateWithoutUserInput, Prisma.BrandFollowerUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.BrandFollowerCreateWithoutUserInput, Prisma.BrandFollowerUncheckedCreateWithoutUserInput>;
};
export type BrandFollowerUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.BrandFollowerWhereUniqueInput;
    data: Prisma.XOR<Prisma.BrandFollowerUpdateWithoutUserInput, Prisma.BrandFollowerUncheckedUpdateWithoutUserInput>;
};
export type BrandFollowerUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.BrandFollowerScalarWhereInput;
    data: Prisma.XOR<Prisma.BrandFollowerUpdateManyMutationInput, Prisma.BrandFollowerUncheckedUpdateManyWithoutUserInput>;
};
export type BrandFollowerScalarWhereInput = {
    AND?: Prisma.BrandFollowerScalarWhereInput | Prisma.BrandFollowerScalarWhereInput[];
    OR?: Prisma.BrandFollowerScalarWhereInput[];
    NOT?: Prisma.BrandFollowerScalarWhereInput | Prisma.BrandFollowerScalarWhereInput[];
    brandId?: Prisma.UuidFilter<"BrandFollower"> | string;
    userId?: Prisma.UuidFilter<"BrandFollower"> | string;
    followedAt?: Prisma.DateTimeFilter<"BrandFollower"> | Date | string;
};
export type BrandFollowerCreateWithoutBrandInput = {
    followedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBrandFollowersInput;
};
export type BrandFollowerUncheckedCreateWithoutBrandInput = {
    userId: string;
    followedAt?: Date | string;
};
export type BrandFollowerCreateOrConnectWithoutBrandInput = {
    where: Prisma.BrandFollowerWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandFollowerCreateWithoutBrandInput, Prisma.BrandFollowerUncheckedCreateWithoutBrandInput>;
};
export type BrandFollowerCreateManyBrandInputEnvelope = {
    data: Prisma.BrandFollowerCreateManyBrandInput | Prisma.BrandFollowerCreateManyBrandInput[];
    skipDuplicates?: boolean;
};
export type BrandFollowerUpsertWithWhereUniqueWithoutBrandInput = {
    where: Prisma.BrandFollowerWhereUniqueInput;
    update: Prisma.XOR<Prisma.BrandFollowerUpdateWithoutBrandInput, Prisma.BrandFollowerUncheckedUpdateWithoutBrandInput>;
    create: Prisma.XOR<Prisma.BrandFollowerCreateWithoutBrandInput, Prisma.BrandFollowerUncheckedCreateWithoutBrandInput>;
};
export type BrandFollowerUpdateWithWhereUniqueWithoutBrandInput = {
    where: Prisma.BrandFollowerWhereUniqueInput;
    data: Prisma.XOR<Prisma.BrandFollowerUpdateWithoutBrandInput, Prisma.BrandFollowerUncheckedUpdateWithoutBrandInput>;
};
export type BrandFollowerUpdateManyWithWhereWithoutBrandInput = {
    where: Prisma.BrandFollowerScalarWhereInput;
    data: Prisma.XOR<Prisma.BrandFollowerUpdateManyMutationInput, Prisma.BrandFollowerUncheckedUpdateManyWithoutBrandInput>;
};
export type BrandFollowerCreateManyUserInput = {
    brandId: string;
    followedAt?: Date | string;
};
export type BrandFollowerUpdateWithoutUserInput = {
    followedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brand?: Prisma.BrandUpdateOneRequiredWithoutFollowersNestedInput;
};
export type BrandFollowerUncheckedUpdateWithoutUserInput = {
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    followedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandFollowerUncheckedUpdateManyWithoutUserInput = {
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    followedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandFollowerCreateManyBrandInput = {
    userId: string;
    followedAt?: Date | string;
};
export type BrandFollowerUpdateWithoutBrandInput = {
    followedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBrandFollowersNestedInput;
};
export type BrandFollowerUncheckedUpdateWithoutBrandInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    followedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandFollowerUncheckedUpdateManyWithoutBrandInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    followedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandFollowerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    brandId?: boolean;
    userId?: boolean;
    followedAt?: boolean;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brandFollower"]>;
export type BrandFollowerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    brandId?: boolean;
    userId?: boolean;
    followedAt?: boolean;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brandFollower"]>;
export type BrandFollowerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    brandId?: boolean;
    userId?: boolean;
    followedAt?: boolean;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brandFollower"]>;
export type BrandFollowerSelectScalar = {
    brandId?: boolean;
    userId?: boolean;
    followedAt?: boolean;
};
export type BrandFollowerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"brandId" | "userId" | "followedAt", ExtArgs["result"]["brandFollower"]>;
export type BrandFollowerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BrandFollowerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BrandFollowerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BrandFollowerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BrandFollower";
    objects: {
        brand: Prisma.$BrandPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        brandId: string;
        userId: string;
        followedAt: Date;
    }, ExtArgs["result"]["brandFollower"]>;
    composites: {};
};
export type BrandFollowerGetPayload<S extends boolean | null | undefined | BrandFollowerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BrandFollowerPayload, S>;
export type BrandFollowerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BrandFollowerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BrandFollowerCountAggregateInputType | true;
};
export interface BrandFollowerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BrandFollower'];
        meta: {
            name: 'BrandFollower';
        };
    };
    /**
     * Find zero or one BrandFollower that matches the filter.
     * @param {BrandFollowerFindUniqueArgs} args - Arguments to find a BrandFollower
     * @example
     * // Get one BrandFollower
     * const brandFollower = await prisma.brandFollower.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFollowerFindUniqueArgs>(args: Prisma.SelectSubset<T, BrandFollowerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BrandFollowerClient<runtime.Types.Result.GetResult<Prisma.$BrandFollowerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BrandFollower that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFollowerFindUniqueOrThrowArgs} args - Arguments to find a BrandFollower
     * @example
     * // Get one BrandFollower
     * const brandFollower = await prisma.brandFollower.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFollowerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BrandFollowerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandFollowerClient<runtime.Types.Result.GetResult<Prisma.$BrandFollowerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BrandFollower that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFollowerFindFirstArgs} args - Arguments to find a BrandFollower
     * @example
     * // Get one BrandFollower
     * const brandFollower = await prisma.brandFollower.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFollowerFindFirstArgs>(args?: Prisma.SelectSubset<T, BrandFollowerFindFirstArgs<ExtArgs>>): Prisma.Prisma__BrandFollowerClient<runtime.Types.Result.GetResult<Prisma.$BrandFollowerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BrandFollower that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFollowerFindFirstOrThrowArgs} args - Arguments to find a BrandFollower
     * @example
     * // Get one BrandFollower
     * const brandFollower = await prisma.brandFollower.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFollowerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BrandFollowerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandFollowerClient<runtime.Types.Result.GetResult<Prisma.$BrandFollowerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BrandFollowers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFollowerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrandFollowers
     * const brandFollowers = await prisma.brandFollower.findMany()
     *
     * // Get first 10 BrandFollowers
     * const brandFollowers = await prisma.brandFollower.findMany({ take: 10 })
     *
     * // Only select the `brandId`
     * const brandFollowerWithBrandIdOnly = await prisma.brandFollower.findMany({ select: { brandId: true } })
     *
     */
    findMany<T extends BrandFollowerFindManyArgs>(args?: Prisma.SelectSubset<T, BrandFollowerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandFollowerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BrandFollower.
     * @param {BrandFollowerCreateArgs} args - Arguments to create a BrandFollower.
     * @example
     * // Create one BrandFollower
     * const BrandFollower = await prisma.brandFollower.create({
     *   data: {
     *     // ... data to create a BrandFollower
     *   }
     * })
     *
     */
    create<T extends BrandFollowerCreateArgs>(args: Prisma.SelectSubset<T, BrandFollowerCreateArgs<ExtArgs>>): Prisma.Prisma__BrandFollowerClient<runtime.Types.Result.GetResult<Prisma.$BrandFollowerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BrandFollowers.
     * @param {BrandFollowerCreateManyArgs} args - Arguments to create many BrandFollowers.
     * @example
     * // Create many BrandFollowers
     * const brandFollower = await prisma.brandFollower.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BrandFollowerCreateManyArgs>(args?: Prisma.SelectSubset<T, BrandFollowerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BrandFollowers and returns the data saved in the database.
     * @param {BrandFollowerCreateManyAndReturnArgs} args - Arguments to create many BrandFollowers.
     * @example
     * // Create many BrandFollowers
     * const brandFollower = await prisma.brandFollower.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BrandFollowers and only return the `brandId`
     * const brandFollowerWithBrandIdOnly = await prisma.brandFollower.createManyAndReturn({
     *   select: { brandId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BrandFollowerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BrandFollowerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandFollowerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BrandFollower.
     * @param {BrandFollowerDeleteArgs} args - Arguments to delete one BrandFollower.
     * @example
     * // Delete one BrandFollower
     * const BrandFollower = await prisma.brandFollower.delete({
     *   where: {
     *     // ... filter to delete one BrandFollower
     *   }
     * })
     *
     */
    delete<T extends BrandFollowerDeleteArgs>(args: Prisma.SelectSubset<T, BrandFollowerDeleteArgs<ExtArgs>>): Prisma.Prisma__BrandFollowerClient<runtime.Types.Result.GetResult<Prisma.$BrandFollowerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BrandFollower.
     * @param {BrandFollowerUpdateArgs} args - Arguments to update one BrandFollower.
     * @example
     * // Update one BrandFollower
     * const brandFollower = await prisma.brandFollower.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BrandFollowerUpdateArgs>(args: Prisma.SelectSubset<T, BrandFollowerUpdateArgs<ExtArgs>>): Prisma.Prisma__BrandFollowerClient<runtime.Types.Result.GetResult<Prisma.$BrandFollowerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BrandFollowers.
     * @param {BrandFollowerDeleteManyArgs} args - Arguments to filter BrandFollowers to delete.
     * @example
     * // Delete a few BrandFollowers
     * const { count } = await prisma.brandFollower.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BrandFollowerDeleteManyArgs>(args?: Prisma.SelectSubset<T, BrandFollowerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BrandFollowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFollowerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrandFollowers
     * const brandFollower = await prisma.brandFollower.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BrandFollowerUpdateManyArgs>(args: Prisma.SelectSubset<T, BrandFollowerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BrandFollowers and returns the data updated in the database.
     * @param {BrandFollowerUpdateManyAndReturnArgs} args - Arguments to update many BrandFollowers.
     * @example
     * // Update many BrandFollowers
     * const brandFollower = await prisma.brandFollower.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BrandFollowers and only return the `brandId`
     * const brandFollowerWithBrandIdOnly = await prisma.brandFollower.updateManyAndReturn({
     *   select: { brandId: true },
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
    updateManyAndReturn<T extends BrandFollowerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BrandFollowerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandFollowerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BrandFollower.
     * @param {BrandFollowerUpsertArgs} args - Arguments to update or create a BrandFollower.
     * @example
     * // Update or create a BrandFollower
     * const brandFollower = await prisma.brandFollower.upsert({
     *   create: {
     *     // ... data to create a BrandFollower
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrandFollower we want to update
     *   }
     * })
     */
    upsert<T extends BrandFollowerUpsertArgs>(args: Prisma.SelectSubset<T, BrandFollowerUpsertArgs<ExtArgs>>): Prisma.Prisma__BrandFollowerClient<runtime.Types.Result.GetResult<Prisma.$BrandFollowerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BrandFollowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFollowerCountArgs} args - Arguments to filter BrandFollowers to count.
     * @example
     * // Count the number of BrandFollowers
     * const count = await prisma.brandFollower.count({
     *   where: {
     *     // ... the filter for the BrandFollowers we want to count
     *   }
     * })
    **/
    count<T extends BrandFollowerCountArgs>(args?: Prisma.Subset<T, BrandFollowerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BrandFollowerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BrandFollower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFollowerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandFollowerAggregateArgs>(args: Prisma.Subset<T, BrandFollowerAggregateArgs>): Prisma.PrismaPromise<GetBrandFollowerAggregateType<T>>;
    /**
     * Group by BrandFollower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFollowerGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BrandFollowerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BrandFollowerGroupByArgs['orderBy'];
    } : {
        orderBy?: BrandFollowerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BrandFollowerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandFollowerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BrandFollower model
     */
    readonly fields: BrandFollowerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BrandFollower.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BrandFollowerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    brand<T extends Prisma.BrandDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BrandDefaultArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the BrandFollower model
 */
export interface BrandFollowerFieldRefs {
    readonly brandId: Prisma.FieldRef<"BrandFollower", 'String'>;
    readonly userId: Prisma.FieldRef<"BrandFollower", 'String'>;
    readonly followedAt: Prisma.FieldRef<"BrandFollower", 'DateTime'>;
}
/**
 * BrandFollower findUnique
 */
export type BrandFollowerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BrandFollower to fetch.
     */
    where: Prisma.BrandFollowerWhereUniqueInput;
};
/**
 * BrandFollower findUniqueOrThrow
 */
export type BrandFollowerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BrandFollower to fetch.
     */
    where: Prisma.BrandFollowerWhereUniqueInput;
};
/**
 * BrandFollower findFirst
 */
export type BrandFollowerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BrandFollower to fetch.
     */
    where?: Prisma.BrandFollowerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BrandFollowers to fetch.
     */
    orderBy?: Prisma.BrandFollowerOrderByWithRelationInput | Prisma.BrandFollowerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BrandFollowers.
     */
    cursor?: Prisma.BrandFollowerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BrandFollowers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BrandFollowers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BrandFollowers.
     */
    distinct?: Prisma.BrandFollowerScalarFieldEnum | Prisma.BrandFollowerScalarFieldEnum[];
};
/**
 * BrandFollower findFirstOrThrow
 */
export type BrandFollowerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BrandFollower to fetch.
     */
    where?: Prisma.BrandFollowerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BrandFollowers to fetch.
     */
    orderBy?: Prisma.BrandFollowerOrderByWithRelationInput | Prisma.BrandFollowerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BrandFollowers.
     */
    cursor?: Prisma.BrandFollowerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BrandFollowers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BrandFollowers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BrandFollowers.
     */
    distinct?: Prisma.BrandFollowerScalarFieldEnum | Prisma.BrandFollowerScalarFieldEnum[];
};
/**
 * BrandFollower findMany
 */
export type BrandFollowerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BrandFollowers to fetch.
     */
    where?: Prisma.BrandFollowerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BrandFollowers to fetch.
     */
    orderBy?: Prisma.BrandFollowerOrderByWithRelationInput | Prisma.BrandFollowerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BrandFollowers.
     */
    cursor?: Prisma.BrandFollowerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BrandFollowers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BrandFollowers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BrandFollowers.
     */
    distinct?: Prisma.BrandFollowerScalarFieldEnum | Prisma.BrandFollowerScalarFieldEnum[];
};
/**
 * BrandFollower create
 */
export type BrandFollowerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a BrandFollower.
     */
    data: Prisma.XOR<Prisma.BrandFollowerCreateInput, Prisma.BrandFollowerUncheckedCreateInput>;
};
/**
 * BrandFollower createMany
 */
export type BrandFollowerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrandFollowers.
     */
    data: Prisma.BrandFollowerCreateManyInput | Prisma.BrandFollowerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BrandFollower createManyAndReturn
 */
export type BrandFollowerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandFollower
     */
    select?: Prisma.BrandFollowerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandFollower
     */
    omit?: Prisma.BrandFollowerOmit<ExtArgs> | null;
    /**
     * The data used to create many BrandFollowers.
     */
    data: Prisma.BrandFollowerCreateManyInput | Prisma.BrandFollowerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandFollowerIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BrandFollower update
 */
export type BrandFollowerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a BrandFollower.
     */
    data: Prisma.XOR<Prisma.BrandFollowerUpdateInput, Prisma.BrandFollowerUncheckedUpdateInput>;
    /**
     * Choose, which BrandFollower to update.
     */
    where: Prisma.BrandFollowerWhereUniqueInput;
};
/**
 * BrandFollower updateMany
 */
export type BrandFollowerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BrandFollowers.
     */
    data: Prisma.XOR<Prisma.BrandFollowerUpdateManyMutationInput, Prisma.BrandFollowerUncheckedUpdateManyInput>;
    /**
     * Filter which BrandFollowers to update
     */
    where?: Prisma.BrandFollowerWhereInput;
    /**
     * Limit how many BrandFollowers to update.
     */
    limit?: number;
};
/**
 * BrandFollower updateManyAndReturn
 */
export type BrandFollowerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandFollower
     */
    select?: Prisma.BrandFollowerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandFollower
     */
    omit?: Prisma.BrandFollowerOmit<ExtArgs> | null;
    /**
     * The data used to update BrandFollowers.
     */
    data: Prisma.XOR<Prisma.BrandFollowerUpdateManyMutationInput, Prisma.BrandFollowerUncheckedUpdateManyInput>;
    /**
     * Filter which BrandFollowers to update
     */
    where?: Prisma.BrandFollowerWhereInput;
    /**
     * Limit how many BrandFollowers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandFollowerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BrandFollower upsert
 */
export type BrandFollowerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the BrandFollower to update in case it exists.
     */
    where: Prisma.BrandFollowerWhereUniqueInput;
    /**
     * In case the BrandFollower found by the `where` argument doesn't exist, create a new BrandFollower with this data.
     */
    create: Prisma.XOR<Prisma.BrandFollowerCreateInput, Prisma.BrandFollowerUncheckedCreateInput>;
    /**
     * In case the BrandFollower was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BrandFollowerUpdateInput, Prisma.BrandFollowerUncheckedUpdateInput>;
};
/**
 * BrandFollower delete
 */
export type BrandFollowerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which BrandFollower to delete.
     */
    where: Prisma.BrandFollowerWhereUniqueInput;
};
/**
 * BrandFollower deleteMany
 */
export type BrandFollowerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BrandFollowers to delete
     */
    where?: Prisma.BrandFollowerWhereInput;
    /**
     * Limit how many BrandFollowers to delete.
     */
    limit?: number;
};
/**
 * BrandFollower without action
 */
export type BrandFollowerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=BrandFollower.d.ts.map