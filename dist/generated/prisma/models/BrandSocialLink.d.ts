import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model BrandSocialLink
 *
 */
export type BrandSocialLinkModel = runtime.Types.Result.DefaultSelection<Prisma.$BrandSocialLinkPayload>;
export type AggregateBrandSocialLink = {
    _count: BrandSocialLinkCountAggregateOutputType | null;
    _min: BrandSocialLinkMinAggregateOutputType | null;
    _max: BrandSocialLinkMaxAggregateOutputType | null;
};
export type BrandSocialLinkMinAggregateOutputType = {
    brandId: string | null;
    platform: string | null;
    url: string | null;
};
export type BrandSocialLinkMaxAggregateOutputType = {
    brandId: string | null;
    platform: string | null;
    url: string | null;
};
export type BrandSocialLinkCountAggregateOutputType = {
    brandId: number;
    platform: number;
    url: number;
    _all: number;
};
export type BrandSocialLinkMinAggregateInputType = {
    brandId?: true;
    platform?: true;
    url?: true;
};
export type BrandSocialLinkMaxAggregateInputType = {
    brandId?: true;
    platform?: true;
    url?: true;
};
export type BrandSocialLinkCountAggregateInputType = {
    brandId?: true;
    platform?: true;
    url?: true;
    _all?: true;
};
export type BrandSocialLinkAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BrandSocialLink to aggregate.
     */
    where?: Prisma.BrandSocialLinkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BrandSocialLinks to fetch.
     */
    orderBy?: Prisma.BrandSocialLinkOrderByWithRelationInput | Prisma.BrandSocialLinkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BrandSocialLinkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BrandSocialLinks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BrandSocialLinks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BrandSocialLinks
    **/
    _count?: true | BrandSocialLinkCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BrandSocialLinkMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BrandSocialLinkMaxAggregateInputType;
};
export type GetBrandSocialLinkAggregateType<T extends BrandSocialLinkAggregateArgs> = {
    [P in keyof T & keyof AggregateBrandSocialLink]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBrandSocialLink[P]> : Prisma.GetScalarType<T[P], AggregateBrandSocialLink[P]>;
};
export type BrandSocialLinkGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandSocialLinkWhereInput;
    orderBy?: Prisma.BrandSocialLinkOrderByWithAggregationInput | Prisma.BrandSocialLinkOrderByWithAggregationInput[];
    by: Prisma.BrandSocialLinkScalarFieldEnum[] | Prisma.BrandSocialLinkScalarFieldEnum;
    having?: Prisma.BrandSocialLinkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BrandSocialLinkCountAggregateInputType | true;
    _min?: BrandSocialLinkMinAggregateInputType;
    _max?: BrandSocialLinkMaxAggregateInputType;
};
export type BrandSocialLinkGroupByOutputType = {
    brandId: string;
    platform: string;
    url: string;
    _count: BrandSocialLinkCountAggregateOutputType | null;
    _min: BrandSocialLinkMinAggregateOutputType | null;
    _max: BrandSocialLinkMaxAggregateOutputType | null;
};
export type GetBrandSocialLinkGroupByPayload<T extends BrandSocialLinkGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BrandSocialLinkGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BrandSocialLinkGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BrandSocialLinkGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BrandSocialLinkGroupByOutputType[P]>;
}>>;
export type BrandSocialLinkWhereInput = {
    AND?: Prisma.BrandSocialLinkWhereInput | Prisma.BrandSocialLinkWhereInput[];
    OR?: Prisma.BrandSocialLinkWhereInput[];
    NOT?: Prisma.BrandSocialLinkWhereInput | Prisma.BrandSocialLinkWhereInput[];
    brandId?: Prisma.UuidFilter<"BrandSocialLink"> | string;
    platform?: Prisma.StringFilter<"BrandSocialLink"> | string;
    url?: Prisma.StringFilter<"BrandSocialLink"> | string;
    brand?: Prisma.XOR<Prisma.BrandScalarRelationFilter, Prisma.BrandWhereInput>;
};
export type BrandSocialLinkOrderByWithRelationInput = {
    brandId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    brand?: Prisma.BrandOrderByWithRelationInput;
};
export type BrandSocialLinkWhereUniqueInput = Prisma.AtLeast<{
    brandId_platform?: Prisma.BrandSocialLinkBrandIdPlatformCompoundUniqueInput;
    AND?: Prisma.BrandSocialLinkWhereInput | Prisma.BrandSocialLinkWhereInput[];
    OR?: Prisma.BrandSocialLinkWhereInput[];
    NOT?: Prisma.BrandSocialLinkWhereInput | Prisma.BrandSocialLinkWhereInput[];
    brandId?: Prisma.UuidFilter<"BrandSocialLink"> | string;
    platform?: Prisma.StringFilter<"BrandSocialLink"> | string;
    url?: Prisma.StringFilter<"BrandSocialLink"> | string;
    brand?: Prisma.XOR<Prisma.BrandScalarRelationFilter, Prisma.BrandWhereInput>;
}, "brandId_platform">;
export type BrandSocialLinkOrderByWithAggregationInput = {
    brandId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    _count?: Prisma.BrandSocialLinkCountOrderByAggregateInput;
    _max?: Prisma.BrandSocialLinkMaxOrderByAggregateInput;
    _min?: Prisma.BrandSocialLinkMinOrderByAggregateInput;
};
export type BrandSocialLinkScalarWhereWithAggregatesInput = {
    AND?: Prisma.BrandSocialLinkScalarWhereWithAggregatesInput | Prisma.BrandSocialLinkScalarWhereWithAggregatesInput[];
    OR?: Prisma.BrandSocialLinkScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BrandSocialLinkScalarWhereWithAggregatesInput | Prisma.BrandSocialLinkScalarWhereWithAggregatesInput[];
    brandId?: Prisma.UuidWithAggregatesFilter<"BrandSocialLink"> | string;
    platform?: Prisma.StringWithAggregatesFilter<"BrandSocialLink"> | string;
    url?: Prisma.StringWithAggregatesFilter<"BrandSocialLink"> | string;
};
export type BrandSocialLinkCreateInput = {
    platform: string;
    url: string;
    brand: Prisma.BrandCreateNestedOneWithoutSocialLinksInput;
};
export type BrandSocialLinkUncheckedCreateInput = {
    brandId: string;
    platform: string;
    url: string;
};
export type BrandSocialLinkUpdateInput = {
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.BrandUpdateOneRequiredWithoutSocialLinksNestedInput;
};
export type BrandSocialLinkUncheckedUpdateInput = {
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BrandSocialLinkCreateManyInput = {
    brandId: string;
    platform: string;
    url: string;
};
export type BrandSocialLinkUpdateManyMutationInput = {
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BrandSocialLinkUncheckedUpdateManyInput = {
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BrandSocialLinkListRelationFilter = {
    every?: Prisma.BrandSocialLinkWhereInput;
    some?: Prisma.BrandSocialLinkWhereInput;
    none?: Prisma.BrandSocialLinkWhereInput;
};
export type BrandSocialLinkOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BrandSocialLinkBrandIdPlatformCompoundUniqueInput = {
    brandId: string;
    platform: string;
};
export type BrandSocialLinkCountOrderByAggregateInput = {
    brandId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
};
export type BrandSocialLinkMaxOrderByAggregateInput = {
    brandId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
};
export type BrandSocialLinkMinOrderByAggregateInput = {
    brandId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
};
export type BrandSocialLinkCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.BrandSocialLinkCreateWithoutBrandInput, Prisma.BrandSocialLinkUncheckedCreateWithoutBrandInput> | Prisma.BrandSocialLinkCreateWithoutBrandInput[] | Prisma.BrandSocialLinkUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandSocialLinkCreateOrConnectWithoutBrandInput | Prisma.BrandSocialLinkCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.BrandSocialLinkCreateManyBrandInputEnvelope;
    connect?: Prisma.BrandSocialLinkWhereUniqueInput | Prisma.BrandSocialLinkWhereUniqueInput[];
};
export type BrandSocialLinkUncheckedCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.BrandSocialLinkCreateWithoutBrandInput, Prisma.BrandSocialLinkUncheckedCreateWithoutBrandInput> | Prisma.BrandSocialLinkCreateWithoutBrandInput[] | Prisma.BrandSocialLinkUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandSocialLinkCreateOrConnectWithoutBrandInput | Prisma.BrandSocialLinkCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.BrandSocialLinkCreateManyBrandInputEnvelope;
    connect?: Prisma.BrandSocialLinkWhereUniqueInput | Prisma.BrandSocialLinkWhereUniqueInput[];
};
export type BrandSocialLinkUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.BrandSocialLinkCreateWithoutBrandInput, Prisma.BrandSocialLinkUncheckedCreateWithoutBrandInput> | Prisma.BrandSocialLinkCreateWithoutBrandInput[] | Prisma.BrandSocialLinkUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandSocialLinkCreateOrConnectWithoutBrandInput | Prisma.BrandSocialLinkCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.BrandSocialLinkUpsertWithWhereUniqueWithoutBrandInput | Prisma.BrandSocialLinkUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.BrandSocialLinkCreateManyBrandInputEnvelope;
    set?: Prisma.BrandSocialLinkWhereUniqueInput | Prisma.BrandSocialLinkWhereUniqueInput[];
    disconnect?: Prisma.BrandSocialLinkWhereUniqueInput | Prisma.BrandSocialLinkWhereUniqueInput[];
    delete?: Prisma.BrandSocialLinkWhereUniqueInput | Prisma.BrandSocialLinkWhereUniqueInput[];
    connect?: Prisma.BrandSocialLinkWhereUniqueInput | Prisma.BrandSocialLinkWhereUniqueInput[];
    update?: Prisma.BrandSocialLinkUpdateWithWhereUniqueWithoutBrandInput | Prisma.BrandSocialLinkUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.BrandSocialLinkUpdateManyWithWhereWithoutBrandInput | Prisma.BrandSocialLinkUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.BrandSocialLinkScalarWhereInput | Prisma.BrandSocialLinkScalarWhereInput[];
};
export type BrandSocialLinkUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.BrandSocialLinkCreateWithoutBrandInput, Prisma.BrandSocialLinkUncheckedCreateWithoutBrandInput> | Prisma.BrandSocialLinkCreateWithoutBrandInput[] | Prisma.BrandSocialLinkUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandSocialLinkCreateOrConnectWithoutBrandInput | Prisma.BrandSocialLinkCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.BrandSocialLinkUpsertWithWhereUniqueWithoutBrandInput | Prisma.BrandSocialLinkUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.BrandSocialLinkCreateManyBrandInputEnvelope;
    set?: Prisma.BrandSocialLinkWhereUniqueInput | Prisma.BrandSocialLinkWhereUniqueInput[];
    disconnect?: Prisma.BrandSocialLinkWhereUniqueInput | Prisma.BrandSocialLinkWhereUniqueInput[];
    delete?: Prisma.BrandSocialLinkWhereUniqueInput | Prisma.BrandSocialLinkWhereUniqueInput[];
    connect?: Prisma.BrandSocialLinkWhereUniqueInput | Prisma.BrandSocialLinkWhereUniqueInput[];
    update?: Prisma.BrandSocialLinkUpdateWithWhereUniqueWithoutBrandInput | Prisma.BrandSocialLinkUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.BrandSocialLinkUpdateManyWithWhereWithoutBrandInput | Prisma.BrandSocialLinkUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.BrandSocialLinkScalarWhereInput | Prisma.BrandSocialLinkScalarWhereInput[];
};
export type BrandSocialLinkCreateWithoutBrandInput = {
    platform: string;
    url: string;
};
export type BrandSocialLinkUncheckedCreateWithoutBrandInput = {
    platform: string;
    url: string;
};
export type BrandSocialLinkCreateOrConnectWithoutBrandInput = {
    where: Prisma.BrandSocialLinkWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandSocialLinkCreateWithoutBrandInput, Prisma.BrandSocialLinkUncheckedCreateWithoutBrandInput>;
};
export type BrandSocialLinkCreateManyBrandInputEnvelope = {
    data: Prisma.BrandSocialLinkCreateManyBrandInput | Prisma.BrandSocialLinkCreateManyBrandInput[];
    skipDuplicates?: boolean;
};
export type BrandSocialLinkUpsertWithWhereUniqueWithoutBrandInput = {
    where: Prisma.BrandSocialLinkWhereUniqueInput;
    update: Prisma.XOR<Prisma.BrandSocialLinkUpdateWithoutBrandInput, Prisma.BrandSocialLinkUncheckedUpdateWithoutBrandInput>;
    create: Prisma.XOR<Prisma.BrandSocialLinkCreateWithoutBrandInput, Prisma.BrandSocialLinkUncheckedCreateWithoutBrandInput>;
};
export type BrandSocialLinkUpdateWithWhereUniqueWithoutBrandInput = {
    where: Prisma.BrandSocialLinkWhereUniqueInput;
    data: Prisma.XOR<Prisma.BrandSocialLinkUpdateWithoutBrandInput, Prisma.BrandSocialLinkUncheckedUpdateWithoutBrandInput>;
};
export type BrandSocialLinkUpdateManyWithWhereWithoutBrandInput = {
    where: Prisma.BrandSocialLinkScalarWhereInput;
    data: Prisma.XOR<Prisma.BrandSocialLinkUpdateManyMutationInput, Prisma.BrandSocialLinkUncheckedUpdateManyWithoutBrandInput>;
};
export type BrandSocialLinkScalarWhereInput = {
    AND?: Prisma.BrandSocialLinkScalarWhereInput | Prisma.BrandSocialLinkScalarWhereInput[];
    OR?: Prisma.BrandSocialLinkScalarWhereInput[];
    NOT?: Prisma.BrandSocialLinkScalarWhereInput | Prisma.BrandSocialLinkScalarWhereInput[];
    brandId?: Prisma.UuidFilter<"BrandSocialLink"> | string;
    platform?: Prisma.StringFilter<"BrandSocialLink"> | string;
    url?: Prisma.StringFilter<"BrandSocialLink"> | string;
};
export type BrandSocialLinkCreateManyBrandInput = {
    platform: string;
    url: string;
};
export type BrandSocialLinkUpdateWithoutBrandInput = {
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BrandSocialLinkUncheckedUpdateWithoutBrandInput = {
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BrandSocialLinkUncheckedUpdateManyWithoutBrandInput = {
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BrandSocialLinkSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    brandId?: boolean;
    platform?: boolean;
    url?: boolean;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brandSocialLink"]>;
export type BrandSocialLinkSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    brandId?: boolean;
    platform?: boolean;
    url?: boolean;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brandSocialLink"]>;
export type BrandSocialLinkSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    brandId?: boolean;
    platform?: boolean;
    url?: boolean;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brandSocialLink"]>;
export type BrandSocialLinkSelectScalar = {
    brandId?: boolean;
    platform?: boolean;
    url?: boolean;
};
export type BrandSocialLinkOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"brandId" | "platform" | "url", ExtArgs["result"]["brandSocialLink"]>;
export type BrandSocialLinkInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
};
export type BrandSocialLinkIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
};
export type BrandSocialLinkIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
};
export type $BrandSocialLinkPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BrandSocialLink";
    objects: {
        brand: Prisma.$BrandPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        brandId: string;
        platform: string;
        url: string;
    }, ExtArgs["result"]["brandSocialLink"]>;
    composites: {};
};
export type BrandSocialLinkGetPayload<S extends boolean | null | undefined | BrandSocialLinkDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BrandSocialLinkPayload, S>;
export type BrandSocialLinkCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BrandSocialLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BrandSocialLinkCountAggregateInputType | true;
};
export interface BrandSocialLinkDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BrandSocialLink'];
        meta: {
            name: 'BrandSocialLink';
        };
    };
    /**
     * Find zero or one BrandSocialLink that matches the filter.
     * @param {BrandSocialLinkFindUniqueArgs} args - Arguments to find a BrandSocialLink
     * @example
     * // Get one BrandSocialLink
     * const brandSocialLink = await prisma.brandSocialLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandSocialLinkFindUniqueArgs>(args: Prisma.SelectSubset<T, BrandSocialLinkFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BrandSocialLinkClient<runtime.Types.Result.GetResult<Prisma.$BrandSocialLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BrandSocialLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandSocialLinkFindUniqueOrThrowArgs} args - Arguments to find a BrandSocialLink
     * @example
     * // Get one BrandSocialLink
     * const brandSocialLink = await prisma.brandSocialLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandSocialLinkFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BrandSocialLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandSocialLinkClient<runtime.Types.Result.GetResult<Prisma.$BrandSocialLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BrandSocialLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandSocialLinkFindFirstArgs} args - Arguments to find a BrandSocialLink
     * @example
     * // Get one BrandSocialLink
     * const brandSocialLink = await prisma.brandSocialLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandSocialLinkFindFirstArgs>(args?: Prisma.SelectSubset<T, BrandSocialLinkFindFirstArgs<ExtArgs>>): Prisma.Prisma__BrandSocialLinkClient<runtime.Types.Result.GetResult<Prisma.$BrandSocialLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BrandSocialLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandSocialLinkFindFirstOrThrowArgs} args - Arguments to find a BrandSocialLink
     * @example
     * // Get one BrandSocialLink
     * const brandSocialLink = await prisma.brandSocialLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandSocialLinkFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BrandSocialLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandSocialLinkClient<runtime.Types.Result.GetResult<Prisma.$BrandSocialLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BrandSocialLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandSocialLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrandSocialLinks
     * const brandSocialLinks = await prisma.brandSocialLink.findMany()
     *
     * // Get first 10 BrandSocialLinks
     * const brandSocialLinks = await prisma.brandSocialLink.findMany({ take: 10 })
     *
     * // Only select the `brandId`
     * const brandSocialLinkWithBrandIdOnly = await prisma.brandSocialLink.findMany({ select: { brandId: true } })
     *
     */
    findMany<T extends BrandSocialLinkFindManyArgs>(args?: Prisma.SelectSubset<T, BrandSocialLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandSocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BrandSocialLink.
     * @param {BrandSocialLinkCreateArgs} args - Arguments to create a BrandSocialLink.
     * @example
     * // Create one BrandSocialLink
     * const BrandSocialLink = await prisma.brandSocialLink.create({
     *   data: {
     *     // ... data to create a BrandSocialLink
     *   }
     * })
     *
     */
    create<T extends BrandSocialLinkCreateArgs>(args: Prisma.SelectSubset<T, BrandSocialLinkCreateArgs<ExtArgs>>): Prisma.Prisma__BrandSocialLinkClient<runtime.Types.Result.GetResult<Prisma.$BrandSocialLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BrandSocialLinks.
     * @param {BrandSocialLinkCreateManyArgs} args - Arguments to create many BrandSocialLinks.
     * @example
     * // Create many BrandSocialLinks
     * const brandSocialLink = await prisma.brandSocialLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BrandSocialLinkCreateManyArgs>(args?: Prisma.SelectSubset<T, BrandSocialLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BrandSocialLinks and returns the data saved in the database.
     * @param {BrandSocialLinkCreateManyAndReturnArgs} args - Arguments to create many BrandSocialLinks.
     * @example
     * // Create many BrandSocialLinks
     * const brandSocialLink = await prisma.brandSocialLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BrandSocialLinks and only return the `brandId`
     * const brandSocialLinkWithBrandIdOnly = await prisma.brandSocialLink.createManyAndReturn({
     *   select: { brandId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BrandSocialLinkCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BrandSocialLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandSocialLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BrandSocialLink.
     * @param {BrandSocialLinkDeleteArgs} args - Arguments to delete one BrandSocialLink.
     * @example
     * // Delete one BrandSocialLink
     * const BrandSocialLink = await prisma.brandSocialLink.delete({
     *   where: {
     *     // ... filter to delete one BrandSocialLink
     *   }
     * })
     *
     */
    delete<T extends BrandSocialLinkDeleteArgs>(args: Prisma.SelectSubset<T, BrandSocialLinkDeleteArgs<ExtArgs>>): Prisma.Prisma__BrandSocialLinkClient<runtime.Types.Result.GetResult<Prisma.$BrandSocialLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BrandSocialLink.
     * @param {BrandSocialLinkUpdateArgs} args - Arguments to update one BrandSocialLink.
     * @example
     * // Update one BrandSocialLink
     * const brandSocialLink = await prisma.brandSocialLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BrandSocialLinkUpdateArgs>(args: Prisma.SelectSubset<T, BrandSocialLinkUpdateArgs<ExtArgs>>): Prisma.Prisma__BrandSocialLinkClient<runtime.Types.Result.GetResult<Prisma.$BrandSocialLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BrandSocialLinks.
     * @param {BrandSocialLinkDeleteManyArgs} args - Arguments to filter BrandSocialLinks to delete.
     * @example
     * // Delete a few BrandSocialLinks
     * const { count } = await prisma.brandSocialLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BrandSocialLinkDeleteManyArgs>(args?: Prisma.SelectSubset<T, BrandSocialLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BrandSocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandSocialLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrandSocialLinks
     * const brandSocialLink = await prisma.brandSocialLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BrandSocialLinkUpdateManyArgs>(args: Prisma.SelectSubset<T, BrandSocialLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BrandSocialLinks and returns the data updated in the database.
     * @param {BrandSocialLinkUpdateManyAndReturnArgs} args - Arguments to update many BrandSocialLinks.
     * @example
     * // Update many BrandSocialLinks
     * const brandSocialLink = await prisma.brandSocialLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BrandSocialLinks and only return the `brandId`
     * const brandSocialLinkWithBrandIdOnly = await prisma.brandSocialLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends BrandSocialLinkUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BrandSocialLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandSocialLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BrandSocialLink.
     * @param {BrandSocialLinkUpsertArgs} args - Arguments to update or create a BrandSocialLink.
     * @example
     * // Update or create a BrandSocialLink
     * const brandSocialLink = await prisma.brandSocialLink.upsert({
     *   create: {
     *     // ... data to create a BrandSocialLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrandSocialLink we want to update
     *   }
     * })
     */
    upsert<T extends BrandSocialLinkUpsertArgs>(args: Prisma.SelectSubset<T, BrandSocialLinkUpsertArgs<ExtArgs>>): Prisma.Prisma__BrandSocialLinkClient<runtime.Types.Result.GetResult<Prisma.$BrandSocialLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BrandSocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandSocialLinkCountArgs} args - Arguments to filter BrandSocialLinks to count.
     * @example
     * // Count the number of BrandSocialLinks
     * const count = await prisma.brandSocialLink.count({
     *   where: {
     *     // ... the filter for the BrandSocialLinks we want to count
     *   }
     * })
    **/
    count<T extends BrandSocialLinkCountArgs>(args?: Prisma.Subset<T, BrandSocialLinkCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BrandSocialLinkCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BrandSocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandSocialLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandSocialLinkAggregateArgs>(args: Prisma.Subset<T, BrandSocialLinkAggregateArgs>): Prisma.PrismaPromise<GetBrandSocialLinkAggregateType<T>>;
    /**
     * Group by BrandSocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandSocialLinkGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BrandSocialLinkGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BrandSocialLinkGroupByArgs['orderBy'];
    } : {
        orderBy?: BrandSocialLinkGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BrandSocialLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandSocialLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BrandSocialLink model
     */
    readonly fields: BrandSocialLinkFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BrandSocialLink.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BrandSocialLinkClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the BrandSocialLink model
 */
export interface BrandSocialLinkFieldRefs {
    readonly brandId: Prisma.FieldRef<"BrandSocialLink", 'String'>;
    readonly platform: Prisma.FieldRef<"BrandSocialLink", 'String'>;
    readonly url: Prisma.FieldRef<"BrandSocialLink", 'String'>;
}
/**
 * BrandSocialLink findUnique
 */
export type BrandSocialLinkFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BrandSocialLink to fetch.
     */
    where: Prisma.BrandSocialLinkWhereUniqueInput;
};
/**
 * BrandSocialLink findUniqueOrThrow
 */
export type BrandSocialLinkFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BrandSocialLink to fetch.
     */
    where: Prisma.BrandSocialLinkWhereUniqueInput;
};
/**
 * BrandSocialLink findFirst
 */
export type BrandSocialLinkFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BrandSocialLink to fetch.
     */
    where?: Prisma.BrandSocialLinkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BrandSocialLinks to fetch.
     */
    orderBy?: Prisma.BrandSocialLinkOrderByWithRelationInput | Prisma.BrandSocialLinkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BrandSocialLinks.
     */
    cursor?: Prisma.BrandSocialLinkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BrandSocialLinks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BrandSocialLinks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BrandSocialLinks.
     */
    distinct?: Prisma.BrandSocialLinkScalarFieldEnum | Prisma.BrandSocialLinkScalarFieldEnum[];
};
/**
 * BrandSocialLink findFirstOrThrow
 */
export type BrandSocialLinkFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BrandSocialLink to fetch.
     */
    where?: Prisma.BrandSocialLinkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BrandSocialLinks to fetch.
     */
    orderBy?: Prisma.BrandSocialLinkOrderByWithRelationInput | Prisma.BrandSocialLinkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BrandSocialLinks.
     */
    cursor?: Prisma.BrandSocialLinkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BrandSocialLinks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BrandSocialLinks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BrandSocialLinks.
     */
    distinct?: Prisma.BrandSocialLinkScalarFieldEnum | Prisma.BrandSocialLinkScalarFieldEnum[];
};
/**
 * BrandSocialLink findMany
 */
export type BrandSocialLinkFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BrandSocialLinks to fetch.
     */
    where?: Prisma.BrandSocialLinkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BrandSocialLinks to fetch.
     */
    orderBy?: Prisma.BrandSocialLinkOrderByWithRelationInput | Prisma.BrandSocialLinkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BrandSocialLinks.
     */
    cursor?: Prisma.BrandSocialLinkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BrandSocialLinks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BrandSocialLinks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BrandSocialLinks.
     */
    distinct?: Prisma.BrandSocialLinkScalarFieldEnum | Prisma.BrandSocialLinkScalarFieldEnum[];
};
/**
 * BrandSocialLink create
 */
export type BrandSocialLinkCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a BrandSocialLink.
     */
    data: Prisma.XOR<Prisma.BrandSocialLinkCreateInput, Prisma.BrandSocialLinkUncheckedCreateInput>;
};
/**
 * BrandSocialLink createMany
 */
export type BrandSocialLinkCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrandSocialLinks.
     */
    data: Prisma.BrandSocialLinkCreateManyInput | Prisma.BrandSocialLinkCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BrandSocialLink createManyAndReturn
 */
export type BrandSocialLinkCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandSocialLink
     */
    select?: Prisma.BrandSocialLinkSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandSocialLink
     */
    omit?: Prisma.BrandSocialLinkOmit<ExtArgs> | null;
    /**
     * The data used to create many BrandSocialLinks.
     */
    data: Prisma.BrandSocialLinkCreateManyInput | Prisma.BrandSocialLinkCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandSocialLinkIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BrandSocialLink update
 */
export type BrandSocialLinkUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a BrandSocialLink.
     */
    data: Prisma.XOR<Prisma.BrandSocialLinkUpdateInput, Prisma.BrandSocialLinkUncheckedUpdateInput>;
    /**
     * Choose, which BrandSocialLink to update.
     */
    where: Prisma.BrandSocialLinkWhereUniqueInput;
};
/**
 * BrandSocialLink updateMany
 */
export type BrandSocialLinkUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BrandSocialLinks.
     */
    data: Prisma.XOR<Prisma.BrandSocialLinkUpdateManyMutationInput, Prisma.BrandSocialLinkUncheckedUpdateManyInput>;
    /**
     * Filter which BrandSocialLinks to update
     */
    where?: Prisma.BrandSocialLinkWhereInput;
    /**
     * Limit how many BrandSocialLinks to update.
     */
    limit?: number;
};
/**
 * BrandSocialLink updateManyAndReturn
 */
export type BrandSocialLinkUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandSocialLink
     */
    select?: Prisma.BrandSocialLinkSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandSocialLink
     */
    omit?: Prisma.BrandSocialLinkOmit<ExtArgs> | null;
    /**
     * The data used to update BrandSocialLinks.
     */
    data: Prisma.XOR<Prisma.BrandSocialLinkUpdateManyMutationInput, Prisma.BrandSocialLinkUncheckedUpdateManyInput>;
    /**
     * Filter which BrandSocialLinks to update
     */
    where?: Prisma.BrandSocialLinkWhereInput;
    /**
     * Limit how many BrandSocialLinks to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandSocialLinkIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BrandSocialLink upsert
 */
export type BrandSocialLinkUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the BrandSocialLink to update in case it exists.
     */
    where: Prisma.BrandSocialLinkWhereUniqueInput;
    /**
     * In case the BrandSocialLink found by the `where` argument doesn't exist, create a new BrandSocialLink with this data.
     */
    create: Prisma.XOR<Prisma.BrandSocialLinkCreateInput, Prisma.BrandSocialLinkUncheckedCreateInput>;
    /**
     * In case the BrandSocialLink was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BrandSocialLinkUpdateInput, Prisma.BrandSocialLinkUncheckedUpdateInput>;
};
/**
 * BrandSocialLink delete
 */
export type BrandSocialLinkDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which BrandSocialLink to delete.
     */
    where: Prisma.BrandSocialLinkWhereUniqueInput;
};
/**
 * BrandSocialLink deleteMany
 */
export type BrandSocialLinkDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BrandSocialLinks to delete
     */
    where?: Prisma.BrandSocialLinkWhereInput;
    /**
     * Limit how many BrandSocialLinks to delete.
     */
    limit?: number;
};
/**
 * BrandSocialLink without action
 */
export type BrandSocialLinkDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=BrandSocialLink.d.ts.map