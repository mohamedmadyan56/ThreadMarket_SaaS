import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model wishlist
 *
 */
export type wishlistModel = runtime.Types.Result.DefaultSelection<Prisma.$wishlistPayload>;
export type AggregateWishlist = {
    _count: WishlistCountAggregateOutputType | null;
    _min: WishlistMinAggregateOutputType | null;
    _max: WishlistMaxAggregateOutputType | null;
};
export type WishlistMinAggregateOutputType = {
    userId: string | null;
};
export type WishlistMaxAggregateOutputType = {
    userId: string | null;
};
export type WishlistCountAggregateOutputType = {
    userId: number;
    _all: number;
};
export type WishlistMinAggregateInputType = {
    userId?: true;
};
export type WishlistMaxAggregateInputType = {
    userId?: true;
};
export type WishlistCountAggregateInputType = {
    userId?: true;
    _all?: true;
};
export type WishlistAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which wishlist to aggregate.
     */
    where?: Prisma.wishlistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlists to fetch.
     */
    orderBy?: Prisma.wishlistOrderByWithRelationInput | Prisma.wishlistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.wishlistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned wishlists
    **/
    _count?: true | WishlistCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: WishlistMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: WishlistMaxAggregateInputType;
};
export type GetWishlistAggregateType<T extends WishlistAggregateArgs> = {
    [P in keyof T & keyof AggregateWishlist]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWishlist[P]> : Prisma.GetScalarType<T[P], AggregateWishlist[P]>;
};
export type wishlistGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlistWhereInput;
    orderBy?: Prisma.wishlistOrderByWithAggregationInput | Prisma.wishlistOrderByWithAggregationInput[];
    by: Prisma.WishlistScalarFieldEnum[] | Prisma.WishlistScalarFieldEnum;
    having?: Prisma.wishlistScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WishlistCountAggregateInputType | true;
    _min?: WishlistMinAggregateInputType;
    _max?: WishlistMaxAggregateInputType;
};
export type WishlistGroupByOutputType = {
    userId: string;
    _count: WishlistCountAggregateOutputType | null;
    _min: WishlistMinAggregateOutputType | null;
    _max: WishlistMaxAggregateOutputType | null;
};
export type GetWishlistGroupByPayload<T extends wishlistGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WishlistGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WishlistGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WishlistGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WishlistGroupByOutputType[P]>;
}>>;
export type wishlistWhereInput = {
    AND?: Prisma.wishlistWhereInput | Prisma.wishlistWhereInput[];
    OR?: Prisma.wishlistWhereInput[];
    NOT?: Prisma.wishlistWhereInput | Prisma.wishlistWhereInput[];
    userId?: Prisma.UuidFilter<"wishlist"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    products?: Prisma.ProductListRelationFilter;
};
export type wishlistOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    products?: Prisma.ProductOrderByRelationAggregateInput;
};
export type wishlistWhereUniqueInput = Prisma.AtLeast<{
    userId?: string;
    AND?: Prisma.wishlistWhereInput | Prisma.wishlistWhereInput[];
    OR?: Prisma.wishlistWhereInput[];
    NOT?: Prisma.wishlistWhereInput | Prisma.wishlistWhereInput[];
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    products?: Prisma.ProductListRelationFilter;
}, "userId" | "userId">;
export type wishlistOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    _count?: Prisma.wishlistCountOrderByAggregateInput;
    _max?: Prisma.wishlistMaxOrderByAggregateInput;
    _min?: Prisma.wishlistMinOrderByAggregateInput;
};
export type wishlistScalarWhereWithAggregatesInput = {
    AND?: Prisma.wishlistScalarWhereWithAggregatesInput | Prisma.wishlistScalarWhereWithAggregatesInput[];
    OR?: Prisma.wishlistScalarWhereWithAggregatesInput[];
    NOT?: Prisma.wishlistScalarWhereWithAggregatesInput | Prisma.wishlistScalarWhereWithAggregatesInput[];
    userId?: Prisma.UuidWithAggregatesFilter<"wishlist"> | string;
};
export type wishlistCreateInput = {
    user: Prisma.UserCreateNestedOneWithoutWishlistInput;
    products?: Prisma.ProductCreateNestedManyWithoutWishlistInput;
};
export type wishlistUncheckedCreateInput = {
    userId: string;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutWishlistInput;
};
export type wishlistUpdateInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutWishlistNestedInput;
    products?: Prisma.ProductUpdateManyWithoutWishlistNestedInput;
};
export type wishlistUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    products?: Prisma.ProductUncheckedUpdateManyWithoutWishlistNestedInput;
};
export type wishlistCreateManyInput = {
    userId: string;
};
export type wishlistUpdateManyMutationInput = {};
export type wishlistUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type WishlistNullableScalarRelationFilter = {
    is?: Prisma.wishlistWhereInput | null;
    isNot?: Prisma.wishlistWhereInput | null;
};
export type wishlistCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
};
export type wishlistMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
};
export type wishlistMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
};
export type wishlistCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.wishlistCreateWithoutUserInput, Prisma.wishlistUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.wishlistCreateOrConnectWithoutUserInput;
    connect?: Prisma.wishlistWhereUniqueInput;
};
export type wishlistUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.wishlistCreateWithoutUserInput, Prisma.wishlistUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.wishlistCreateOrConnectWithoutUserInput;
    connect?: Prisma.wishlistWhereUniqueInput;
};
export type wishlistUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.wishlistCreateWithoutUserInput, Prisma.wishlistUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.wishlistCreateOrConnectWithoutUserInput;
    upsert?: Prisma.wishlistUpsertWithoutUserInput;
    disconnect?: Prisma.wishlistWhereInput | boolean;
    delete?: Prisma.wishlistWhereInput | boolean;
    connect?: Prisma.wishlistWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.wishlistUpdateToOneWithWhereWithoutUserInput, Prisma.wishlistUpdateWithoutUserInput>, Prisma.wishlistUncheckedUpdateWithoutUserInput>;
};
export type wishlistUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.wishlistCreateWithoutUserInput, Prisma.wishlistUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.wishlistCreateOrConnectWithoutUserInput;
    upsert?: Prisma.wishlistUpsertWithoutUserInput;
    disconnect?: Prisma.wishlistWhereInput | boolean;
    delete?: Prisma.wishlistWhereInput | boolean;
    connect?: Prisma.wishlistWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.wishlistUpdateToOneWithWhereWithoutUserInput, Prisma.wishlistUpdateWithoutUserInput>, Prisma.wishlistUncheckedUpdateWithoutUserInput>;
};
export type wishlistCreateNestedOneWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.wishlistCreateWithoutProductsInput, Prisma.wishlistUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.wishlistCreateOrConnectWithoutProductsInput;
    connect?: Prisma.wishlistWhereUniqueInput;
};
export type wishlistUpdateOneWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlistCreateWithoutProductsInput, Prisma.wishlistUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.wishlistCreateOrConnectWithoutProductsInput;
    upsert?: Prisma.wishlistUpsertWithoutProductsInput;
    disconnect?: Prisma.wishlistWhereInput | boolean;
    delete?: Prisma.wishlistWhereInput | boolean;
    connect?: Prisma.wishlistWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.wishlistUpdateToOneWithWhereWithoutProductsInput, Prisma.wishlistUpdateWithoutProductsInput>, Prisma.wishlistUncheckedUpdateWithoutProductsInput>;
};
export type wishlistCreateWithoutUserInput = {
    products?: Prisma.ProductCreateNestedManyWithoutWishlistInput;
};
export type wishlistUncheckedCreateWithoutUserInput = {
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutWishlistInput;
};
export type wishlistCreateOrConnectWithoutUserInput = {
    where: Prisma.wishlistWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlistCreateWithoutUserInput, Prisma.wishlistUncheckedCreateWithoutUserInput>;
};
export type wishlistUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.wishlistUpdateWithoutUserInput, Prisma.wishlistUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.wishlistCreateWithoutUserInput, Prisma.wishlistUncheckedCreateWithoutUserInput>;
    where?: Prisma.wishlistWhereInput;
};
export type wishlistUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.wishlistWhereInput;
    data: Prisma.XOR<Prisma.wishlistUpdateWithoutUserInput, Prisma.wishlistUncheckedUpdateWithoutUserInput>;
};
export type wishlistUpdateWithoutUserInput = {
    products?: Prisma.ProductUpdateManyWithoutWishlistNestedInput;
};
export type wishlistUncheckedUpdateWithoutUserInput = {
    products?: Prisma.ProductUncheckedUpdateManyWithoutWishlistNestedInput;
};
export type wishlistCreateWithoutProductsInput = {
    user: Prisma.UserCreateNestedOneWithoutWishlistInput;
};
export type wishlistUncheckedCreateWithoutProductsInput = {
    userId: string;
};
export type wishlistCreateOrConnectWithoutProductsInput = {
    where: Prisma.wishlistWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlistCreateWithoutProductsInput, Prisma.wishlistUncheckedCreateWithoutProductsInput>;
};
export type wishlistUpsertWithoutProductsInput = {
    update: Prisma.XOR<Prisma.wishlistUpdateWithoutProductsInput, Prisma.wishlistUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.wishlistCreateWithoutProductsInput, Prisma.wishlistUncheckedCreateWithoutProductsInput>;
    where?: Prisma.wishlistWhereInput;
};
export type wishlistUpdateToOneWithWhereWithoutProductsInput = {
    where?: Prisma.wishlistWhereInput;
    data: Prisma.XOR<Prisma.wishlistUpdateWithoutProductsInput, Prisma.wishlistUncheckedUpdateWithoutProductsInput>;
};
export type wishlistUpdateWithoutProductsInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutWishlistNestedInput;
};
export type wishlistUncheckedUpdateWithoutProductsInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type WishlistCountOutputType
 */
export type WishlistCountOutputType = {
    products: number;
};
export type WishlistCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | WishlistCountOutputTypeCountProductsArgs;
};
/**
 * WishlistCountOutputType without action
 */
export type WishlistCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistCountOutputType
     */
    select?: Prisma.WishlistCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * WishlistCountOutputType without action
 */
export type WishlistCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
export type wishlistSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    products?: boolean | Prisma.wishlist$productsArgs<ExtArgs>;
    _count?: boolean | Prisma.WishlistCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist"]>;
export type wishlistSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist"]>;
export type wishlistSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist"]>;
export type wishlistSelectScalar = {
    userId?: boolean;
};
export type wishlistOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId", ExtArgs["result"]["wishlist"]>;
export type wishlistInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    products?: boolean | Prisma.wishlist$productsArgs<ExtArgs>;
    _count?: boolean | Prisma.WishlistCountOutputTypeDefaultArgs<ExtArgs>;
};
export type wishlistIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type wishlistIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $wishlistPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "wishlist";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        products: Prisma.$ProductPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
    }, ExtArgs["result"]["wishlist"]>;
    composites: {};
};
export type wishlistGetPayload<S extends boolean | null | undefined | wishlistDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$wishlistPayload, S>;
export type wishlistCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<wishlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WishlistCountAggregateInputType | true;
};
export interface wishlistDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['wishlist'];
        meta: {
            name: 'wishlist';
        };
    };
    /**
     * Find zero or one Wishlist that matches the filter.
     * @param {wishlistFindUniqueArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends wishlistFindUniqueArgs>(args: Prisma.SelectSubset<T, wishlistFindUniqueArgs<ExtArgs>>): Prisma.Prisma__wishlistClient<runtime.Types.Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Wishlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {wishlistFindUniqueOrThrowArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends wishlistFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, wishlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__wishlistClient<runtime.Types.Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Wishlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistFindFirstArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends wishlistFindFirstArgs>(args?: Prisma.SelectSubset<T, wishlistFindFirstArgs<ExtArgs>>): Prisma.Prisma__wishlistClient<runtime.Types.Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Wishlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistFindFirstOrThrowArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends wishlistFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, wishlistFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__wishlistClient<runtime.Types.Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Wishlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wishlists
     * const wishlists = await prisma.wishlist.findMany()
     *
     * // Get first 10 Wishlists
     * const wishlists = await prisma.wishlist.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const wishlistWithUserIdOnly = await prisma.wishlist.findMany({ select: { userId: true } })
     *
     */
    findMany<T extends wishlistFindManyArgs>(args?: Prisma.SelectSubset<T, wishlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Wishlist.
     * @param {wishlistCreateArgs} args - Arguments to create a Wishlist.
     * @example
     * // Create one Wishlist
     * const Wishlist = await prisma.wishlist.create({
     *   data: {
     *     // ... data to create a Wishlist
     *   }
     * })
     *
     */
    create<T extends wishlistCreateArgs>(args: Prisma.SelectSubset<T, wishlistCreateArgs<ExtArgs>>): Prisma.Prisma__wishlistClient<runtime.Types.Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Wishlists.
     * @param {wishlistCreateManyArgs} args - Arguments to create many Wishlists.
     * @example
     * // Create many Wishlists
     * const wishlist = await prisma.wishlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends wishlistCreateManyArgs>(args?: Prisma.SelectSubset<T, wishlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Wishlists and returns the data saved in the database.
     * @param {wishlistCreateManyAndReturnArgs} args - Arguments to create many Wishlists.
     * @example
     * // Create many Wishlists
     * const wishlist = await prisma.wishlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Wishlists and only return the `userId`
     * const wishlistWithUserIdOnly = await prisma.wishlist.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends wishlistCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, wishlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Wishlist.
     * @param {wishlistDeleteArgs} args - Arguments to delete one Wishlist.
     * @example
     * // Delete one Wishlist
     * const Wishlist = await prisma.wishlist.delete({
     *   where: {
     *     // ... filter to delete one Wishlist
     *   }
     * })
     *
     */
    delete<T extends wishlistDeleteArgs>(args: Prisma.SelectSubset<T, wishlistDeleteArgs<ExtArgs>>): Prisma.Prisma__wishlistClient<runtime.Types.Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Wishlist.
     * @param {wishlistUpdateArgs} args - Arguments to update one Wishlist.
     * @example
     * // Update one Wishlist
     * const wishlist = await prisma.wishlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends wishlistUpdateArgs>(args: Prisma.SelectSubset<T, wishlistUpdateArgs<ExtArgs>>): Prisma.Prisma__wishlistClient<runtime.Types.Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Wishlists.
     * @param {wishlistDeleteManyArgs} args - Arguments to filter Wishlists to delete.
     * @example
     * // Delete a few Wishlists
     * const { count } = await prisma.wishlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends wishlistDeleteManyArgs>(args?: Prisma.SelectSubset<T, wishlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wishlists
     * const wishlist = await prisma.wishlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends wishlistUpdateManyArgs>(args: Prisma.SelectSubset<T, wishlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Wishlists and returns the data updated in the database.
     * @param {wishlistUpdateManyAndReturnArgs} args - Arguments to update many Wishlists.
     * @example
     * // Update many Wishlists
     * const wishlist = await prisma.wishlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Wishlists and only return the `userId`
     * const wishlistWithUserIdOnly = await prisma.wishlist.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends wishlistUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, wishlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Wishlist.
     * @param {wishlistUpsertArgs} args - Arguments to update or create a Wishlist.
     * @example
     * // Update or create a Wishlist
     * const wishlist = await prisma.wishlist.upsert({
     *   create: {
     *     // ... data to create a Wishlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wishlist we want to update
     *   }
     * })
     */
    upsert<T extends wishlistUpsertArgs>(args: Prisma.SelectSubset<T, wishlistUpsertArgs<ExtArgs>>): Prisma.Prisma__wishlistClient<runtime.Types.Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistCountArgs} args - Arguments to filter Wishlists to count.
     * @example
     * // Count the number of Wishlists
     * const count = await prisma.wishlist.count({
     *   where: {
     *     // ... the filter for the Wishlists we want to count
     *   }
     * })
    **/
    count<T extends wishlistCountArgs>(args?: Prisma.Subset<T, wishlistCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WishlistCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Wishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WishlistAggregateArgs>(args: Prisma.Subset<T, WishlistAggregateArgs>): Prisma.PrismaPromise<GetWishlistAggregateType<T>>;
    /**
     * Group by Wishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistGroupByArgs} args - Group by arguments.
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
    groupBy<T extends wishlistGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: wishlistGroupByArgs['orderBy'];
    } : {
        orderBy?: wishlistGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, wishlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the wishlist model
     */
    readonly fields: wishlistFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for wishlist.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__wishlistClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    products<T extends Prisma.wishlist$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the wishlist model
 */
export interface wishlistFieldRefs {
    readonly userId: Prisma.FieldRef<"wishlist", 'String'>;
}
/**
 * wishlist findUnique
 */
export type wishlistFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: Prisma.wishlistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist
     */
    omit?: Prisma.wishlistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlistInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist to fetch.
     */
    where: Prisma.wishlistWhereUniqueInput;
};
/**
 * wishlist findUniqueOrThrow
 */
export type wishlistFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: Prisma.wishlistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist
     */
    omit?: Prisma.wishlistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlistInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist to fetch.
     */
    where: Prisma.wishlistWhereUniqueInput;
};
/**
 * wishlist findFirst
 */
export type wishlistFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: Prisma.wishlistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist
     */
    omit?: Prisma.wishlistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlistInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist to fetch.
     */
    where?: Prisma.wishlistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlists to fetch.
     */
    orderBy?: Prisma.wishlistOrderByWithRelationInput | Prisma.wishlistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for wishlists.
     */
    cursor?: Prisma.wishlistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlists.
     */
    distinct?: Prisma.WishlistScalarFieldEnum | Prisma.WishlistScalarFieldEnum[];
};
/**
 * wishlist findFirstOrThrow
 */
export type wishlistFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: Prisma.wishlistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist
     */
    omit?: Prisma.wishlistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlistInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist to fetch.
     */
    where?: Prisma.wishlistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlists to fetch.
     */
    orderBy?: Prisma.wishlistOrderByWithRelationInput | Prisma.wishlistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for wishlists.
     */
    cursor?: Prisma.wishlistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlists.
     */
    distinct?: Prisma.WishlistScalarFieldEnum | Prisma.WishlistScalarFieldEnum[];
};
/**
 * wishlist findMany
 */
export type wishlistFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: Prisma.wishlistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist
     */
    omit?: Prisma.wishlistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlistInclude<ExtArgs> | null;
    /**
     * Filter, which wishlists to fetch.
     */
    where?: Prisma.wishlistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlists to fetch.
     */
    orderBy?: Prisma.wishlistOrderByWithRelationInput | Prisma.wishlistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing wishlists.
     */
    cursor?: Prisma.wishlistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlists.
     */
    distinct?: Prisma.WishlistScalarFieldEnum | Prisma.WishlistScalarFieldEnum[];
};
/**
 * wishlist create
 */
export type wishlistCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: Prisma.wishlistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist
     */
    omit?: Prisma.wishlistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlistInclude<ExtArgs> | null;
    /**
     * The data needed to create a wishlist.
     */
    data: Prisma.XOR<Prisma.wishlistCreateInput, Prisma.wishlistUncheckedCreateInput>;
};
/**
 * wishlist createMany
 */
export type wishlistCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many wishlists.
     */
    data: Prisma.wishlistCreateManyInput | Prisma.wishlistCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * wishlist createManyAndReturn
 */
export type wishlistCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: Prisma.wishlistSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist
     */
    omit?: Prisma.wishlistOmit<ExtArgs> | null;
    /**
     * The data used to create many wishlists.
     */
    data: Prisma.wishlistCreateManyInput | Prisma.wishlistCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlistIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * wishlist update
 */
export type wishlistUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: Prisma.wishlistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist
     */
    omit?: Prisma.wishlistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlistInclude<ExtArgs> | null;
    /**
     * The data needed to update a wishlist.
     */
    data: Prisma.XOR<Prisma.wishlistUpdateInput, Prisma.wishlistUncheckedUpdateInput>;
    /**
     * Choose, which wishlist to update.
     */
    where: Prisma.wishlistWhereUniqueInput;
};
/**
 * wishlist updateMany
 */
export type wishlistUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update wishlists.
     */
    data: Prisma.XOR<Prisma.wishlistUpdateManyMutationInput, Prisma.wishlistUncheckedUpdateManyInput>;
    /**
     * Filter which wishlists to update
     */
    where?: Prisma.wishlistWhereInput;
    /**
     * Limit how many wishlists to update.
     */
    limit?: number;
};
/**
 * wishlist updateManyAndReturn
 */
export type wishlistUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: Prisma.wishlistSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist
     */
    omit?: Prisma.wishlistOmit<ExtArgs> | null;
    /**
     * The data used to update wishlists.
     */
    data: Prisma.XOR<Prisma.wishlistUpdateManyMutationInput, Prisma.wishlistUncheckedUpdateManyInput>;
    /**
     * Filter which wishlists to update
     */
    where?: Prisma.wishlistWhereInput;
    /**
     * Limit how many wishlists to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlistIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * wishlist upsert
 */
export type wishlistUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: Prisma.wishlistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist
     */
    omit?: Prisma.wishlistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlistInclude<ExtArgs> | null;
    /**
     * The filter to search for the wishlist to update in case it exists.
     */
    where: Prisma.wishlistWhereUniqueInput;
    /**
     * In case the wishlist found by the `where` argument doesn't exist, create a new wishlist with this data.
     */
    create: Prisma.XOR<Prisma.wishlistCreateInput, Prisma.wishlistUncheckedCreateInput>;
    /**
     * In case the wishlist was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.wishlistUpdateInput, Prisma.wishlistUncheckedUpdateInput>;
};
/**
 * wishlist delete
 */
export type wishlistDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: Prisma.wishlistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist
     */
    omit?: Prisma.wishlistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlistInclude<ExtArgs> | null;
    /**
     * Filter which wishlist to delete.
     */
    where: Prisma.wishlistWhereUniqueInput;
};
/**
 * wishlist deleteMany
 */
export type wishlistDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which wishlists to delete
     */
    where?: Prisma.wishlistWhereInput;
    /**
     * Limit how many wishlists to delete.
     */
    limit?: number;
};
/**
 * wishlist.products
 */
export type wishlist$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * wishlist without action
 */
export type wishlistDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: Prisma.wishlistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist
     */
    omit?: Prisma.wishlistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlistInclude<ExtArgs> | null;
};
//# sourceMappingURL=wishlist.d.ts.map