import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model D_Company
 *
 */
export type D_CompanyModel = runtime.Types.Result.DefaultSelection<Prisma.$D_CompanyPayload>;
export type AggregateD_Company = {
    _count: D_CompanyCountAggregateOutputType | null;
    _avg: D_CompanyAvgAggregateOutputType | null;
    _sum: D_CompanySumAggregateOutputType | null;
    _min: D_CompanyMinAggregateOutputType | null;
    _max: D_CompanyMaxAggregateOutputType | null;
};
export type D_CompanyAvgAggregateOutputType = {
    balance: number | null;
};
export type D_CompanySumAggregateOutputType = {
    balance: number | null;
};
export type D_CompanyMinAggregateOutputType = {
    deliveryCompany: string | null;
    name: string | null;
    address: string | null;
    phoneNumber: string | null;
    isVerified: boolean | null;
    isBanned: boolean | null;
    balance: number | null;
};
export type D_CompanyMaxAggregateOutputType = {
    deliveryCompany: string | null;
    name: string | null;
    address: string | null;
    phoneNumber: string | null;
    isVerified: boolean | null;
    isBanned: boolean | null;
    balance: number | null;
};
export type D_CompanyCountAggregateOutputType = {
    deliveryCompany: number;
    name: number;
    address: number;
    phoneNumber: number;
    isVerified: number;
    isBanned: number;
    balance: number;
    _all: number;
};
export type D_CompanyAvgAggregateInputType = {
    balance?: true;
};
export type D_CompanySumAggregateInputType = {
    balance?: true;
};
export type D_CompanyMinAggregateInputType = {
    deliveryCompany?: true;
    name?: true;
    address?: true;
    phoneNumber?: true;
    isVerified?: true;
    isBanned?: true;
    balance?: true;
};
export type D_CompanyMaxAggregateInputType = {
    deliveryCompany?: true;
    name?: true;
    address?: true;
    phoneNumber?: true;
    isVerified?: true;
    isBanned?: true;
    balance?: true;
};
export type D_CompanyCountAggregateInputType = {
    deliveryCompany?: true;
    name?: true;
    address?: true;
    phoneNumber?: true;
    isVerified?: true;
    isBanned?: true;
    balance?: true;
    _all?: true;
};
export type D_CompanyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which D_Company to aggregate.
     */
    where?: Prisma.D_CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of D_Companies to fetch.
     */
    orderBy?: Prisma.D_CompanyOrderByWithRelationInput | Prisma.D_CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.D_CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` D_Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` D_Companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned D_Companies
    **/
    _count?: true | D_CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: D_CompanyAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: D_CompanySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: D_CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: D_CompanyMaxAggregateInputType;
};
export type GetD_CompanyAggregateType<T extends D_CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateD_Company]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateD_Company[P]> : Prisma.GetScalarType<T[P], AggregateD_Company[P]>;
};
export type D_CompanyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.D_CompanyWhereInput;
    orderBy?: Prisma.D_CompanyOrderByWithAggregationInput | Prisma.D_CompanyOrderByWithAggregationInput[];
    by: Prisma.D_CompanyScalarFieldEnum[] | Prisma.D_CompanyScalarFieldEnum;
    having?: Prisma.D_CompanyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: D_CompanyCountAggregateInputType | true;
    _avg?: D_CompanyAvgAggregateInputType;
    _sum?: D_CompanySumAggregateInputType;
    _min?: D_CompanyMinAggregateInputType;
    _max?: D_CompanyMaxAggregateInputType;
};
export type D_CompanyGroupByOutputType = {
    deliveryCompany: string;
    name: string;
    address: string;
    phoneNumber: string;
    isVerified: boolean;
    isBanned: boolean;
    balance: number;
    _count: D_CompanyCountAggregateOutputType | null;
    _avg: D_CompanyAvgAggregateOutputType | null;
    _sum: D_CompanySumAggregateOutputType | null;
    _min: D_CompanyMinAggregateOutputType | null;
    _max: D_CompanyMaxAggregateOutputType | null;
};
export type GetD_CompanyGroupByPayload<T extends D_CompanyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<D_CompanyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof D_CompanyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], D_CompanyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], D_CompanyGroupByOutputType[P]>;
}>>;
export type D_CompanyWhereInput = {
    AND?: Prisma.D_CompanyWhereInput | Prisma.D_CompanyWhereInput[];
    OR?: Prisma.D_CompanyWhereInput[];
    NOT?: Prisma.D_CompanyWhereInput | Prisma.D_CompanyWhereInput[];
    deliveryCompany?: Prisma.UuidFilter<"D_Company"> | string;
    name?: Prisma.StringFilter<"D_Company"> | string;
    address?: Prisma.StringFilter<"D_Company"> | string;
    phoneNumber?: Prisma.StringFilter<"D_Company"> | string;
    isVerified?: Prisma.BoolFilter<"D_Company"> | boolean;
    isBanned?: Prisma.BoolFilter<"D_Company"> | boolean;
    balance?: Prisma.IntFilter<"D_Company"> | number;
    couriers?: Prisma.CourierListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
};
export type D_CompanyOrderByWithRelationInput = {
    deliveryCompany?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isBanned?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    couriers?: Prisma.CourierOrderByRelationAggregateInput;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
};
export type D_CompanyWhereUniqueInput = Prisma.AtLeast<{
    deliveryCompany?: string;
    AND?: Prisma.D_CompanyWhereInput | Prisma.D_CompanyWhereInput[];
    OR?: Prisma.D_CompanyWhereInput[];
    NOT?: Prisma.D_CompanyWhereInput | Prisma.D_CompanyWhereInput[];
    name?: Prisma.StringFilter<"D_Company"> | string;
    address?: Prisma.StringFilter<"D_Company"> | string;
    phoneNumber?: Prisma.StringFilter<"D_Company"> | string;
    isVerified?: Prisma.BoolFilter<"D_Company"> | boolean;
    isBanned?: Prisma.BoolFilter<"D_Company"> | boolean;
    balance?: Prisma.IntFilter<"D_Company"> | number;
    couriers?: Prisma.CourierListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
}, "deliveryCompany">;
export type D_CompanyOrderByWithAggregationInput = {
    deliveryCompany?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isBanned?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    _count?: Prisma.D_CompanyCountOrderByAggregateInput;
    _avg?: Prisma.D_CompanyAvgOrderByAggregateInput;
    _max?: Prisma.D_CompanyMaxOrderByAggregateInput;
    _min?: Prisma.D_CompanyMinOrderByAggregateInput;
    _sum?: Prisma.D_CompanySumOrderByAggregateInput;
};
export type D_CompanyScalarWhereWithAggregatesInput = {
    AND?: Prisma.D_CompanyScalarWhereWithAggregatesInput | Prisma.D_CompanyScalarWhereWithAggregatesInput[];
    OR?: Prisma.D_CompanyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.D_CompanyScalarWhereWithAggregatesInput | Prisma.D_CompanyScalarWhereWithAggregatesInput[];
    deliveryCompany?: Prisma.UuidWithAggregatesFilter<"D_Company"> | string;
    name?: Prisma.StringWithAggregatesFilter<"D_Company"> | string;
    address?: Prisma.StringWithAggregatesFilter<"D_Company"> | string;
    phoneNumber?: Prisma.StringWithAggregatesFilter<"D_Company"> | string;
    isVerified?: Prisma.BoolWithAggregatesFilter<"D_Company"> | boolean;
    isBanned?: Prisma.BoolWithAggregatesFilter<"D_Company"> | boolean;
    balance?: Prisma.IntWithAggregatesFilter<"D_Company"> | number;
};
export type D_CompanyCreateInput = {
    deliveryCompany?: string;
    name: string;
    address: string;
    phoneNumber: string;
    isVerified?: boolean;
    isBanned?: boolean;
    balance: number;
    couriers?: Prisma.CourierCreateNestedManyWithoutDeliveryCompanyInput;
    orders?: Prisma.OrderCreateNestedManyWithoutDeliveryCompanyInput;
};
export type D_CompanyUncheckedCreateInput = {
    deliveryCompany?: string;
    name: string;
    address: string;
    phoneNumber: string;
    isVerified?: boolean;
    isBanned?: boolean;
    balance: number;
    couriers?: Prisma.CourierUncheckedCreateNestedManyWithoutDeliveryCompanyInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutDeliveryCompanyInput;
};
export type D_CompanyUpdateInput = {
    deliveryCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isBanned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.IntFieldUpdateOperationsInput | number;
    couriers?: Prisma.CourierUpdateManyWithoutDeliveryCompanyNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutDeliveryCompanyNestedInput;
};
export type D_CompanyUncheckedUpdateInput = {
    deliveryCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isBanned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.IntFieldUpdateOperationsInput | number;
    couriers?: Prisma.CourierUncheckedUpdateManyWithoutDeliveryCompanyNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutDeliveryCompanyNestedInput;
};
export type D_CompanyCreateManyInput = {
    deliveryCompany?: string;
    name: string;
    address: string;
    phoneNumber: string;
    isVerified?: boolean;
    isBanned?: boolean;
    balance: number;
};
export type D_CompanyUpdateManyMutationInput = {
    deliveryCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isBanned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type D_CompanyUncheckedUpdateManyInput = {
    deliveryCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isBanned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type D_CompanyScalarRelationFilter = {
    is?: Prisma.D_CompanyWhereInput;
    isNot?: Prisma.D_CompanyWhereInput;
};
export type D_CompanyCountOrderByAggregateInput = {
    deliveryCompany?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isBanned?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
};
export type D_CompanyAvgOrderByAggregateInput = {
    balance?: Prisma.SortOrder;
};
export type D_CompanyMaxOrderByAggregateInput = {
    deliveryCompany?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isBanned?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
};
export type D_CompanyMinOrderByAggregateInput = {
    deliveryCompany?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isBanned?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
};
export type D_CompanySumOrderByAggregateInput = {
    balance?: Prisma.SortOrder;
};
export type D_CompanyCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.D_CompanyCreateWithoutOrdersInput, Prisma.D_CompanyUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.D_CompanyCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.D_CompanyWhereUniqueInput;
};
export type D_CompanyUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.D_CompanyCreateWithoutOrdersInput, Prisma.D_CompanyUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.D_CompanyCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.D_CompanyUpsertWithoutOrdersInput;
    connect?: Prisma.D_CompanyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.D_CompanyUpdateToOneWithWhereWithoutOrdersInput, Prisma.D_CompanyUpdateWithoutOrdersInput>, Prisma.D_CompanyUncheckedUpdateWithoutOrdersInput>;
};
export type D_CompanyCreateNestedOneWithoutCouriersInput = {
    create?: Prisma.XOR<Prisma.D_CompanyCreateWithoutCouriersInput, Prisma.D_CompanyUncheckedCreateWithoutCouriersInput>;
    connectOrCreate?: Prisma.D_CompanyCreateOrConnectWithoutCouriersInput;
    connect?: Prisma.D_CompanyWhereUniqueInput;
};
export type D_CompanyUpdateOneRequiredWithoutCouriersNestedInput = {
    create?: Prisma.XOR<Prisma.D_CompanyCreateWithoutCouriersInput, Prisma.D_CompanyUncheckedCreateWithoutCouriersInput>;
    connectOrCreate?: Prisma.D_CompanyCreateOrConnectWithoutCouriersInput;
    upsert?: Prisma.D_CompanyUpsertWithoutCouriersInput;
    connect?: Prisma.D_CompanyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.D_CompanyUpdateToOneWithWhereWithoutCouriersInput, Prisma.D_CompanyUpdateWithoutCouriersInput>, Prisma.D_CompanyUncheckedUpdateWithoutCouriersInput>;
};
export type D_CompanyCreateWithoutOrdersInput = {
    deliveryCompany?: string;
    name: string;
    address: string;
    phoneNumber: string;
    isVerified?: boolean;
    isBanned?: boolean;
    balance: number;
    couriers?: Prisma.CourierCreateNestedManyWithoutDeliveryCompanyInput;
};
export type D_CompanyUncheckedCreateWithoutOrdersInput = {
    deliveryCompany?: string;
    name: string;
    address: string;
    phoneNumber: string;
    isVerified?: boolean;
    isBanned?: boolean;
    balance: number;
    couriers?: Prisma.CourierUncheckedCreateNestedManyWithoutDeliveryCompanyInput;
};
export type D_CompanyCreateOrConnectWithoutOrdersInput = {
    where: Prisma.D_CompanyWhereUniqueInput;
    create: Prisma.XOR<Prisma.D_CompanyCreateWithoutOrdersInput, Prisma.D_CompanyUncheckedCreateWithoutOrdersInput>;
};
export type D_CompanyUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.D_CompanyUpdateWithoutOrdersInput, Prisma.D_CompanyUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.D_CompanyCreateWithoutOrdersInput, Prisma.D_CompanyUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.D_CompanyWhereInput;
};
export type D_CompanyUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.D_CompanyWhereInput;
    data: Prisma.XOR<Prisma.D_CompanyUpdateWithoutOrdersInput, Prisma.D_CompanyUncheckedUpdateWithoutOrdersInput>;
};
export type D_CompanyUpdateWithoutOrdersInput = {
    deliveryCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isBanned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.IntFieldUpdateOperationsInput | number;
    couriers?: Prisma.CourierUpdateManyWithoutDeliveryCompanyNestedInput;
};
export type D_CompanyUncheckedUpdateWithoutOrdersInput = {
    deliveryCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isBanned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.IntFieldUpdateOperationsInput | number;
    couriers?: Prisma.CourierUncheckedUpdateManyWithoutDeliveryCompanyNestedInput;
};
export type D_CompanyCreateWithoutCouriersInput = {
    deliveryCompany?: string;
    name: string;
    address: string;
    phoneNumber: string;
    isVerified?: boolean;
    isBanned?: boolean;
    balance: number;
    orders?: Prisma.OrderCreateNestedManyWithoutDeliveryCompanyInput;
};
export type D_CompanyUncheckedCreateWithoutCouriersInput = {
    deliveryCompany?: string;
    name: string;
    address: string;
    phoneNumber: string;
    isVerified?: boolean;
    isBanned?: boolean;
    balance: number;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutDeliveryCompanyInput;
};
export type D_CompanyCreateOrConnectWithoutCouriersInput = {
    where: Prisma.D_CompanyWhereUniqueInput;
    create: Prisma.XOR<Prisma.D_CompanyCreateWithoutCouriersInput, Prisma.D_CompanyUncheckedCreateWithoutCouriersInput>;
};
export type D_CompanyUpsertWithoutCouriersInput = {
    update: Prisma.XOR<Prisma.D_CompanyUpdateWithoutCouriersInput, Prisma.D_CompanyUncheckedUpdateWithoutCouriersInput>;
    create: Prisma.XOR<Prisma.D_CompanyCreateWithoutCouriersInput, Prisma.D_CompanyUncheckedCreateWithoutCouriersInput>;
    where?: Prisma.D_CompanyWhereInput;
};
export type D_CompanyUpdateToOneWithWhereWithoutCouriersInput = {
    where?: Prisma.D_CompanyWhereInput;
    data: Prisma.XOR<Prisma.D_CompanyUpdateWithoutCouriersInput, Prisma.D_CompanyUncheckedUpdateWithoutCouriersInput>;
};
export type D_CompanyUpdateWithoutCouriersInput = {
    deliveryCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isBanned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.IntFieldUpdateOperationsInput | number;
    orders?: Prisma.OrderUpdateManyWithoutDeliveryCompanyNestedInput;
};
export type D_CompanyUncheckedUpdateWithoutCouriersInput = {
    deliveryCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isBanned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    balance?: Prisma.IntFieldUpdateOperationsInput | number;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutDeliveryCompanyNestedInput;
};
/**
 * Count Type D_CompanyCountOutputType
 */
export type D_CompanyCountOutputType = {
    couriers: number;
    orders: number;
};
export type D_CompanyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    couriers?: boolean | D_CompanyCountOutputTypeCountCouriersArgs;
    orders?: boolean | D_CompanyCountOutputTypeCountOrdersArgs;
};
/**
 * D_CompanyCountOutputType without action
 */
export type D_CompanyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the D_CompanyCountOutputType
     */
    select?: Prisma.D_CompanyCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * D_CompanyCountOutputType without action
 */
export type D_CompanyCountOutputTypeCountCouriersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourierWhereInput;
};
/**
 * D_CompanyCountOutputType without action
 */
export type D_CompanyCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type D_CompanySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    deliveryCompany?: boolean;
    name?: boolean;
    address?: boolean;
    phoneNumber?: boolean;
    isVerified?: boolean;
    isBanned?: boolean;
    balance?: boolean;
    couriers?: boolean | Prisma.D_Company$couriersArgs<ExtArgs>;
    orders?: boolean | Prisma.D_Company$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.D_CompanyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["d_Company"]>;
export type D_CompanySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    deliveryCompany?: boolean;
    name?: boolean;
    address?: boolean;
    phoneNumber?: boolean;
    isVerified?: boolean;
    isBanned?: boolean;
    balance?: boolean;
}, ExtArgs["result"]["d_Company"]>;
export type D_CompanySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    deliveryCompany?: boolean;
    name?: boolean;
    address?: boolean;
    phoneNumber?: boolean;
    isVerified?: boolean;
    isBanned?: boolean;
    balance?: boolean;
}, ExtArgs["result"]["d_Company"]>;
export type D_CompanySelectScalar = {
    deliveryCompany?: boolean;
    name?: boolean;
    address?: boolean;
    phoneNumber?: boolean;
    isVerified?: boolean;
    isBanned?: boolean;
    balance?: boolean;
};
export type D_CompanyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"deliveryCompany" | "name" | "address" | "phoneNumber" | "isVerified" | "isBanned" | "balance", ExtArgs["result"]["d_Company"]>;
export type D_CompanyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    couriers?: boolean | Prisma.D_Company$couriersArgs<ExtArgs>;
    orders?: boolean | Prisma.D_Company$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.D_CompanyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type D_CompanyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type D_CompanyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $D_CompanyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "D_Company";
    objects: {
        couriers: Prisma.$CourierPayload<ExtArgs>[];
        orders: Prisma.$OrderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        deliveryCompany: string;
        name: string;
        address: string;
        phoneNumber: string;
        isVerified: boolean;
        isBanned: boolean;
        balance: number;
    }, ExtArgs["result"]["d_Company"]>;
    composites: {};
};
export type D_CompanyGetPayload<S extends boolean | null | undefined | D_CompanyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$D_CompanyPayload, S>;
export type D_CompanyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<D_CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: D_CompanyCountAggregateInputType | true;
};
export interface D_CompanyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['D_Company'];
        meta: {
            name: 'D_Company';
        };
    };
    /**
     * Find zero or one D_Company that matches the filter.
     * @param {D_CompanyFindUniqueArgs} args - Arguments to find a D_Company
     * @example
     * // Get one D_Company
     * const d_Company = await prisma.d_Company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends D_CompanyFindUniqueArgs>(args: Prisma.SelectSubset<T, D_CompanyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__D_CompanyClient<runtime.Types.Result.GetResult<Prisma.$D_CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one D_Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {D_CompanyFindUniqueOrThrowArgs} args - Arguments to find a D_Company
     * @example
     * // Get one D_Company
     * const d_Company = await prisma.d_Company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends D_CompanyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, D_CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__D_CompanyClient<runtime.Types.Result.GetResult<Prisma.$D_CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first D_Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {D_CompanyFindFirstArgs} args - Arguments to find a D_Company
     * @example
     * // Get one D_Company
     * const d_Company = await prisma.d_Company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends D_CompanyFindFirstArgs>(args?: Prisma.SelectSubset<T, D_CompanyFindFirstArgs<ExtArgs>>): Prisma.Prisma__D_CompanyClient<runtime.Types.Result.GetResult<Prisma.$D_CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first D_Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {D_CompanyFindFirstOrThrowArgs} args - Arguments to find a D_Company
     * @example
     * // Get one D_Company
     * const d_Company = await prisma.d_Company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends D_CompanyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, D_CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__D_CompanyClient<runtime.Types.Result.GetResult<Prisma.$D_CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more D_Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {D_CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all D_Companies
     * const d_Companies = await prisma.d_Company.findMany()
     *
     * // Get first 10 D_Companies
     * const d_Companies = await prisma.d_Company.findMany({ take: 10 })
     *
     * // Only select the `deliveryCompany`
     * const d_CompanyWithDeliveryCompanyOnly = await prisma.d_Company.findMany({ select: { deliveryCompany: true } })
     *
     */
    findMany<T extends D_CompanyFindManyArgs>(args?: Prisma.SelectSubset<T, D_CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$D_CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a D_Company.
     * @param {D_CompanyCreateArgs} args - Arguments to create a D_Company.
     * @example
     * // Create one D_Company
     * const D_Company = await prisma.d_Company.create({
     *   data: {
     *     // ... data to create a D_Company
     *   }
     * })
     *
     */
    create<T extends D_CompanyCreateArgs>(args: Prisma.SelectSubset<T, D_CompanyCreateArgs<ExtArgs>>): Prisma.Prisma__D_CompanyClient<runtime.Types.Result.GetResult<Prisma.$D_CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many D_Companies.
     * @param {D_CompanyCreateManyArgs} args - Arguments to create many D_Companies.
     * @example
     * // Create many D_Companies
     * const d_Company = await prisma.d_Company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends D_CompanyCreateManyArgs>(args?: Prisma.SelectSubset<T, D_CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many D_Companies and returns the data saved in the database.
     * @param {D_CompanyCreateManyAndReturnArgs} args - Arguments to create many D_Companies.
     * @example
     * // Create many D_Companies
     * const d_Company = await prisma.d_Company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many D_Companies and only return the `deliveryCompany`
     * const d_CompanyWithDeliveryCompanyOnly = await prisma.d_Company.createManyAndReturn({
     *   select: { deliveryCompany: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends D_CompanyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, D_CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$D_CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a D_Company.
     * @param {D_CompanyDeleteArgs} args - Arguments to delete one D_Company.
     * @example
     * // Delete one D_Company
     * const D_Company = await prisma.d_Company.delete({
     *   where: {
     *     // ... filter to delete one D_Company
     *   }
     * })
     *
     */
    delete<T extends D_CompanyDeleteArgs>(args: Prisma.SelectSubset<T, D_CompanyDeleteArgs<ExtArgs>>): Prisma.Prisma__D_CompanyClient<runtime.Types.Result.GetResult<Prisma.$D_CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one D_Company.
     * @param {D_CompanyUpdateArgs} args - Arguments to update one D_Company.
     * @example
     * // Update one D_Company
     * const d_Company = await prisma.d_Company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends D_CompanyUpdateArgs>(args: Prisma.SelectSubset<T, D_CompanyUpdateArgs<ExtArgs>>): Prisma.Prisma__D_CompanyClient<runtime.Types.Result.GetResult<Prisma.$D_CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more D_Companies.
     * @param {D_CompanyDeleteManyArgs} args - Arguments to filter D_Companies to delete.
     * @example
     * // Delete a few D_Companies
     * const { count } = await prisma.d_Company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends D_CompanyDeleteManyArgs>(args?: Prisma.SelectSubset<T, D_CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more D_Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {D_CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many D_Companies
     * const d_Company = await prisma.d_Company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends D_CompanyUpdateManyArgs>(args: Prisma.SelectSubset<T, D_CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more D_Companies and returns the data updated in the database.
     * @param {D_CompanyUpdateManyAndReturnArgs} args - Arguments to update many D_Companies.
     * @example
     * // Update many D_Companies
     * const d_Company = await prisma.d_Company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more D_Companies and only return the `deliveryCompany`
     * const d_CompanyWithDeliveryCompanyOnly = await prisma.d_Company.updateManyAndReturn({
     *   select: { deliveryCompany: true },
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
    updateManyAndReturn<T extends D_CompanyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, D_CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$D_CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one D_Company.
     * @param {D_CompanyUpsertArgs} args - Arguments to update or create a D_Company.
     * @example
     * // Update or create a D_Company
     * const d_Company = await prisma.d_Company.upsert({
     *   create: {
     *     // ... data to create a D_Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the D_Company we want to update
     *   }
     * })
     */
    upsert<T extends D_CompanyUpsertArgs>(args: Prisma.SelectSubset<T, D_CompanyUpsertArgs<ExtArgs>>): Prisma.Prisma__D_CompanyClient<runtime.Types.Result.GetResult<Prisma.$D_CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of D_Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {D_CompanyCountArgs} args - Arguments to filter D_Companies to count.
     * @example
     * // Count the number of D_Companies
     * const count = await prisma.d_Company.count({
     *   where: {
     *     // ... the filter for the D_Companies we want to count
     *   }
     * })
    **/
    count<T extends D_CompanyCountArgs>(args?: Prisma.Subset<T, D_CompanyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], D_CompanyCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a D_Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {D_CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends D_CompanyAggregateArgs>(args: Prisma.Subset<T, D_CompanyAggregateArgs>): Prisma.PrismaPromise<GetD_CompanyAggregateType<T>>;
    /**
     * Group by D_Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {D_CompanyGroupByArgs} args - Group by arguments.
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
    groupBy<T extends D_CompanyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: D_CompanyGroupByArgs['orderBy'];
    } : {
        orderBy?: D_CompanyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, D_CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetD_CompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the D_Company model
     */
    readonly fields: D_CompanyFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for D_Company.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__D_CompanyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    couriers<T extends Prisma.D_Company$couriersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.D_Company$couriersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orders<T extends Prisma.D_Company$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.D_Company$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the D_Company model
 */
export interface D_CompanyFieldRefs {
    readonly deliveryCompany: Prisma.FieldRef<"D_Company", 'String'>;
    readonly name: Prisma.FieldRef<"D_Company", 'String'>;
    readonly address: Prisma.FieldRef<"D_Company", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"D_Company", 'String'>;
    readonly isVerified: Prisma.FieldRef<"D_Company", 'Boolean'>;
    readonly isBanned: Prisma.FieldRef<"D_Company", 'Boolean'>;
    readonly balance: Prisma.FieldRef<"D_Company", 'Int'>;
}
/**
 * D_Company findUnique
 */
export type D_CompanyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the D_Company
     */
    select?: Prisma.D_CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the D_Company
     */
    omit?: Prisma.D_CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.D_CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which D_Company to fetch.
     */
    where: Prisma.D_CompanyWhereUniqueInput;
};
/**
 * D_Company findUniqueOrThrow
 */
export type D_CompanyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the D_Company
     */
    select?: Prisma.D_CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the D_Company
     */
    omit?: Prisma.D_CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.D_CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which D_Company to fetch.
     */
    where: Prisma.D_CompanyWhereUniqueInput;
};
/**
 * D_Company findFirst
 */
export type D_CompanyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the D_Company
     */
    select?: Prisma.D_CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the D_Company
     */
    omit?: Prisma.D_CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.D_CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which D_Company to fetch.
     */
    where?: Prisma.D_CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of D_Companies to fetch.
     */
    orderBy?: Prisma.D_CompanyOrderByWithRelationInput | Prisma.D_CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for D_Companies.
     */
    cursor?: Prisma.D_CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` D_Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` D_Companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of D_Companies.
     */
    distinct?: Prisma.D_CompanyScalarFieldEnum | Prisma.D_CompanyScalarFieldEnum[];
};
/**
 * D_Company findFirstOrThrow
 */
export type D_CompanyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the D_Company
     */
    select?: Prisma.D_CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the D_Company
     */
    omit?: Prisma.D_CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.D_CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which D_Company to fetch.
     */
    where?: Prisma.D_CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of D_Companies to fetch.
     */
    orderBy?: Prisma.D_CompanyOrderByWithRelationInput | Prisma.D_CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for D_Companies.
     */
    cursor?: Prisma.D_CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` D_Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` D_Companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of D_Companies.
     */
    distinct?: Prisma.D_CompanyScalarFieldEnum | Prisma.D_CompanyScalarFieldEnum[];
};
/**
 * D_Company findMany
 */
export type D_CompanyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the D_Company
     */
    select?: Prisma.D_CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the D_Company
     */
    omit?: Prisma.D_CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.D_CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which D_Companies to fetch.
     */
    where?: Prisma.D_CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of D_Companies to fetch.
     */
    orderBy?: Prisma.D_CompanyOrderByWithRelationInput | Prisma.D_CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing D_Companies.
     */
    cursor?: Prisma.D_CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` D_Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` D_Companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of D_Companies.
     */
    distinct?: Prisma.D_CompanyScalarFieldEnum | Prisma.D_CompanyScalarFieldEnum[];
};
/**
 * D_Company create
 */
export type D_CompanyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the D_Company
     */
    select?: Prisma.D_CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the D_Company
     */
    omit?: Prisma.D_CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.D_CompanyInclude<ExtArgs> | null;
    /**
     * The data needed to create a D_Company.
     */
    data: Prisma.XOR<Prisma.D_CompanyCreateInput, Prisma.D_CompanyUncheckedCreateInput>;
};
/**
 * D_Company createMany
 */
export type D_CompanyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many D_Companies.
     */
    data: Prisma.D_CompanyCreateManyInput | Prisma.D_CompanyCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * D_Company createManyAndReturn
 */
export type D_CompanyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the D_Company
     */
    select?: Prisma.D_CompanySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the D_Company
     */
    omit?: Prisma.D_CompanyOmit<ExtArgs> | null;
    /**
     * The data used to create many D_Companies.
     */
    data: Prisma.D_CompanyCreateManyInput | Prisma.D_CompanyCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * D_Company update
 */
export type D_CompanyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the D_Company
     */
    select?: Prisma.D_CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the D_Company
     */
    omit?: Prisma.D_CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.D_CompanyInclude<ExtArgs> | null;
    /**
     * The data needed to update a D_Company.
     */
    data: Prisma.XOR<Prisma.D_CompanyUpdateInput, Prisma.D_CompanyUncheckedUpdateInput>;
    /**
     * Choose, which D_Company to update.
     */
    where: Prisma.D_CompanyWhereUniqueInput;
};
/**
 * D_Company updateMany
 */
export type D_CompanyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update D_Companies.
     */
    data: Prisma.XOR<Prisma.D_CompanyUpdateManyMutationInput, Prisma.D_CompanyUncheckedUpdateManyInput>;
    /**
     * Filter which D_Companies to update
     */
    where?: Prisma.D_CompanyWhereInput;
    /**
     * Limit how many D_Companies to update.
     */
    limit?: number;
};
/**
 * D_Company updateManyAndReturn
 */
export type D_CompanyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the D_Company
     */
    select?: Prisma.D_CompanySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the D_Company
     */
    omit?: Prisma.D_CompanyOmit<ExtArgs> | null;
    /**
     * The data used to update D_Companies.
     */
    data: Prisma.XOR<Prisma.D_CompanyUpdateManyMutationInput, Prisma.D_CompanyUncheckedUpdateManyInput>;
    /**
     * Filter which D_Companies to update
     */
    where?: Prisma.D_CompanyWhereInput;
    /**
     * Limit how many D_Companies to update.
     */
    limit?: number;
};
/**
 * D_Company upsert
 */
export type D_CompanyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the D_Company
     */
    select?: Prisma.D_CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the D_Company
     */
    omit?: Prisma.D_CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.D_CompanyInclude<ExtArgs> | null;
    /**
     * The filter to search for the D_Company to update in case it exists.
     */
    where: Prisma.D_CompanyWhereUniqueInput;
    /**
     * In case the D_Company found by the `where` argument doesn't exist, create a new D_Company with this data.
     */
    create: Prisma.XOR<Prisma.D_CompanyCreateInput, Prisma.D_CompanyUncheckedCreateInput>;
    /**
     * In case the D_Company was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.D_CompanyUpdateInput, Prisma.D_CompanyUncheckedUpdateInput>;
};
/**
 * D_Company delete
 */
export type D_CompanyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the D_Company
     */
    select?: Prisma.D_CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the D_Company
     */
    omit?: Prisma.D_CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.D_CompanyInclude<ExtArgs> | null;
    /**
     * Filter which D_Company to delete.
     */
    where: Prisma.D_CompanyWhereUniqueInput;
};
/**
 * D_Company deleteMany
 */
export type D_CompanyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which D_Companies to delete
     */
    where?: Prisma.D_CompanyWhereInput;
    /**
     * Limit how many D_Companies to delete.
     */
    limit?: number;
};
/**
 * D_Company.couriers
 */
export type D_Company$couriersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.CourierOrderByWithRelationInput | Prisma.CourierOrderByWithRelationInput[];
    cursor?: Prisma.CourierWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourierScalarFieldEnum | Prisma.CourierScalarFieldEnum[];
};
/**
 * D_Company.orders
 */
export type D_Company$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
/**
 * D_Company without action
 */
export type D_CompanyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the D_Company
     */
    select?: Prisma.D_CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the D_Company
     */
    omit?: Prisma.D_CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.D_CompanyInclude<ExtArgs> | null;
};
//# sourceMappingURL=D_Company.d.ts.map