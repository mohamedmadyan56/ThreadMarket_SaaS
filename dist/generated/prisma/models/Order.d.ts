import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Order
 *
 */
export type OrderModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderPayload>;
export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type OrderAvgAggregateOutputType = {
    discount: number | null;
    price: number | null;
    totalPrice: number | null;
};
export type OrderSumAggregateOutputType = {
    discount: number | null;
    price: number | null;
    totalPrice: number | null;
};
export type OrderMinAggregateOutputType = {
    orderId: string | null;
    userId: string | null;
    discount: number | null;
    status: $Enums.orderStatus | null;
    otp: string | null;
    price: number | null;
    totalPrice: number | null;
    address: string | null;
    phoneNumber: string | null;
    deliveryCId: string | null;
    courierId: string | null;
};
export type OrderMaxAggregateOutputType = {
    orderId: string | null;
    userId: string | null;
    discount: number | null;
    status: $Enums.orderStatus | null;
    otp: string | null;
    price: number | null;
    totalPrice: number | null;
    address: string | null;
    phoneNumber: string | null;
    deliveryCId: string | null;
    courierId: string | null;
};
export type OrderCountAggregateOutputType = {
    orderId: number;
    userId: number;
    discount: number;
    status: number;
    otp: number;
    price: number;
    totalPrice: number;
    address: number;
    phoneNumber: number;
    deliveryCId: number;
    courierId: number;
    _all: number;
};
export type OrderAvgAggregateInputType = {
    discount?: true;
    price?: true;
    totalPrice?: true;
};
export type OrderSumAggregateInputType = {
    discount?: true;
    price?: true;
    totalPrice?: true;
};
export type OrderMinAggregateInputType = {
    orderId?: true;
    userId?: true;
    discount?: true;
    status?: true;
    otp?: true;
    price?: true;
    totalPrice?: true;
    address?: true;
    phoneNumber?: true;
    deliveryCId?: true;
    courierId?: true;
};
export type OrderMaxAggregateInputType = {
    orderId?: true;
    userId?: true;
    discount?: true;
    status?: true;
    otp?: true;
    price?: true;
    totalPrice?: true;
    address?: true;
    phoneNumber?: true;
    deliveryCId?: true;
    courierId?: true;
};
export type OrderCountAggregateInputType = {
    orderId?: true;
    userId?: true;
    discount?: true;
    status?: true;
    otp?: true;
    price?: true;
    totalPrice?: true;
    address?: true;
    phoneNumber?: true;
    deliveryCId?: true;
    courierId?: true;
    _all?: true;
};
export type OrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: Prisma.OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType;
};
export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder[P]> : Prisma.GetScalarType<T[P], AggregateOrder[P]>;
};
export type OrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithAggregationInput | Prisma.OrderOrderByWithAggregationInput[];
    by: Prisma.OrderScalarFieldEnum[] | Prisma.OrderScalarFieldEnum;
    having?: Prisma.OrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type OrderGroupByOutputType = {
    orderId: string;
    userId: string;
    discount: number | null;
    status: $Enums.orderStatus;
    otp: string;
    price: number;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    deliveryCId: string;
    courierId: string | null;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]>;
}>>;
export type OrderWhereInput = {
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    orderId?: Prisma.UuidFilter<"Order"> | string;
    userId?: Prisma.UuidFilter<"Order"> | string;
    discount?: Prisma.IntNullableFilter<"Order"> | number | null;
    status?: Prisma.EnumorderStatusFilter<"Order"> | $Enums.orderStatus;
    otp?: Prisma.StringFilter<"Order"> | string;
    price?: Prisma.IntFilter<"Order"> | number;
    totalPrice?: Prisma.IntFilter<"Order"> | number;
    address?: Prisma.StringFilter<"Order"> | string;
    phoneNumber?: Prisma.StringFilter<"Order"> | string;
    deliveryCId?: Prisma.UuidFilter<"Order"> | string;
    courierId?: Prisma.UuidNullableFilter<"Order"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    brands?: Prisma.OrderBrandListRelationFilter;
    products?: Prisma.VariantListRelationFilter;
    deliveryCompany?: Prisma.XOR<Prisma.D_CompanyScalarRelationFilter, Prisma.D_CompanyWhereInput>;
    courier?: Prisma.XOR<Prisma.CourierNullableScalarRelationFilter, Prisma.CourierWhereInput> | null;
};
export type OrderOrderByWithRelationInput = {
    orderId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    otp?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    deliveryCId?: Prisma.SortOrder;
    courierId?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    brands?: Prisma.OrderBrandOrderByRelationAggregateInput;
    products?: Prisma.VariantOrderByRelationAggregateInput;
    deliveryCompany?: Prisma.D_CompanyOrderByWithRelationInput;
    courier?: Prisma.CourierOrderByWithRelationInput;
};
export type OrderWhereUniqueInput = Prisma.AtLeast<{
    orderId?: string;
    deliveryCId?: string;
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    userId?: Prisma.UuidFilter<"Order"> | string;
    discount?: Prisma.IntNullableFilter<"Order"> | number | null;
    status?: Prisma.EnumorderStatusFilter<"Order"> | $Enums.orderStatus;
    otp?: Prisma.StringFilter<"Order"> | string;
    price?: Prisma.IntFilter<"Order"> | number;
    totalPrice?: Prisma.IntFilter<"Order"> | number;
    address?: Prisma.StringFilter<"Order"> | string;
    phoneNumber?: Prisma.StringFilter<"Order"> | string;
    courierId?: Prisma.UuidNullableFilter<"Order"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    brands?: Prisma.OrderBrandListRelationFilter;
    products?: Prisma.VariantListRelationFilter;
    deliveryCompany?: Prisma.XOR<Prisma.D_CompanyScalarRelationFilter, Prisma.D_CompanyWhereInput>;
    courier?: Prisma.XOR<Prisma.CourierNullableScalarRelationFilter, Prisma.CourierWhereInput> | null;
}, "orderId" | "deliveryCId">;
export type OrderOrderByWithAggregationInput = {
    orderId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    otp?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    deliveryCId?: Prisma.SortOrder;
    courierId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.OrderCountOrderByAggregateInput;
    _avg?: Prisma.OrderAvgOrderByAggregateInput;
    _max?: Prisma.OrderMaxOrderByAggregateInput;
    _min?: Prisma.OrderMinOrderByAggregateInput;
    _sum?: Prisma.OrderSumOrderByAggregateInput;
};
export type OrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    orderId?: Prisma.UuidWithAggregatesFilter<"Order"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"Order"> | string;
    discount?: Prisma.IntNullableWithAggregatesFilter<"Order"> | number | null;
    status?: Prisma.EnumorderStatusWithAggregatesFilter<"Order"> | $Enums.orderStatus;
    otp?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    price?: Prisma.IntWithAggregatesFilter<"Order"> | number;
    totalPrice?: Prisma.IntWithAggregatesFilter<"Order"> | number;
    address?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    phoneNumber?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    deliveryCId?: Prisma.UuidWithAggregatesFilter<"Order"> | string;
    courierId?: Prisma.UuidNullableWithAggregatesFilter<"Order"> | string | null;
};
export type OrderCreateInput = {
    orderId?: string;
    discount?: number | null;
    status?: $Enums.orderStatus;
    otp: string;
    price: number;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    brands?: Prisma.OrderBrandCreateNestedManyWithoutOrderInput;
    products?: Prisma.VariantCreateNestedManyWithoutOrderInput;
    deliveryCompany: Prisma.D_CompanyCreateNestedOneWithoutOrdersInput;
    courier?: Prisma.CourierCreateNestedOneWithoutOrdersInput;
};
export type OrderUncheckedCreateInput = {
    orderId?: string;
    userId: string;
    discount?: number | null;
    status?: $Enums.orderStatus;
    otp: string;
    price: number;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    deliveryCId: string;
    courierId?: string | null;
    brands?: Prisma.OrderBrandUncheckedCreateNestedManyWithoutOrderInput;
    products?: Prisma.VariantUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderUpdateInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    brands?: Prisma.OrderBrandUpdateManyWithoutOrderNestedInput;
    products?: Prisma.VariantUpdateManyWithoutOrderNestedInput;
    deliveryCompany?: Prisma.D_CompanyUpdateOneRequiredWithoutOrdersNestedInput;
    courier?: Prisma.CourierUpdateOneWithoutOrdersNestedInput;
};
export type OrderUncheckedUpdateInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryCId?: Prisma.StringFieldUpdateOperationsInput | string;
    courierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brands?: Prisma.OrderBrandUncheckedUpdateManyWithoutOrderNestedInput;
    products?: Prisma.VariantUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateManyInput = {
    orderId?: string;
    userId: string;
    discount?: number | null;
    status?: $Enums.orderStatus;
    otp: string;
    price: number;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    deliveryCId: string;
    courierId?: string | null;
};
export type OrderUpdateManyMutationInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrderUncheckedUpdateManyInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryCId?: Prisma.StringFieldUpdateOperationsInput | string;
    courierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrderListRelationFilter = {
    every?: Prisma.OrderWhereInput;
    some?: Prisma.OrderWhereInput;
    none?: Prisma.OrderWhereInput;
};
export type OrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderNullableScalarRelationFilter = {
    is?: Prisma.OrderWhereInput | null;
    isNot?: Prisma.OrderWhereInput | null;
};
export type OrderCountOrderByAggregateInput = {
    orderId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    otp?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    deliveryCId?: Prisma.SortOrder;
    courierId?: Prisma.SortOrder;
};
export type OrderAvgOrderByAggregateInput = {
    discount?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type OrderMaxOrderByAggregateInput = {
    orderId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    otp?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    deliveryCId?: Prisma.SortOrder;
    courierId?: Prisma.SortOrder;
};
export type OrderMinOrderByAggregateInput = {
    orderId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    otp?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    deliveryCId?: Prisma.SortOrder;
    courierId?: Prisma.SortOrder;
};
export type OrderSumOrderByAggregateInput = {
    discount?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type OrderScalarRelationFilter = {
    is?: Prisma.OrderWhereInput;
    isNot?: Prisma.OrderWhereInput;
};
export type OrderCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutUserInput | Prisma.OrderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutUserInput | Prisma.OrderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutUserInput | Prisma.OrderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutUserInput | Prisma.OrderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutUserInput | Prisma.OrderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutUserInput | Prisma.OrderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderCreateNestedOneWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutProductsInput, Prisma.OrderUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutProductsInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutProductsInput, Prisma.OrderUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutProductsInput;
    upsert?: Prisma.OrderUpsertWithoutProductsInput;
    disconnect?: Prisma.OrderWhereInput | boolean;
    delete?: Prisma.OrderWhereInput | boolean;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutProductsInput, Prisma.OrderUpdateWithoutProductsInput>, Prisma.OrderUncheckedUpdateWithoutProductsInput>;
};
export type EnumorderStatusFieldUpdateOperationsInput = {
    set?: $Enums.orderStatus;
};
export type OrderCreateNestedOneWithoutBrandsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutBrandsInput, Prisma.OrderUncheckedCreateWithoutBrandsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutBrandsInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutBrandsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutBrandsInput, Prisma.OrderUncheckedCreateWithoutBrandsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutBrandsInput;
    upsert?: Prisma.OrderUpsertWithoutBrandsInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutBrandsInput, Prisma.OrderUpdateWithoutBrandsInput>, Prisma.OrderUncheckedUpdateWithoutBrandsInput>;
};
export type OrderCreateNestedManyWithoutDeliveryCompanyInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutDeliveryCompanyInput, Prisma.OrderUncheckedCreateWithoutDeliveryCompanyInput> | Prisma.OrderCreateWithoutDeliveryCompanyInput[] | Prisma.OrderUncheckedCreateWithoutDeliveryCompanyInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutDeliveryCompanyInput | Prisma.OrderCreateOrConnectWithoutDeliveryCompanyInput[];
    createMany?: Prisma.OrderCreateManyDeliveryCompanyInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutDeliveryCompanyInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutDeliveryCompanyInput, Prisma.OrderUncheckedCreateWithoutDeliveryCompanyInput> | Prisma.OrderCreateWithoutDeliveryCompanyInput[] | Prisma.OrderUncheckedCreateWithoutDeliveryCompanyInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutDeliveryCompanyInput | Prisma.OrderCreateOrConnectWithoutDeliveryCompanyInput[];
    createMany?: Prisma.OrderCreateManyDeliveryCompanyInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutDeliveryCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutDeliveryCompanyInput, Prisma.OrderUncheckedCreateWithoutDeliveryCompanyInput> | Prisma.OrderCreateWithoutDeliveryCompanyInput[] | Prisma.OrderUncheckedCreateWithoutDeliveryCompanyInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutDeliveryCompanyInput | Prisma.OrderCreateOrConnectWithoutDeliveryCompanyInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutDeliveryCompanyInput | Prisma.OrderUpsertWithWhereUniqueWithoutDeliveryCompanyInput[];
    createMany?: Prisma.OrderCreateManyDeliveryCompanyInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutDeliveryCompanyInput | Prisma.OrderUpdateWithWhereUniqueWithoutDeliveryCompanyInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutDeliveryCompanyInput | Prisma.OrderUpdateManyWithWhereWithoutDeliveryCompanyInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutDeliveryCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutDeliveryCompanyInput, Prisma.OrderUncheckedCreateWithoutDeliveryCompanyInput> | Prisma.OrderCreateWithoutDeliveryCompanyInput[] | Prisma.OrderUncheckedCreateWithoutDeliveryCompanyInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutDeliveryCompanyInput | Prisma.OrderCreateOrConnectWithoutDeliveryCompanyInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutDeliveryCompanyInput | Prisma.OrderUpsertWithWhereUniqueWithoutDeliveryCompanyInput[];
    createMany?: Prisma.OrderCreateManyDeliveryCompanyInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutDeliveryCompanyInput | Prisma.OrderUpdateWithWhereUniqueWithoutDeliveryCompanyInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutDeliveryCompanyInput | Prisma.OrderUpdateManyWithWhereWithoutDeliveryCompanyInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderCreateNestedManyWithoutCourierInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCourierInput, Prisma.OrderUncheckedCreateWithoutCourierInput> | Prisma.OrderCreateWithoutCourierInput[] | Prisma.OrderUncheckedCreateWithoutCourierInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCourierInput | Prisma.OrderCreateOrConnectWithoutCourierInput[];
    createMany?: Prisma.OrderCreateManyCourierInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutCourierInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCourierInput, Prisma.OrderUncheckedCreateWithoutCourierInput> | Prisma.OrderCreateWithoutCourierInput[] | Prisma.OrderUncheckedCreateWithoutCourierInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCourierInput | Prisma.OrderCreateOrConnectWithoutCourierInput[];
    createMany?: Prisma.OrderCreateManyCourierInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutCourierNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCourierInput, Prisma.OrderUncheckedCreateWithoutCourierInput> | Prisma.OrderCreateWithoutCourierInput[] | Prisma.OrderUncheckedCreateWithoutCourierInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCourierInput | Prisma.OrderCreateOrConnectWithoutCourierInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutCourierInput | Prisma.OrderUpsertWithWhereUniqueWithoutCourierInput[];
    createMany?: Prisma.OrderCreateManyCourierInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutCourierInput | Prisma.OrderUpdateWithWhereUniqueWithoutCourierInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutCourierInput | Prisma.OrderUpdateManyWithWhereWithoutCourierInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutCourierNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCourierInput, Prisma.OrderUncheckedCreateWithoutCourierInput> | Prisma.OrderCreateWithoutCourierInput[] | Prisma.OrderUncheckedCreateWithoutCourierInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCourierInput | Prisma.OrderCreateOrConnectWithoutCourierInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutCourierInput | Prisma.OrderUpsertWithWhereUniqueWithoutCourierInput[];
    createMany?: Prisma.OrderCreateManyCourierInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutCourierInput | Prisma.OrderUpdateWithWhereUniqueWithoutCourierInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutCourierInput | Prisma.OrderUpdateManyWithWhereWithoutCourierInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderCreateWithoutUserInput = {
    orderId?: string;
    discount?: number | null;
    status?: $Enums.orderStatus;
    otp: string;
    price: number;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    brands?: Prisma.OrderBrandCreateNestedManyWithoutOrderInput;
    products?: Prisma.VariantCreateNestedManyWithoutOrderInput;
    deliveryCompany: Prisma.D_CompanyCreateNestedOneWithoutOrdersInput;
    courier?: Prisma.CourierCreateNestedOneWithoutOrdersInput;
};
export type OrderUncheckedCreateWithoutUserInput = {
    orderId?: string;
    discount?: number | null;
    status?: $Enums.orderStatus;
    otp: string;
    price: number;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    deliveryCId: string;
    courierId?: string | null;
    brands?: Prisma.OrderBrandUncheckedCreateNestedManyWithoutOrderInput;
    products?: Prisma.VariantUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutUserInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput>;
};
export type OrderCreateManyUserInputEnvelope = {
    data: Prisma.OrderCreateManyUserInput | Prisma.OrderCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutUserInput, Prisma.OrderUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput>;
};
export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutUserInput, Prisma.OrderUncheckedUpdateWithoutUserInput>;
};
export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutUserInput>;
};
export type OrderScalarWhereInput = {
    AND?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    OR?: Prisma.OrderScalarWhereInput[];
    NOT?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    orderId?: Prisma.UuidFilter<"Order"> | string;
    userId?: Prisma.UuidFilter<"Order"> | string;
    discount?: Prisma.IntNullableFilter<"Order"> | number | null;
    status?: Prisma.EnumorderStatusFilter<"Order"> | $Enums.orderStatus;
    otp?: Prisma.StringFilter<"Order"> | string;
    price?: Prisma.IntFilter<"Order"> | number;
    totalPrice?: Prisma.IntFilter<"Order"> | number;
    address?: Prisma.StringFilter<"Order"> | string;
    phoneNumber?: Prisma.StringFilter<"Order"> | string;
    deliveryCId?: Prisma.UuidFilter<"Order"> | string;
    courierId?: Prisma.UuidNullableFilter<"Order"> | string | null;
};
export type OrderCreateWithoutProductsInput = {
    orderId?: string;
    discount?: number | null;
    status?: $Enums.orderStatus;
    otp: string;
    price: number;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    brands?: Prisma.OrderBrandCreateNestedManyWithoutOrderInput;
    deliveryCompany: Prisma.D_CompanyCreateNestedOneWithoutOrdersInput;
    courier?: Prisma.CourierCreateNestedOneWithoutOrdersInput;
};
export type OrderUncheckedCreateWithoutProductsInput = {
    orderId?: string;
    userId: string;
    discount?: number | null;
    status?: $Enums.orderStatus;
    otp: string;
    price: number;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    deliveryCId: string;
    courierId?: string | null;
    brands?: Prisma.OrderBrandUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutProductsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutProductsInput, Prisma.OrderUncheckedCreateWithoutProductsInput>;
};
export type OrderUpsertWithoutProductsInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutProductsInput, Prisma.OrderUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutProductsInput, Prisma.OrderUncheckedCreateWithoutProductsInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutProductsInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutProductsInput, Prisma.OrderUncheckedUpdateWithoutProductsInput>;
};
export type OrderUpdateWithoutProductsInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    brands?: Prisma.OrderBrandUpdateManyWithoutOrderNestedInput;
    deliveryCompany?: Prisma.D_CompanyUpdateOneRequiredWithoutOrdersNestedInput;
    courier?: Prisma.CourierUpdateOneWithoutOrdersNestedInput;
};
export type OrderUncheckedUpdateWithoutProductsInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryCId?: Prisma.StringFieldUpdateOperationsInput | string;
    courierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brands?: Prisma.OrderBrandUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateWithoutBrandsInput = {
    orderId?: string;
    discount?: number | null;
    status?: $Enums.orderStatus;
    otp: string;
    price: number;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    products?: Prisma.VariantCreateNestedManyWithoutOrderInput;
    deliveryCompany: Prisma.D_CompanyCreateNestedOneWithoutOrdersInput;
    courier?: Prisma.CourierCreateNestedOneWithoutOrdersInput;
};
export type OrderUncheckedCreateWithoutBrandsInput = {
    orderId?: string;
    userId: string;
    discount?: number | null;
    status?: $Enums.orderStatus;
    otp: string;
    price: number;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    deliveryCId: string;
    courierId?: string | null;
    products?: Prisma.VariantUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutBrandsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutBrandsInput, Prisma.OrderUncheckedCreateWithoutBrandsInput>;
};
export type OrderUpsertWithoutBrandsInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutBrandsInput, Prisma.OrderUncheckedUpdateWithoutBrandsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutBrandsInput, Prisma.OrderUncheckedCreateWithoutBrandsInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutBrandsInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutBrandsInput, Prisma.OrderUncheckedUpdateWithoutBrandsInput>;
};
export type OrderUpdateWithoutBrandsInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    products?: Prisma.VariantUpdateManyWithoutOrderNestedInput;
    deliveryCompany?: Prisma.D_CompanyUpdateOneRequiredWithoutOrdersNestedInput;
    courier?: Prisma.CourierUpdateOneWithoutOrdersNestedInput;
};
export type OrderUncheckedUpdateWithoutBrandsInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryCId?: Prisma.StringFieldUpdateOperationsInput | string;
    courierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    products?: Prisma.VariantUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateWithoutDeliveryCompanyInput = {
    orderId?: string;
    discount?: number | null;
    status?: $Enums.orderStatus;
    otp: string;
    price: number;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    brands?: Prisma.OrderBrandCreateNestedManyWithoutOrderInput;
    products?: Prisma.VariantCreateNestedManyWithoutOrderInput;
    courier?: Prisma.CourierCreateNestedOneWithoutOrdersInput;
};
export type OrderUncheckedCreateWithoutDeliveryCompanyInput = {
    orderId?: string;
    userId: string;
    discount?: number | null;
    status?: $Enums.orderStatus;
    otp: string;
    price: number;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    courierId?: string | null;
    brands?: Prisma.OrderBrandUncheckedCreateNestedManyWithoutOrderInput;
    products?: Prisma.VariantUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutDeliveryCompanyInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutDeliveryCompanyInput, Prisma.OrderUncheckedCreateWithoutDeliveryCompanyInput>;
};
export type OrderCreateManyDeliveryCompanyInputEnvelope = {
    data: Prisma.OrderCreateManyDeliveryCompanyInput | Prisma.OrderCreateManyDeliveryCompanyInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutDeliveryCompanyInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutDeliveryCompanyInput, Prisma.OrderUncheckedUpdateWithoutDeliveryCompanyInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutDeliveryCompanyInput, Prisma.OrderUncheckedCreateWithoutDeliveryCompanyInput>;
};
export type OrderUpdateWithWhereUniqueWithoutDeliveryCompanyInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutDeliveryCompanyInput, Prisma.OrderUncheckedUpdateWithoutDeliveryCompanyInput>;
};
export type OrderUpdateManyWithWhereWithoutDeliveryCompanyInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutDeliveryCompanyInput>;
};
export type OrderCreateWithoutCourierInput = {
    orderId?: string;
    discount?: number | null;
    status?: $Enums.orderStatus;
    otp: string;
    price: number;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    brands?: Prisma.OrderBrandCreateNestedManyWithoutOrderInput;
    products?: Prisma.VariantCreateNestedManyWithoutOrderInput;
    deliveryCompany: Prisma.D_CompanyCreateNestedOneWithoutOrdersInput;
};
export type OrderUncheckedCreateWithoutCourierInput = {
    orderId?: string;
    userId: string;
    discount?: number | null;
    status?: $Enums.orderStatus;
    otp: string;
    price: number;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    deliveryCId: string;
    brands?: Prisma.OrderBrandUncheckedCreateNestedManyWithoutOrderInput;
    products?: Prisma.VariantUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutCourierInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutCourierInput, Prisma.OrderUncheckedCreateWithoutCourierInput>;
};
export type OrderCreateManyCourierInputEnvelope = {
    data: Prisma.OrderCreateManyCourierInput | Prisma.OrderCreateManyCourierInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutCourierInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutCourierInput, Prisma.OrderUncheckedUpdateWithoutCourierInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutCourierInput, Prisma.OrderUncheckedCreateWithoutCourierInput>;
};
export type OrderUpdateWithWhereUniqueWithoutCourierInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutCourierInput, Prisma.OrderUncheckedUpdateWithoutCourierInput>;
};
export type OrderUpdateManyWithWhereWithoutCourierInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutCourierInput>;
};
export type OrderCreateManyUserInput = {
    orderId?: string;
    discount?: number | null;
    status?: $Enums.orderStatus;
    otp: string;
    price: number;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    deliveryCId: string;
    courierId?: string | null;
};
export type OrderUpdateWithoutUserInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    brands?: Prisma.OrderBrandUpdateManyWithoutOrderNestedInput;
    products?: Prisma.VariantUpdateManyWithoutOrderNestedInput;
    deliveryCompany?: Prisma.D_CompanyUpdateOneRequiredWithoutOrdersNestedInput;
    courier?: Prisma.CourierUpdateOneWithoutOrdersNestedInput;
};
export type OrderUncheckedUpdateWithoutUserInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryCId?: Prisma.StringFieldUpdateOperationsInput | string;
    courierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brands?: Prisma.OrderBrandUncheckedUpdateManyWithoutOrderNestedInput;
    products?: Prisma.VariantUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutUserInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryCId?: Prisma.StringFieldUpdateOperationsInput | string;
    courierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrderCreateManyDeliveryCompanyInput = {
    orderId?: string;
    userId: string;
    discount?: number | null;
    status?: $Enums.orderStatus;
    otp: string;
    price: number;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    courierId?: string | null;
};
export type OrderUpdateWithoutDeliveryCompanyInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    brands?: Prisma.OrderBrandUpdateManyWithoutOrderNestedInput;
    products?: Prisma.VariantUpdateManyWithoutOrderNestedInput;
    courier?: Prisma.CourierUpdateOneWithoutOrdersNestedInput;
};
export type OrderUncheckedUpdateWithoutDeliveryCompanyInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    courierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brands?: Prisma.OrderBrandUncheckedUpdateManyWithoutOrderNestedInput;
    products?: Prisma.VariantUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutDeliveryCompanyInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    courierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrderCreateManyCourierInput = {
    orderId?: string;
    userId: string;
    discount?: number | null;
    status?: $Enums.orderStatus;
    otp: string;
    price: number;
    totalPrice: number;
    address: string;
    phoneNumber: string;
    deliveryCId: string;
};
export type OrderUpdateWithoutCourierInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    brands?: Prisma.OrderBrandUpdateManyWithoutOrderNestedInput;
    products?: Prisma.VariantUpdateManyWithoutOrderNestedInput;
    deliveryCompany?: Prisma.D_CompanyUpdateOneRequiredWithoutOrdersNestedInput;
};
export type OrderUncheckedUpdateWithoutCourierInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryCId?: Prisma.StringFieldUpdateOperationsInput | string;
    brands?: Prisma.OrderBrandUncheckedUpdateManyWithoutOrderNestedInput;
    products?: Prisma.VariantUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutCourierInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryCId?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type OrderCountOutputType
 */
export type OrderCountOutputType = {
    brands: number;
    products: number;
};
export type OrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brands?: boolean | OrderCountOutputTypeCountBrandsArgs;
    products?: boolean | OrderCountOutputTypeCountProductsArgs;
};
/**
 * OrderCountOutputType without action
 */
export type OrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: Prisma.OrderCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * OrderCountOutputType without action
 */
export type OrderCountOutputTypeCountBrandsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderBrandWhereInput;
};
/**
 * OrderCountOutputType without action
 */
export type OrderCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariantWhereInput;
};
export type OrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderId?: boolean;
    userId?: boolean;
    discount?: boolean;
    status?: boolean;
    otp?: boolean;
    price?: boolean;
    totalPrice?: boolean;
    address?: boolean;
    phoneNumber?: boolean;
    deliveryCId?: boolean;
    courierId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    brands?: boolean | Prisma.Order$brandsArgs<ExtArgs>;
    products?: boolean | Prisma.Order$productsArgs<ExtArgs>;
    deliveryCompany?: boolean | Prisma.D_CompanyDefaultArgs<ExtArgs>;
    courier?: boolean | Prisma.Order$courierArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderId?: boolean;
    userId?: boolean;
    discount?: boolean;
    status?: boolean;
    otp?: boolean;
    price?: boolean;
    totalPrice?: boolean;
    address?: boolean;
    phoneNumber?: boolean;
    deliveryCId?: boolean;
    courierId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    deliveryCompany?: boolean | Prisma.D_CompanyDefaultArgs<ExtArgs>;
    courier?: boolean | Prisma.Order$courierArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderId?: boolean;
    userId?: boolean;
    discount?: boolean;
    status?: boolean;
    otp?: boolean;
    price?: boolean;
    totalPrice?: boolean;
    address?: boolean;
    phoneNumber?: boolean;
    deliveryCId?: boolean;
    courierId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    deliveryCompany?: boolean | Prisma.D_CompanyDefaultArgs<ExtArgs>;
    courier?: boolean | Prisma.Order$courierArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectScalar = {
    orderId?: boolean;
    userId?: boolean;
    discount?: boolean;
    status?: boolean;
    otp?: boolean;
    price?: boolean;
    totalPrice?: boolean;
    address?: boolean;
    phoneNumber?: boolean;
    deliveryCId?: boolean;
    courierId?: boolean;
};
export type OrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"orderId" | "userId" | "discount" | "status" | "otp" | "price" | "totalPrice" | "address" | "phoneNumber" | "deliveryCId" | "courierId", ExtArgs["result"]["order"]>;
export type OrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    brands?: boolean | Prisma.Order$brandsArgs<ExtArgs>;
    products?: boolean | Prisma.Order$productsArgs<ExtArgs>;
    deliveryCompany?: boolean | Prisma.D_CompanyDefaultArgs<ExtArgs>;
    courier?: boolean | Prisma.Order$courierArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    deliveryCompany?: boolean | Prisma.D_CompanyDefaultArgs<ExtArgs>;
    courier?: boolean | Prisma.Order$courierArgs<ExtArgs>;
};
export type OrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    deliveryCompany?: boolean | Prisma.D_CompanyDefaultArgs<ExtArgs>;
    courier?: boolean | Prisma.Order$courierArgs<ExtArgs>;
};
export type $OrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Order";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        brands: Prisma.$OrderBrandPayload<ExtArgs>[];
        products: Prisma.$VariantPayload<ExtArgs>[];
        deliveryCompany: Prisma.$D_CompanyPayload<ExtArgs>;
        courier: Prisma.$CourierPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        orderId: string;
        userId: string;
        discount: number | null;
        status: $Enums.orderStatus;
        otp: string;
        price: number;
        totalPrice: number;
        address: string;
        phoneNumber: string;
        deliveryCId: string;
        courierId: string | null;
    }, ExtArgs["result"]["order"]>;
    composites: {};
};
export type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderPayload, S>;
export type OrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderCountAggregateInputType | true;
};
export interface OrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Order'];
        meta: {
            name: 'Order';
        };
    };
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     *
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     *
     * // Only select the `orderId`
     * const orderWithOrderIdOnly = await prisma.order.findMany({ select: { orderId: true } })
     *
     */
    findMany<T extends OrderFindManyArgs>(args?: Prisma.SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     *
     */
    create<T extends OrderCreateArgs>(args: Prisma.SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrderCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Orders and only return the `orderId`
     * const orderWithOrderIdOnly = await prisma.order.createManyAndReturn({
     *   select: { orderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     *
     */
    delete<T extends OrderDeleteArgs>(args: Prisma.SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrderUpdateArgs>(args: Prisma.SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrderUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Orders and only return the `orderId`
     * const orderWithOrderIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: Prisma.SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(args?: Prisma.Subset<T, OrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Prisma.Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>;
    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
    groupBy<T extends OrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Order model
     */
    readonly fields: OrderFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Order.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__OrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    brands<T extends Prisma.Order$brandsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$brandsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderBrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    products<T extends Prisma.Order$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    deliveryCompany<T extends Prisma.D_CompanyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.D_CompanyDefaultArgs<ExtArgs>>): Prisma.Prisma__D_CompanyClient<runtime.Types.Result.GetResult<Prisma.$D_CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    courier<T extends Prisma.Order$courierArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$courierArgs<ExtArgs>>): Prisma.Prisma__CourierClient<runtime.Types.Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Order model
 */
export interface OrderFieldRefs {
    readonly orderId: Prisma.FieldRef<"Order", 'String'>;
    readonly userId: Prisma.FieldRef<"Order", 'String'>;
    readonly discount: Prisma.FieldRef<"Order", 'Int'>;
    readonly status: Prisma.FieldRef<"Order", 'orderStatus'>;
    readonly otp: Prisma.FieldRef<"Order", 'String'>;
    readonly price: Prisma.FieldRef<"Order", 'Int'>;
    readonly totalPrice: Prisma.FieldRef<"Order", 'Int'>;
    readonly address: Prisma.FieldRef<"Order", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"Order", 'String'>;
    readonly deliveryCId: Prisma.FieldRef<"Order", 'String'>;
    readonly courierId: Prisma.FieldRef<"Order", 'String'>;
}
/**
 * Order findUnique
 */
export type OrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where: Prisma.OrderWhereUniqueInput;
};
/**
 * Order findUniqueOrThrow
 */
export type OrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where: Prisma.OrderWhereUniqueInput;
};
/**
 * Order findFirst
 */
export type OrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where?: Prisma.OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Orders.
     */
    cursor?: Prisma.OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Orders.
     */
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
/**
 * Order findFirstOrThrow
 */
export type OrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where?: Prisma.OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Orders.
     */
    cursor?: Prisma.OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Orders.
     */
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
/**
 * Order findMany
 */
export type OrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Orders to fetch.
     */
    where?: Prisma.OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Orders.
     */
    cursor?: Prisma.OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Orders.
     */
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
/**
 * Order create
 */
export type OrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * The data needed to create a Order.
     */
    data: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
};
/**
 * Order createMany
 */
export type OrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Order createManyAndReturn
 */
export type OrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * The data used to create many Orders.
     */
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Order update
 */
export type OrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * The data needed to update a Order.
     */
    data: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
    /**
     * Choose, which Order to update.
     */
    where: Prisma.OrderWhereUniqueInput;
};
/**
 * Order updateMany
 */
export type OrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    /**
     * Filter which Orders to update
     */
    where?: Prisma.OrderWhereInput;
    /**
     * Limit how many Orders to update.
     */
    limit?: number;
};
/**
 * Order updateManyAndReturn
 */
export type OrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * The data used to update Orders.
     */
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    /**
     * Filter which Orders to update
     */
    where?: Prisma.OrderWhereInput;
    /**
     * Limit how many Orders to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Order upsert
 */
export type OrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: Prisma.OrderWhereUniqueInput;
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
};
/**
 * Order delete
 */
export type OrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * Filter which Order to delete.
     */
    where: Prisma.OrderWhereUniqueInput;
};
/**
 * Order deleteMany
 */
export type OrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: Prisma.OrderWhereInput;
    /**
     * Limit how many Orders to delete.
     */
    limit?: number;
};
/**
 * Order.brands
 */
export type Order$brandsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Order.products
 */
export type Order$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: Prisma.VariantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Variant
     */
    omit?: Prisma.VariantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VariantInclude<ExtArgs> | null;
    where?: Prisma.VariantWhereInput;
    orderBy?: Prisma.VariantOrderByWithRelationInput | Prisma.VariantOrderByWithRelationInput[];
    cursor?: Prisma.VariantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VariantScalarFieldEnum | Prisma.VariantScalarFieldEnum[];
};
/**
 * Order.courier
 */
export type Order$courierArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: Prisma.CourierSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Courier
     */
    omit?: Prisma.CourierOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CourierInclude<ExtArgs> | null;
    where?: Prisma.CourierWhereInput;
};
/**
 * Order without action
 */
export type OrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
};
//# sourceMappingURL=Order.d.ts.map