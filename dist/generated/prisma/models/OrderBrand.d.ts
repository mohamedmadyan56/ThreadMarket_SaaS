import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model OrderBrand
 *
 */
export type OrderBrandModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderBrandPayload>;
export type AggregateOrderBrand = {
    _count: OrderBrandCountAggregateOutputType | null;
    _min: OrderBrandMinAggregateOutputType | null;
    _max: OrderBrandMaxAggregateOutputType | null;
};
export type OrderBrandMinAggregateOutputType = {
    orderId: string | null;
    brandId: string | null;
};
export type OrderBrandMaxAggregateOutputType = {
    orderId: string | null;
    brandId: string | null;
};
export type OrderBrandCountAggregateOutputType = {
    orderId: number;
    brandId: number;
    _all: number;
};
export type OrderBrandMinAggregateInputType = {
    orderId?: true;
    brandId?: true;
};
export type OrderBrandMaxAggregateInputType = {
    orderId?: true;
    brandId?: true;
};
export type OrderBrandCountAggregateInputType = {
    orderId?: true;
    brandId?: true;
    _all?: true;
};
export type OrderBrandAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which OrderBrand to aggregate.
     */
    where?: Prisma.OrderBrandWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderBrands to fetch.
     */
    orderBy?: Prisma.OrderBrandOrderByWithRelationInput | Prisma.OrderBrandOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.OrderBrandWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderBrands from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderBrands.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OrderBrands
    **/
    _count?: true | OrderBrandCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: OrderBrandMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: OrderBrandMaxAggregateInputType;
};
export type GetOrderBrandAggregateType<T extends OrderBrandAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderBrand]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrderBrand[P]> : Prisma.GetScalarType<T[P], AggregateOrderBrand[P]>;
};
export type OrderBrandGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderBrandWhereInput;
    orderBy?: Prisma.OrderBrandOrderByWithAggregationInput | Prisma.OrderBrandOrderByWithAggregationInput[];
    by: Prisma.OrderBrandScalarFieldEnum[] | Prisma.OrderBrandScalarFieldEnum;
    having?: Prisma.OrderBrandScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderBrandCountAggregateInputType | true;
    _min?: OrderBrandMinAggregateInputType;
    _max?: OrderBrandMaxAggregateInputType;
};
export type OrderBrandGroupByOutputType = {
    orderId: string;
    brandId: string;
    _count: OrderBrandCountAggregateOutputType | null;
    _min: OrderBrandMinAggregateOutputType | null;
    _max: OrderBrandMaxAggregateOutputType | null;
};
export type GetOrderBrandGroupByPayload<T extends OrderBrandGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderBrandGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderBrandGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderBrandGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderBrandGroupByOutputType[P]>;
}>>;
export type OrderBrandWhereInput = {
    AND?: Prisma.OrderBrandWhereInput | Prisma.OrderBrandWhereInput[];
    OR?: Prisma.OrderBrandWhereInput[];
    NOT?: Prisma.OrderBrandWhereInput | Prisma.OrderBrandWhereInput[];
    orderId?: Prisma.UuidFilter<"OrderBrand"> | string;
    brandId?: Prisma.UuidFilter<"OrderBrand"> | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    brand?: Prisma.XOR<Prisma.BrandScalarRelationFilter, Prisma.BrandWhereInput>;
};
export type OrderBrandOrderByWithRelationInput = {
    orderId?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
    brand?: Prisma.BrandOrderByWithRelationInput;
};
export type OrderBrandWhereUniqueInput = Prisma.AtLeast<{
    orderId_brandId?: Prisma.OrderBrandOrderIdBrandIdCompoundUniqueInput;
    AND?: Prisma.OrderBrandWhereInput | Prisma.OrderBrandWhereInput[];
    OR?: Prisma.OrderBrandWhereInput[];
    NOT?: Prisma.OrderBrandWhereInput | Prisma.OrderBrandWhereInput[];
    orderId?: Prisma.UuidFilter<"OrderBrand"> | string;
    brandId?: Prisma.UuidFilter<"OrderBrand"> | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    brand?: Prisma.XOR<Prisma.BrandScalarRelationFilter, Prisma.BrandWhereInput>;
}, "orderId_brandId">;
export type OrderBrandOrderByWithAggregationInput = {
    orderId?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    _count?: Prisma.OrderBrandCountOrderByAggregateInput;
    _max?: Prisma.OrderBrandMaxOrderByAggregateInput;
    _min?: Prisma.OrderBrandMinOrderByAggregateInput;
};
export type OrderBrandScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderBrandScalarWhereWithAggregatesInput | Prisma.OrderBrandScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderBrandScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderBrandScalarWhereWithAggregatesInput | Prisma.OrderBrandScalarWhereWithAggregatesInput[];
    orderId?: Prisma.UuidWithAggregatesFilter<"OrderBrand"> | string;
    brandId?: Prisma.UuidWithAggregatesFilter<"OrderBrand"> | string;
};
export type OrderBrandCreateInput = {
    order: Prisma.OrderCreateNestedOneWithoutBrandsInput;
    brand: Prisma.BrandCreateNestedOneWithoutOrderBrandsInput;
};
export type OrderBrandUncheckedCreateInput = {
    orderId: string;
    brandId: string;
};
export type OrderBrandUpdateInput = {
    order?: Prisma.OrderUpdateOneRequiredWithoutBrandsNestedInput;
    brand?: Prisma.BrandUpdateOneRequiredWithoutOrderBrandsNestedInput;
};
export type OrderBrandUncheckedUpdateInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrderBrandCreateManyInput = {
    orderId: string;
    brandId: string;
};
export type OrderBrandUpdateManyMutationInput = {};
export type OrderBrandUncheckedUpdateManyInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrderBrandListRelationFilter = {
    every?: Prisma.OrderBrandWhereInput;
    some?: Prisma.OrderBrandWhereInput;
    none?: Prisma.OrderBrandWhereInput;
};
export type OrderBrandOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderBrandOrderIdBrandIdCompoundUniqueInput = {
    orderId: string;
    brandId: string;
};
export type OrderBrandCountOrderByAggregateInput = {
    orderId?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
};
export type OrderBrandMaxOrderByAggregateInput = {
    orderId?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
};
export type OrderBrandMinOrderByAggregateInput = {
    orderId?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
};
export type OrderBrandCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.OrderBrandCreateWithoutBrandInput, Prisma.OrderBrandUncheckedCreateWithoutBrandInput> | Prisma.OrderBrandCreateWithoutBrandInput[] | Prisma.OrderBrandUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.OrderBrandCreateOrConnectWithoutBrandInput | Prisma.OrderBrandCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.OrderBrandCreateManyBrandInputEnvelope;
    connect?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
};
export type OrderBrandUncheckedCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.OrderBrandCreateWithoutBrandInput, Prisma.OrderBrandUncheckedCreateWithoutBrandInput> | Prisma.OrderBrandCreateWithoutBrandInput[] | Prisma.OrderBrandUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.OrderBrandCreateOrConnectWithoutBrandInput | Prisma.OrderBrandCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.OrderBrandCreateManyBrandInputEnvelope;
    connect?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
};
export type OrderBrandUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.OrderBrandCreateWithoutBrandInput, Prisma.OrderBrandUncheckedCreateWithoutBrandInput> | Prisma.OrderBrandCreateWithoutBrandInput[] | Prisma.OrderBrandUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.OrderBrandCreateOrConnectWithoutBrandInput | Prisma.OrderBrandCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.OrderBrandUpsertWithWhereUniqueWithoutBrandInput | Prisma.OrderBrandUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.OrderBrandCreateManyBrandInputEnvelope;
    set?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
    disconnect?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
    delete?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
    connect?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
    update?: Prisma.OrderBrandUpdateWithWhereUniqueWithoutBrandInput | Prisma.OrderBrandUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.OrderBrandUpdateManyWithWhereWithoutBrandInput | Prisma.OrderBrandUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.OrderBrandScalarWhereInput | Prisma.OrderBrandScalarWhereInput[];
};
export type OrderBrandUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.OrderBrandCreateWithoutBrandInput, Prisma.OrderBrandUncheckedCreateWithoutBrandInput> | Prisma.OrderBrandCreateWithoutBrandInput[] | Prisma.OrderBrandUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.OrderBrandCreateOrConnectWithoutBrandInput | Prisma.OrderBrandCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.OrderBrandUpsertWithWhereUniqueWithoutBrandInput | Prisma.OrderBrandUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.OrderBrandCreateManyBrandInputEnvelope;
    set?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
    disconnect?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
    delete?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
    connect?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
    update?: Prisma.OrderBrandUpdateWithWhereUniqueWithoutBrandInput | Prisma.OrderBrandUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.OrderBrandUpdateManyWithWhereWithoutBrandInput | Prisma.OrderBrandUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.OrderBrandScalarWhereInput | Prisma.OrderBrandScalarWhereInput[];
};
export type OrderBrandCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderBrandCreateWithoutOrderInput, Prisma.OrderBrandUncheckedCreateWithoutOrderInput> | Prisma.OrderBrandCreateWithoutOrderInput[] | Prisma.OrderBrandUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderBrandCreateOrConnectWithoutOrderInput | Prisma.OrderBrandCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrderBrandCreateManyOrderInputEnvelope;
    connect?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
};
export type OrderBrandUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderBrandCreateWithoutOrderInput, Prisma.OrderBrandUncheckedCreateWithoutOrderInput> | Prisma.OrderBrandCreateWithoutOrderInput[] | Prisma.OrderBrandUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderBrandCreateOrConnectWithoutOrderInput | Prisma.OrderBrandCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrderBrandCreateManyOrderInputEnvelope;
    connect?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
};
export type OrderBrandUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderBrandCreateWithoutOrderInput, Prisma.OrderBrandUncheckedCreateWithoutOrderInput> | Prisma.OrderBrandCreateWithoutOrderInput[] | Prisma.OrderBrandUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderBrandCreateOrConnectWithoutOrderInput | Prisma.OrderBrandCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrderBrandUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderBrandUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrderBrandCreateManyOrderInputEnvelope;
    set?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
    disconnect?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
    delete?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
    connect?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
    update?: Prisma.OrderBrandUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderBrandUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrderBrandUpdateManyWithWhereWithoutOrderInput | Prisma.OrderBrandUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrderBrandScalarWhereInput | Prisma.OrderBrandScalarWhereInput[];
};
export type OrderBrandUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderBrandCreateWithoutOrderInput, Prisma.OrderBrandUncheckedCreateWithoutOrderInput> | Prisma.OrderBrandCreateWithoutOrderInput[] | Prisma.OrderBrandUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderBrandCreateOrConnectWithoutOrderInput | Prisma.OrderBrandCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrderBrandUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderBrandUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrderBrandCreateManyOrderInputEnvelope;
    set?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
    disconnect?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
    delete?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
    connect?: Prisma.OrderBrandWhereUniqueInput | Prisma.OrderBrandWhereUniqueInput[];
    update?: Prisma.OrderBrandUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderBrandUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrderBrandUpdateManyWithWhereWithoutOrderInput | Prisma.OrderBrandUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrderBrandScalarWhereInput | Prisma.OrderBrandScalarWhereInput[];
};
export type OrderBrandCreateWithoutBrandInput = {
    order: Prisma.OrderCreateNestedOneWithoutBrandsInput;
};
export type OrderBrandUncheckedCreateWithoutBrandInput = {
    orderId: string;
};
export type OrderBrandCreateOrConnectWithoutBrandInput = {
    where: Prisma.OrderBrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderBrandCreateWithoutBrandInput, Prisma.OrderBrandUncheckedCreateWithoutBrandInput>;
};
export type OrderBrandCreateManyBrandInputEnvelope = {
    data: Prisma.OrderBrandCreateManyBrandInput | Prisma.OrderBrandCreateManyBrandInput[];
    skipDuplicates?: boolean;
};
export type OrderBrandUpsertWithWhereUniqueWithoutBrandInput = {
    where: Prisma.OrderBrandWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderBrandUpdateWithoutBrandInput, Prisma.OrderBrandUncheckedUpdateWithoutBrandInput>;
    create: Prisma.XOR<Prisma.OrderBrandCreateWithoutBrandInput, Prisma.OrderBrandUncheckedCreateWithoutBrandInput>;
};
export type OrderBrandUpdateWithWhereUniqueWithoutBrandInput = {
    where: Prisma.OrderBrandWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderBrandUpdateWithoutBrandInput, Prisma.OrderBrandUncheckedUpdateWithoutBrandInput>;
};
export type OrderBrandUpdateManyWithWhereWithoutBrandInput = {
    where: Prisma.OrderBrandScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderBrandUpdateManyMutationInput, Prisma.OrderBrandUncheckedUpdateManyWithoutBrandInput>;
};
export type OrderBrandScalarWhereInput = {
    AND?: Prisma.OrderBrandScalarWhereInput | Prisma.OrderBrandScalarWhereInput[];
    OR?: Prisma.OrderBrandScalarWhereInput[];
    NOT?: Prisma.OrderBrandScalarWhereInput | Prisma.OrderBrandScalarWhereInput[];
    orderId?: Prisma.UuidFilter<"OrderBrand"> | string;
    brandId?: Prisma.UuidFilter<"OrderBrand"> | string;
};
export type OrderBrandCreateWithoutOrderInput = {
    brand: Prisma.BrandCreateNestedOneWithoutOrderBrandsInput;
};
export type OrderBrandUncheckedCreateWithoutOrderInput = {
    brandId: string;
};
export type OrderBrandCreateOrConnectWithoutOrderInput = {
    where: Prisma.OrderBrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderBrandCreateWithoutOrderInput, Prisma.OrderBrandUncheckedCreateWithoutOrderInput>;
};
export type OrderBrandCreateManyOrderInputEnvelope = {
    data: Prisma.OrderBrandCreateManyOrderInput | Prisma.OrderBrandCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type OrderBrandUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrderBrandWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderBrandUpdateWithoutOrderInput, Prisma.OrderBrandUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.OrderBrandCreateWithoutOrderInput, Prisma.OrderBrandUncheckedCreateWithoutOrderInput>;
};
export type OrderBrandUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrderBrandWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderBrandUpdateWithoutOrderInput, Prisma.OrderBrandUncheckedUpdateWithoutOrderInput>;
};
export type OrderBrandUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.OrderBrandScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderBrandUpdateManyMutationInput, Prisma.OrderBrandUncheckedUpdateManyWithoutOrderInput>;
};
export type OrderBrandCreateManyBrandInput = {
    orderId: string;
};
export type OrderBrandUpdateWithoutBrandInput = {
    order?: Prisma.OrderUpdateOneRequiredWithoutBrandsNestedInput;
};
export type OrderBrandUncheckedUpdateWithoutBrandInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrderBrandUncheckedUpdateManyWithoutBrandInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrderBrandCreateManyOrderInput = {
    brandId: string;
};
export type OrderBrandUpdateWithoutOrderInput = {
    brand?: Prisma.BrandUpdateOneRequiredWithoutOrderBrandsNestedInput;
};
export type OrderBrandUncheckedUpdateWithoutOrderInput = {
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrderBrandUncheckedUpdateManyWithoutOrderInput = {
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrderBrandSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderId?: boolean;
    brandId?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderBrand"]>;
export type OrderBrandSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderId?: boolean;
    brandId?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderBrand"]>;
export type OrderBrandSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderId?: boolean;
    brandId?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderBrand"]>;
export type OrderBrandSelectScalar = {
    orderId?: boolean;
    brandId?: boolean;
};
export type OrderBrandOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"orderId" | "brandId", ExtArgs["result"]["orderBrand"]>;
export type OrderBrandInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
};
export type OrderBrandIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
};
export type OrderBrandIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
};
export type $OrderBrandPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrderBrand";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs>;
        brand: Prisma.$BrandPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        orderId: string;
        brandId: string;
    }, ExtArgs["result"]["orderBrand"]>;
    composites: {};
};
export type OrderBrandGetPayload<S extends boolean | null | undefined | OrderBrandDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderBrandPayload, S>;
export type OrderBrandCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderBrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderBrandCountAggregateInputType | true;
};
export interface OrderBrandDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrderBrand'];
        meta: {
            name: 'OrderBrand';
        };
    };
    /**
     * Find zero or one OrderBrand that matches the filter.
     * @param {OrderBrandFindUniqueArgs} args - Arguments to find a OrderBrand
     * @example
     * // Get one OrderBrand
     * const orderBrand = await prisma.orderBrand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderBrandFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderBrandFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderBrandClient<runtime.Types.Result.GetResult<Prisma.$OrderBrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one OrderBrand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderBrandFindUniqueOrThrowArgs} args - Arguments to find a OrderBrand
     * @example
     * // Get one OrderBrand
     * const orderBrand = await prisma.orderBrand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderBrandFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderBrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderBrandClient<runtime.Types.Result.GetResult<Prisma.$OrderBrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first OrderBrand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderBrandFindFirstArgs} args - Arguments to find a OrderBrand
     * @example
     * // Get one OrderBrand
     * const orderBrand = await prisma.orderBrand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderBrandFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderBrandFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderBrandClient<runtime.Types.Result.GetResult<Prisma.$OrderBrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first OrderBrand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderBrandFindFirstOrThrowArgs} args - Arguments to find a OrderBrand
     * @example
     * // Get one OrderBrand
     * const orderBrand = await prisma.orderBrand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderBrandFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderBrandFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderBrandClient<runtime.Types.Result.GetResult<Prisma.$OrderBrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more OrderBrands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderBrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderBrands
     * const orderBrands = await prisma.orderBrand.findMany()
     *
     * // Get first 10 OrderBrands
     * const orderBrands = await prisma.orderBrand.findMany({ take: 10 })
     *
     * // Only select the `orderId`
     * const orderBrandWithOrderIdOnly = await prisma.orderBrand.findMany({ select: { orderId: true } })
     *
     */
    findMany<T extends OrderBrandFindManyArgs>(args?: Prisma.SelectSubset<T, OrderBrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderBrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a OrderBrand.
     * @param {OrderBrandCreateArgs} args - Arguments to create a OrderBrand.
     * @example
     * // Create one OrderBrand
     * const OrderBrand = await prisma.orderBrand.create({
     *   data: {
     *     // ... data to create a OrderBrand
     *   }
     * })
     *
     */
    create<T extends OrderBrandCreateArgs>(args: Prisma.SelectSubset<T, OrderBrandCreateArgs<ExtArgs>>): Prisma.Prisma__OrderBrandClient<runtime.Types.Result.GetResult<Prisma.$OrderBrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many OrderBrands.
     * @param {OrderBrandCreateManyArgs} args - Arguments to create many OrderBrands.
     * @example
     * // Create many OrderBrands
     * const orderBrand = await prisma.orderBrand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrderBrandCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderBrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many OrderBrands and returns the data saved in the database.
     * @param {OrderBrandCreateManyAndReturnArgs} args - Arguments to create many OrderBrands.
     * @example
     * // Create many OrderBrands
     * const orderBrand = await prisma.orderBrand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many OrderBrands and only return the `orderId`
     * const orderBrandWithOrderIdOnly = await prisma.orderBrand.createManyAndReturn({
     *   select: { orderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrderBrandCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderBrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderBrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a OrderBrand.
     * @param {OrderBrandDeleteArgs} args - Arguments to delete one OrderBrand.
     * @example
     * // Delete one OrderBrand
     * const OrderBrand = await prisma.orderBrand.delete({
     *   where: {
     *     // ... filter to delete one OrderBrand
     *   }
     * })
     *
     */
    delete<T extends OrderBrandDeleteArgs>(args: Prisma.SelectSubset<T, OrderBrandDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderBrandClient<runtime.Types.Result.GetResult<Prisma.$OrderBrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one OrderBrand.
     * @param {OrderBrandUpdateArgs} args - Arguments to update one OrderBrand.
     * @example
     * // Update one OrderBrand
     * const orderBrand = await prisma.orderBrand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrderBrandUpdateArgs>(args: Prisma.SelectSubset<T, OrderBrandUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderBrandClient<runtime.Types.Result.GetResult<Prisma.$OrderBrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more OrderBrands.
     * @param {OrderBrandDeleteManyArgs} args - Arguments to filter OrderBrands to delete.
     * @example
     * // Delete a few OrderBrands
     * const { count } = await prisma.orderBrand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrderBrandDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderBrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more OrderBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderBrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderBrands
     * const orderBrand = await prisma.orderBrand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrderBrandUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderBrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more OrderBrands and returns the data updated in the database.
     * @param {OrderBrandUpdateManyAndReturnArgs} args - Arguments to update many OrderBrands.
     * @example
     * // Update many OrderBrands
     * const orderBrand = await prisma.orderBrand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more OrderBrands and only return the `orderId`
     * const orderBrandWithOrderIdOnly = await prisma.orderBrand.updateManyAndReturn({
     *   select: { orderId: true },
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
    updateManyAndReturn<T extends OrderBrandUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderBrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderBrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one OrderBrand.
     * @param {OrderBrandUpsertArgs} args - Arguments to update or create a OrderBrand.
     * @example
     * // Update or create a OrderBrand
     * const orderBrand = await prisma.orderBrand.upsert({
     *   create: {
     *     // ... data to create a OrderBrand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderBrand we want to update
     *   }
     * })
     */
    upsert<T extends OrderBrandUpsertArgs>(args: Prisma.SelectSubset<T, OrderBrandUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderBrandClient<runtime.Types.Result.GetResult<Prisma.$OrderBrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of OrderBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderBrandCountArgs} args - Arguments to filter OrderBrands to count.
     * @example
     * // Count the number of OrderBrands
     * const count = await prisma.orderBrand.count({
     *   where: {
     *     // ... the filter for the OrderBrands we want to count
     *   }
     * })
    **/
    count<T extends OrderBrandCountArgs>(args?: Prisma.Subset<T, OrderBrandCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderBrandCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a OrderBrand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderBrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderBrandAggregateArgs>(args: Prisma.Subset<T, OrderBrandAggregateArgs>): Prisma.PrismaPromise<GetOrderBrandAggregateType<T>>;
    /**
     * Group by OrderBrand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderBrandGroupByArgs} args - Group by arguments.
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
    groupBy<T extends OrderBrandGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderBrandGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderBrandGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderBrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OrderBrand model
     */
    readonly fields: OrderBrandFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for OrderBrand.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__OrderBrandClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    brand<T extends Prisma.BrandDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BrandDefaultArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the OrderBrand model
 */
export interface OrderBrandFieldRefs {
    readonly orderId: Prisma.FieldRef<"OrderBrand", 'String'>;
    readonly brandId: Prisma.FieldRef<"OrderBrand", 'String'>;
}
/**
 * OrderBrand findUnique
 */
export type OrderBrandFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which OrderBrand to fetch.
     */
    where: Prisma.OrderBrandWhereUniqueInput;
};
/**
 * OrderBrand findUniqueOrThrow
 */
export type OrderBrandFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which OrderBrand to fetch.
     */
    where: Prisma.OrderBrandWhereUniqueInput;
};
/**
 * OrderBrand findFirst
 */
export type OrderBrandFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which OrderBrand to fetch.
     */
    where?: Prisma.OrderBrandWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderBrands to fetch.
     */
    orderBy?: Prisma.OrderBrandOrderByWithRelationInput | Prisma.OrderBrandOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrderBrands.
     */
    cursor?: Prisma.OrderBrandWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderBrands from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderBrands.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderBrands.
     */
    distinct?: Prisma.OrderBrandScalarFieldEnum | Prisma.OrderBrandScalarFieldEnum[];
};
/**
 * OrderBrand findFirstOrThrow
 */
export type OrderBrandFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which OrderBrand to fetch.
     */
    where?: Prisma.OrderBrandWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderBrands to fetch.
     */
    orderBy?: Prisma.OrderBrandOrderByWithRelationInput | Prisma.OrderBrandOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrderBrands.
     */
    cursor?: Prisma.OrderBrandWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderBrands from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderBrands.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderBrands.
     */
    distinct?: Prisma.OrderBrandScalarFieldEnum | Prisma.OrderBrandScalarFieldEnum[];
};
/**
 * OrderBrand findMany
 */
export type OrderBrandFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which OrderBrands to fetch.
     */
    where?: Prisma.OrderBrandWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderBrands to fetch.
     */
    orderBy?: Prisma.OrderBrandOrderByWithRelationInput | Prisma.OrderBrandOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OrderBrands.
     */
    cursor?: Prisma.OrderBrandWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderBrands from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderBrands.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderBrands.
     */
    distinct?: Prisma.OrderBrandScalarFieldEnum | Prisma.OrderBrandScalarFieldEnum[];
};
/**
 * OrderBrand create
 */
export type OrderBrandCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a OrderBrand.
     */
    data: Prisma.XOR<Prisma.OrderBrandCreateInput, Prisma.OrderBrandUncheckedCreateInput>;
};
/**
 * OrderBrand createMany
 */
export type OrderBrandCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderBrands.
     */
    data: Prisma.OrderBrandCreateManyInput | Prisma.OrderBrandCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * OrderBrand createManyAndReturn
 */
export type OrderBrandCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderBrand
     */
    select?: Prisma.OrderBrandSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderBrand
     */
    omit?: Prisma.OrderBrandOmit<ExtArgs> | null;
    /**
     * The data used to create many OrderBrands.
     */
    data: Prisma.OrderBrandCreateManyInput | Prisma.OrderBrandCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderBrandIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * OrderBrand update
 */
export type OrderBrandUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a OrderBrand.
     */
    data: Prisma.XOR<Prisma.OrderBrandUpdateInput, Prisma.OrderBrandUncheckedUpdateInput>;
    /**
     * Choose, which OrderBrand to update.
     */
    where: Prisma.OrderBrandWhereUniqueInput;
};
/**
 * OrderBrand updateMany
 */
export type OrderBrandUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderBrands.
     */
    data: Prisma.XOR<Prisma.OrderBrandUpdateManyMutationInput, Prisma.OrderBrandUncheckedUpdateManyInput>;
    /**
     * Filter which OrderBrands to update
     */
    where?: Prisma.OrderBrandWhereInput;
    /**
     * Limit how many OrderBrands to update.
     */
    limit?: number;
};
/**
 * OrderBrand updateManyAndReturn
 */
export type OrderBrandUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderBrand
     */
    select?: Prisma.OrderBrandSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderBrand
     */
    omit?: Prisma.OrderBrandOmit<ExtArgs> | null;
    /**
     * The data used to update OrderBrands.
     */
    data: Prisma.XOR<Prisma.OrderBrandUpdateManyMutationInput, Prisma.OrderBrandUncheckedUpdateManyInput>;
    /**
     * Filter which OrderBrands to update
     */
    where?: Prisma.OrderBrandWhereInput;
    /**
     * Limit how many OrderBrands to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderBrandIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * OrderBrand upsert
 */
export type OrderBrandUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the OrderBrand to update in case it exists.
     */
    where: Prisma.OrderBrandWhereUniqueInput;
    /**
     * In case the OrderBrand found by the `where` argument doesn't exist, create a new OrderBrand with this data.
     */
    create: Prisma.XOR<Prisma.OrderBrandCreateInput, Prisma.OrderBrandUncheckedCreateInput>;
    /**
     * In case the OrderBrand was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.OrderBrandUpdateInput, Prisma.OrderBrandUncheckedUpdateInput>;
};
/**
 * OrderBrand delete
 */
export type OrderBrandDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which OrderBrand to delete.
     */
    where: Prisma.OrderBrandWhereUniqueInput;
};
/**
 * OrderBrand deleteMany
 */
export type OrderBrandDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which OrderBrands to delete
     */
    where?: Prisma.OrderBrandWhereInput;
    /**
     * Limit how many OrderBrands to delete.
     */
    limit?: number;
};
/**
 * OrderBrand without action
 */
export type OrderBrandDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=OrderBrand.d.ts.map