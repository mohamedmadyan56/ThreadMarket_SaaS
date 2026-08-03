import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model BrandDocument
 *
 */
export type BrandDocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$BrandDocumentPayload>;
export type AggregateBrandDocument = {
    _count: BrandDocumentCountAggregateOutputType | null;
    _min: BrandDocumentMinAggregateOutputType | null;
    _max: BrandDocumentMaxAggregateOutputType | null;
};
export type BrandDocumentMinAggregateOutputType = {
    id: string | null;
    brandId: string | null;
    docType: string | null;
    fileUrl: string | null;
    reviewedBy: string | null;
    reviewedAt: Date | null;
    status: string | null;
    createdAt: Date | null;
    rejectionReason: $Enums.BrandDocRejectionReason | null;
};
export type BrandDocumentMaxAggregateOutputType = {
    id: string | null;
    brandId: string | null;
    docType: string | null;
    fileUrl: string | null;
    reviewedBy: string | null;
    reviewedAt: Date | null;
    status: string | null;
    createdAt: Date | null;
    rejectionReason: $Enums.BrandDocRejectionReason | null;
};
export type BrandDocumentCountAggregateOutputType = {
    id: number;
    brandId: number;
    docType: number;
    fileUrl: number;
    reviewedBy: number;
    reviewedAt: number;
    status: number;
    createdAt: number;
    rejectionReason: number;
    _all: number;
};
export type BrandDocumentMinAggregateInputType = {
    id?: true;
    brandId?: true;
    docType?: true;
    fileUrl?: true;
    reviewedBy?: true;
    reviewedAt?: true;
    status?: true;
    createdAt?: true;
    rejectionReason?: true;
};
export type BrandDocumentMaxAggregateInputType = {
    id?: true;
    brandId?: true;
    docType?: true;
    fileUrl?: true;
    reviewedBy?: true;
    reviewedAt?: true;
    status?: true;
    createdAt?: true;
    rejectionReason?: true;
};
export type BrandDocumentCountAggregateInputType = {
    id?: true;
    brandId?: true;
    docType?: true;
    fileUrl?: true;
    reviewedBy?: true;
    reviewedAt?: true;
    status?: true;
    createdAt?: true;
    rejectionReason?: true;
    _all?: true;
};
export type BrandDocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BrandDocument to aggregate.
     */
    where?: Prisma.BrandDocumentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BrandDocuments to fetch.
     */
    orderBy?: Prisma.BrandDocumentOrderByWithRelationInput | Prisma.BrandDocumentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BrandDocumentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BrandDocuments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BrandDocuments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BrandDocuments
    **/
    _count?: true | BrandDocumentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BrandDocumentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BrandDocumentMaxAggregateInputType;
};
export type GetBrandDocumentAggregateType<T extends BrandDocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateBrandDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBrandDocument[P]> : Prisma.GetScalarType<T[P], AggregateBrandDocument[P]>;
};
export type BrandDocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandDocumentWhereInput;
    orderBy?: Prisma.BrandDocumentOrderByWithAggregationInput | Prisma.BrandDocumentOrderByWithAggregationInput[];
    by: Prisma.BrandDocumentScalarFieldEnum[] | Prisma.BrandDocumentScalarFieldEnum;
    having?: Prisma.BrandDocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BrandDocumentCountAggregateInputType | true;
    _min?: BrandDocumentMinAggregateInputType;
    _max?: BrandDocumentMaxAggregateInputType;
};
export type BrandDocumentGroupByOutputType = {
    id: string;
    brandId: string;
    docType: string;
    fileUrl: string;
    reviewedBy: string | null;
    reviewedAt: Date | null;
    status: string;
    createdAt: Date;
    rejectionReason: $Enums.BrandDocRejectionReason;
    _count: BrandDocumentCountAggregateOutputType | null;
    _min: BrandDocumentMinAggregateOutputType | null;
    _max: BrandDocumentMaxAggregateOutputType | null;
};
export type GetBrandDocumentGroupByPayload<T extends BrandDocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BrandDocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BrandDocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BrandDocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BrandDocumentGroupByOutputType[P]>;
}>>;
export type BrandDocumentWhereInput = {
    AND?: Prisma.BrandDocumentWhereInput | Prisma.BrandDocumentWhereInput[];
    OR?: Prisma.BrandDocumentWhereInput[];
    NOT?: Prisma.BrandDocumentWhereInput | Prisma.BrandDocumentWhereInput[];
    id?: Prisma.UuidFilter<"BrandDocument"> | string;
    brandId?: Prisma.UuidFilter<"BrandDocument"> | string;
    docType?: Prisma.StringFilter<"BrandDocument"> | string;
    fileUrl?: Prisma.StringFilter<"BrandDocument"> | string;
    reviewedBy?: Prisma.UuidNullableFilter<"BrandDocument"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"BrandDocument"> | Date | string | null;
    status?: Prisma.StringFilter<"BrandDocument"> | string;
    createdAt?: Prisma.DateTimeFilter<"BrandDocument"> | Date | string;
    rejectionReason?: Prisma.EnumBrandDocRejectionReasonFilter<"BrandDocument"> | $Enums.BrandDocRejectionReason;
    brand?: Prisma.XOR<Prisma.BrandScalarRelationFilter, Prisma.BrandWhereInput>;
    reviewer?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type BrandDocumentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    docType?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    brand?: Prisma.BrandOrderByWithRelationInput;
    reviewer?: Prisma.UserOrderByWithRelationInput;
};
export type BrandDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BrandDocumentWhereInput | Prisma.BrandDocumentWhereInput[];
    OR?: Prisma.BrandDocumentWhereInput[];
    NOT?: Prisma.BrandDocumentWhereInput | Prisma.BrandDocumentWhereInput[];
    brandId?: Prisma.UuidFilter<"BrandDocument"> | string;
    docType?: Prisma.StringFilter<"BrandDocument"> | string;
    fileUrl?: Prisma.StringFilter<"BrandDocument"> | string;
    reviewedBy?: Prisma.UuidNullableFilter<"BrandDocument"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"BrandDocument"> | Date | string | null;
    status?: Prisma.StringFilter<"BrandDocument"> | string;
    createdAt?: Prisma.DateTimeFilter<"BrandDocument"> | Date | string;
    rejectionReason?: Prisma.EnumBrandDocRejectionReasonFilter<"BrandDocument"> | $Enums.BrandDocRejectionReason;
    brand?: Prisma.XOR<Prisma.BrandScalarRelationFilter, Prisma.BrandWhereInput>;
    reviewer?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type BrandDocumentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    docType?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    _count?: Prisma.BrandDocumentCountOrderByAggregateInput;
    _max?: Prisma.BrandDocumentMaxOrderByAggregateInput;
    _min?: Prisma.BrandDocumentMinOrderByAggregateInput;
};
export type BrandDocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.BrandDocumentScalarWhereWithAggregatesInput | Prisma.BrandDocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.BrandDocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BrandDocumentScalarWhereWithAggregatesInput | Prisma.BrandDocumentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BrandDocument"> | string;
    brandId?: Prisma.UuidWithAggregatesFilter<"BrandDocument"> | string;
    docType?: Prisma.StringWithAggregatesFilter<"BrandDocument"> | string;
    fileUrl?: Prisma.StringWithAggregatesFilter<"BrandDocument"> | string;
    reviewedBy?: Prisma.UuidNullableWithAggregatesFilter<"BrandDocument"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BrandDocument"> | Date | string | null;
    status?: Prisma.StringWithAggregatesFilter<"BrandDocument"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BrandDocument"> | Date | string;
    rejectionReason?: Prisma.EnumBrandDocRejectionReasonWithAggregatesFilter<"BrandDocument"> | $Enums.BrandDocRejectionReason;
};
export type BrandDocumentCreateInput = {
    id?: string;
    docType: string;
    fileUrl: string;
    reviewedAt?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    rejectionReason: $Enums.BrandDocRejectionReason;
    brand: Prisma.BrandCreateNestedOneWithoutDocumentsInput;
    reviewer?: Prisma.UserCreateNestedOneWithoutReviewedBrandDocsInput;
};
export type BrandDocumentUncheckedCreateInput = {
    id?: string;
    brandId: string;
    docType: string;
    fileUrl: string;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    rejectionReason: $Enums.BrandDocRejectionReason;
};
export type BrandDocumentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rejectionReason?: Prisma.EnumBrandDocRejectionReasonFieldUpdateOperationsInput | $Enums.BrandDocRejectionReason;
    brand?: Prisma.BrandUpdateOneRequiredWithoutDocumentsNestedInput;
    reviewer?: Prisma.UserUpdateOneWithoutReviewedBrandDocsNestedInput;
};
export type BrandDocumentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rejectionReason?: Prisma.EnumBrandDocRejectionReasonFieldUpdateOperationsInput | $Enums.BrandDocRejectionReason;
};
export type BrandDocumentCreateManyInput = {
    id?: string;
    brandId: string;
    docType: string;
    fileUrl: string;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    rejectionReason: $Enums.BrandDocRejectionReason;
};
export type BrandDocumentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rejectionReason?: Prisma.EnumBrandDocRejectionReasonFieldUpdateOperationsInput | $Enums.BrandDocRejectionReason;
};
export type BrandDocumentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rejectionReason?: Prisma.EnumBrandDocRejectionReasonFieldUpdateOperationsInput | $Enums.BrandDocRejectionReason;
};
export type BrandDocumentListRelationFilter = {
    every?: Prisma.BrandDocumentWhereInput;
    some?: Prisma.BrandDocumentWhereInput;
    none?: Prisma.BrandDocumentWhereInput;
};
export type BrandDocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BrandDocumentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    docType?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
};
export type BrandDocumentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    docType?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
};
export type BrandDocumentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    docType?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
};
export type BrandDocumentCreateNestedManyWithoutReviewerInput = {
    create?: Prisma.XOR<Prisma.BrandDocumentCreateWithoutReviewerInput, Prisma.BrandDocumentUncheckedCreateWithoutReviewerInput> | Prisma.BrandDocumentCreateWithoutReviewerInput[] | Prisma.BrandDocumentUncheckedCreateWithoutReviewerInput[];
    connectOrCreate?: Prisma.BrandDocumentCreateOrConnectWithoutReviewerInput | Prisma.BrandDocumentCreateOrConnectWithoutReviewerInput[];
    createMany?: Prisma.BrandDocumentCreateManyReviewerInputEnvelope;
    connect?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
};
export type BrandDocumentUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: Prisma.XOR<Prisma.BrandDocumentCreateWithoutReviewerInput, Prisma.BrandDocumentUncheckedCreateWithoutReviewerInput> | Prisma.BrandDocumentCreateWithoutReviewerInput[] | Prisma.BrandDocumentUncheckedCreateWithoutReviewerInput[];
    connectOrCreate?: Prisma.BrandDocumentCreateOrConnectWithoutReviewerInput | Prisma.BrandDocumentCreateOrConnectWithoutReviewerInput[];
    createMany?: Prisma.BrandDocumentCreateManyReviewerInputEnvelope;
    connect?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
};
export type BrandDocumentUpdateManyWithoutReviewerNestedInput = {
    create?: Prisma.XOR<Prisma.BrandDocumentCreateWithoutReviewerInput, Prisma.BrandDocumentUncheckedCreateWithoutReviewerInput> | Prisma.BrandDocumentCreateWithoutReviewerInput[] | Prisma.BrandDocumentUncheckedCreateWithoutReviewerInput[];
    connectOrCreate?: Prisma.BrandDocumentCreateOrConnectWithoutReviewerInput | Prisma.BrandDocumentCreateOrConnectWithoutReviewerInput[];
    upsert?: Prisma.BrandDocumentUpsertWithWhereUniqueWithoutReviewerInput | Prisma.BrandDocumentUpsertWithWhereUniqueWithoutReviewerInput[];
    createMany?: Prisma.BrandDocumentCreateManyReviewerInputEnvelope;
    set?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
    disconnect?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
    delete?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
    connect?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
    update?: Prisma.BrandDocumentUpdateWithWhereUniqueWithoutReviewerInput | Prisma.BrandDocumentUpdateWithWhereUniqueWithoutReviewerInput[];
    updateMany?: Prisma.BrandDocumentUpdateManyWithWhereWithoutReviewerInput | Prisma.BrandDocumentUpdateManyWithWhereWithoutReviewerInput[];
    deleteMany?: Prisma.BrandDocumentScalarWhereInput | Prisma.BrandDocumentScalarWhereInput[];
};
export type BrandDocumentUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: Prisma.XOR<Prisma.BrandDocumentCreateWithoutReviewerInput, Prisma.BrandDocumentUncheckedCreateWithoutReviewerInput> | Prisma.BrandDocumentCreateWithoutReviewerInput[] | Prisma.BrandDocumentUncheckedCreateWithoutReviewerInput[];
    connectOrCreate?: Prisma.BrandDocumentCreateOrConnectWithoutReviewerInput | Prisma.BrandDocumentCreateOrConnectWithoutReviewerInput[];
    upsert?: Prisma.BrandDocumentUpsertWithWhereUniqueWithoutReviewerInput | Prisma.BrandDocumentUpsertWithWhereUniqueWithoutReviewerInput[];
    createMany?: Prisma.BrandDocumentCreateManyReviewerInputEnvelope;
    set?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
    disconnect?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
    delete?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
    connect?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
    update?: Prisma.BrandDocumentUpdateWithWhereUniqueWithoutReviewerInput | Prisma.BrandDocumentUpdateWithWhereUniqueWithoutReviewerInput[];
    updateMany?: Prisma.BrandDocumentUpdateManyWithWhereWithoutReviewerInput | Prisma.BrandDocumentUpdateManyWithWhereWithoutReviewerInput[];
    deleteMany?: Prisma.BrandDocumentScalarWhereInput | Prisma.BrandDocumentScalarWhereInput[];
};
export type BrandDocumentCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.BrandDocumentCreateWithoutBrandInput, Prisma.BrandDocumentUncheckedCreateWithoutBrandInput> | Prisma.BrandDocumentCreateWithoutBrandInput[] | Prisma.BrandDocumentUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandDocumentCreateOrConnectWithoutBrandInput | Prisma.BrandDocumentCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.BrandDocumentCreateManyBrandInputEnvelope;
    connect?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
};
export type BrandDocumentUncheckedCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.BrandDocumentCreateWithoutBrandInput, Prisma.BrandDocumentUncheckedCreateWithoutBrandInput> | Prisma.BrandDocumentCreateWithoutBrandInput[] | Prisma.BrandDocumentUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandDocumentCreateOrConnectWithoutBrandInput | Prisma.BrandDocumentCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.BrandDocumentCreateManyBrandInputEnvelope;
    connect?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
};
export type BrandDocumentUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.BrandDocumentCreateWithoutBrandInput, Prisma.BrandDocumentUncheckedCreateWithoutBrandInput> | Prisma.BrandDocumentCreateWithoutBrandInput[] | Prisma.BrandDocumentUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandDocumentCreateOrConnectWithoutBrandInput | Prisma.BrandDocumentCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.BrandDocumentUpsertWithWhereUniqueWithoutBrandInput | Prisma.BrandDocumentUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.BrandDocumentCreateManyBrandInputEnvelope;
    set?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
    disconnect?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
    delete?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
    connect?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
    update?: Prisma.BrandDocumentUpdateWithWhereUniqueWithoutBrandInput | Prisma.BrandDocumentUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.BrandDocumentUpdateManyWithWhereWithoutBrandInput | Prisma.BrandDocumentUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.BrandDocumentScalarWhereInput | Prisma.BrandDocumentScalarWhereInput[];
};
export type BrandDocumentUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.BrandDocumentCreateWithoutBrandInput, Prisma.BrandDocumentUncheckedCreateWithoutBrandInput> | Prisma.BrandDocumentCreateWithoutBrandInput[] | Prisma.BrandDocumentUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandDocumentCreateOrConnectWithoutBrandInput | Prisma.BrandDocumentCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.BrandDocumentUpsertWithWhereUniqueWithoutBrandInput | Prisma.BrandDocumentUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.BrandDocumentCreateManyBrandInputEnvelope;
    set?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
    disconnect?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
    delete?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
    connect?: Prisma.BrandDocumentWhereUniqueInput | Prisma.BrandDocumentWhereUniqueInput[];
    update?: Prisma.BrandDocumentUpdateWithWhereUniqueWithoutBrandInput | Prisma.BrandDocumentUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.BrandDocumentUpdateManyWithWhereWithoutBrandInput | Prisma.BrandDocumentUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.BrandDocumentScalarWhereInput | Prisma.BrandDocumentScalarWhereInput[];
};
export type EnumBrandDocRejectionReasonFieldUpdateOperationsInput = {
    set?: $Enums.BrandDocRejectionReason;
};
export type BrandDocumentCreateWithoutReviewerInput = {
    id?: string;
    docType: string;
    fileUrl: string;
    reviewedAt?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    rejectionReason: $Enums.BrandDocRejectionReason;
    brand: Prisma.BrandCreateNestedOneWithoutDocumentsInput;
};
export type BrandDocumentUncheckedCreateWithoutReviewerInput = {
    id?: string;
    brandId: string;
    docType: string;
    fileUrl: string;
    reviewedAt?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    rejectionReason: $Enums.BrandDocRejectionReason;
};
export type BrandDocumentCreateOrConnectWithoutReviewerInput = {
    where: Prisma.BrandDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandDocumentCreateWithoutReviewerInput, Prisma.BrandDocumentUncheckedCreateWithoutReviewerInput>;
};
export type BrandDocumentCreateManyReviewerInputEnvelope = {
    data: Prisma.BrandDocumentCreateManyReviewerInput | Prisma.BrandDocumentCreateManyReviewerInput[];
    skipDuplicates?: boolean;
};
export type BrandDocumentUpsertWithWhereUniqueWithoutReviewerInput = {
    where: Prisma.BrandDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.BrandDocumentUpdateWithoutReviewerInput, Prisma.BrandDocumentUncheckedUpdateWithoutReviewerInput>;
    create: Prisma.XOR<Prisma.BrandDocumentCreateWithoutReviewerInput, Prisma.BrandDocumentUncheckedCreateWithoutReviewerInput>;
};
export type BrandDocumentUpdateWithWhereUniqueWithoutReviewerInput = {
    where: Prisma.BrandDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.BrandDocumentUpdateWithoutReviewerInput, Prisma.BrandDocumentUncheckedUpdateWithoutReviewerInput>;
};
export type BrandDocumentUpdateManyWithWhereWithoutReviewerInput = {
    where: Prisma.BrandDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.BrandDocumentUpdateManyMutationInput, Prisma.BrandDocumentUncheckedUpdateManyWithoutReviewerInput>;
};
export type BrandDocumentScalarWhereInput = {
    AND?: Prisma.BrandDocumentScalarWhereInput | Prisma.BrandDocumentScalarWhereInput[];
    OR?: Prisma.BrandDocumentScalarWhereInput[];
    NOT?: Prisma.BrandDocumentScalarWhereInput | Prisma.BrandDocumentScalarWhereInput[];
    id?: Prisma.UuidFilter<"BrandDocument"> | string;
    brandId?: Prisma.UuidFilter<"BrandDocument"> | string;
    docType?: Prisma.StringFilter<"BrandDocument"> | string;
    fileUrl?: Prisma.StringFilter<"BrandDocument"> | string;
    reviewedBy?: Prisma.UuidNullableFilter<"BrandDocument"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"BrandDocument"> | Date | string | null;
    status?: Prisma.StringFilter<"BrandDocument"> | string;
    createdAt?: Prisma.DateTimeFilter<"BrandDocument"> | Date | string;
    rejectionReason?: Prisma.EnumBrandDocRejectionReasonFilter<"BrandDocument"> | $Enums.BrandDocRejectionReason;
};
export type BrandDocumentCreateWithoutBrandInput = {
    id?: string;
    docType: string;
    fileUrl: string;
    reviewedAt?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    rejectionReason: $Enums.BrandDocRejectionReason;
    reviewer?: Prisma.UserCreateNestedOneWithoutReviewedBrandDocsInput;
};
export type BrandDocumentUncheckedCreateWithoutBrandInput = {
    id?: string;
    docType: string;
    fileUrl: string;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    rejectionReason: $Enums.BrandDocRejectionReason;
};
export type BrandDocumentCreateOrConnectWithoutBrandInput = {
    where: Prisma.BrandDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandDocumentCreateWithoutBrandInput, Prisma.BrandDocumentUncheckedCreateWithoutBrandInput>;
};
export type BrandDocumentCreateManyBrandInputEnvelope = {
    data: Prisma.BrandDocumentCreateManyBrandInput | Prisma.BrandDocumentCreateManyBrandInput[];
    skipDuplicates?: boolean;
};
export type BrandDocumentUpsertWithWhereUniqueWithoutBrandInput = {
    where: Prisma.BrandDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.BrandDocumentUpdateWithoutBrandInput, Prisma.BrandDocumentUncheckedUpdateWithoutBrandInput>;
    create: Prisma.XOR<Prisma.BrandDocumentCreateWithoutBrandInput, Prisma.BrandDocumentUncheckedCreateWithoutBrandInput>;
};
export type BrandDocumentUpdateWithWhereUniqueWithoutBrandInput = {
    where: Prisma.BrandDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.BrandDocumentUpdateWithoutBrandInput, Prisma.BrandDocumentUncheckedUpdateWithoutBrandInput>;
};
export type BrandDocumentUpdateManyWithWhereWithoutBrandInput = {
    where: Prisma.BrandDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.BrandDocumentUpdateManyMutationInput, Prisma.BrandDocumentUncheckedUpdateManyWithoutBrandInput>;
};
export type BrandDocumentCreateManyReviewerInput = {
    id?: string;
    brandId: string;
    docType: string;
    fileUrl: string;
    reviewedAt?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    rejectionReason: $Enums.BrandDocRejectionReason;
};
export type BrandDocumentUpdateWithoutReviewerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rejectionReason?: Prisma.EnumBrandDocRejectionReasonFieldUpdateOperationsInput | $Enums.BrandDocRejectionReason;
    brand?: Prisma.BrandUpdateOneRequiredWithoutDocumentsNestedInput;
};
export type BrandDocumentUncheckedUpdateWithoutReviewerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rejectionReason?: Prisma.EnumBrandDocRejectionReasonFieldUpdateOperationsInput | $Enums.BrandDocRejectionReason;
};
export type BrandDocumentUncheckedUpdateManyWithoutReviewerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rejectionReason?: Prisma.EnumBrandDocRejectionReasonFieldUpdateOperationsInput | $Enums.BrandDocRejectionReason;
};
export type BrandDocumentCreateManyBrandInput = {
    id?: string;
    docType: string;
    fileUrl: string;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    rejectionReason: $Enums.BrandDocRejectionReason;
};
export type BrandDocumentUpdateWithoutBrandInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rejectionReason?: Prisma.EnumBrandDocRejectionReasonFieldUpdateOperationsInput | $Enums.BrandDocRejectionReason;
    reviewer?: Prisma.UserUpdateOneWithoutReviewedBrandDocsNestedInput;
};
export type BrandDocumentUncheckedUpdateWithoutBrandInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rejectionReason?: Prisma.EnumBrandDocRejectionReasonFieldUpdateOperationsInput | $Enums.BrandDocRejectionReason;
};
export type BrandDocumentUncheckedUpdateManyWithoutBrandInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rejectionReason?: Prisma.EnumBrandDocRejectionReasonFieldUpdateOperationsInput | $Enums.BrandDocRejectionReason;
};
export type BrandDocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    brandId?: boolean;
    docType?: boolean;
    fileUrl?: boolean;
    reviewedBy?: boolean;
    reviewedAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
    rejectionReason?: boolean;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    reviewer?: boolean | Prisma.BrandDocument$reviewerArgs<ExtArgs>;
}, ExtArgs["result"]["brandDocument"]>;
export type BrandDocumentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    brandId?: boolean;
    docType?: boolean;
    fileUrl?: boolean;
    reviewedBy?: boolean;
    reviewedAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
    rejectionReason?: boolean;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    reviewer?: boolean | Prisma.BrandDocument$reviewerArgs<ExtArgs>;
}, ExtArgs["result"]["brandDocument"]>;
export type BrandDocumentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    brandId?: boolean;
    docType?: boolean;
    fileUrl?: boolean;
    reviewedBy?: boolean;
    reviewedAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
    rejectionReason?: boolean;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    reviewer?: boolean | Prisma.BrandDocument$reviewerArgs<ExtArgs>;
}, ExtArgs["result"]["brandDocument"]>;
export type BrandDocumentSelectScalar = {
    id?: boolean;
    brandId?: boolean;
    docType?: boolean;
    fileUrl?: boolean;
    reviewedBy?: boolean;
    reviewedAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
    rejectionReason?: boolean;
};
export type BrandDocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "brandId" | "docType" | "fileUrl" | "reviewedBy" | "reviewedAt" | "status" | "createdAt" | "rejectionReason", ExtArgs["result"]["brandDocument"]>;
export type BrandDocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    reviewer?: boolean | Prisma.BrandDocument$reviewerArgs<ExtArgs>;
};
export type BrandDocumentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    reviewer?: boolean | Prisma.BrandDocument$reviewerArgs<ExtArgs>;
};
export type BrandDocumentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    reviewer?: boolean | Prisma.BrandDocument$reviewerArgs<ExtArgs>;
};
export type $BrandDocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BrandDocument";
    objects: {
        brand: Prisma.$BrandPayload<ExtArgs>;
        reviewer: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        brandId: string;
        docType: string;
        fileUrl: string;
        reviewedBy: string | null;
        reviewedAt: Date | null;
        status: string;
        createdAt: Date;
        rejectionReason: $Enums.BrandDocRejectionReason;
    }, ExtArgs["result"]["brandDocument"]>;
    composites: {};
};
export type BrandDocumentGetPayload<S extends boolean | null | undefined | BrandDocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BrandDocumentPayload, S>;
export type BrandDocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BrandDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BrandDocumentCountAggregateInputType | true;
};
export interface BrandDocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BrandDocument'];
        meta: {
            name: 'BrandDocument';
        };
    };
    /**
     * Find zero or one BrandDocument that matches the filter.
     * @param {BrandDocumentFindUniqueArgs} args - Arguments to find a BrandDocument
     * @example
     * // Get one BrandDocument
     * const brandDocument = await prisma.brandDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandDocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, BrandDocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BrandDocumentClient<runtime.Types.Result.GetResult<Prisma.$BrandDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BrandDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandDocumentFindUniqueOrThrowArgs} args - Arguments to find a BrandDocument
     * @example
     * // Get one BrandDocument
     * const brandDocument = await prisma.brandDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandDocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BrandDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandDocumentClient<runtime.Types.Result.GetResult<Prisma.$BrandDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BrandDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandDocumentFindFirstArgs} args - Arguments to find a BrandDocument
     * @example
     * // Get one BrandDocument
     * const brandDocument = await prisma.brandDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandDocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, BrandDocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__BrandDocumentClient<runtime.Types.Result.GetResult<Prisma.$BrandDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BrandDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandDocumentFindFirstOrThrowArgs} args - Arguments to find a BrandDocument
     * @example
     * // Get one BrandDocument
     * const brandDocument = await prisma.brandDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandDocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BrandDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandDocumentClient<runtime.Types.Result.GetResult<Prisma.$BrandDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BrandDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrandDocuments
     * const brandDocuments = await prisma.brandDocument.findMany()
     *
     * // Get first 10 BrandDocuments
     * const brandDocuments = await prisma.brandDocument.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const brandDocumentWithIdOnly = await prisma.brandDocument.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BrandDocumentFindManyArgs>(args?: Prisma.SelectSubset<T, BrandDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BrandDocument.
     * @param {BrandDocumentCreateArgs} args - Arguments to create a BrandDocument.
     * @example
     * // Create one BrandDocument
     * const BrandDocument = await prisma.brandDocument.create({
     *   data: {
     *     // ... data to create a BrandDocument
     *   }
     * })
     *
     */
    create<T extends BrandDocumentCreateArgs>(args: Prisma.SelectSubset<T, BrandDocumentCreateArgs<ExtArgs>>): Prisma.Prisma__BrandDocumentClient<runtime.Types.Result.GetResult<Prisma.$BrandDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BrandDocuments.
     * @param {BrandDocumentCreateManyArgs} args - Arguments to create many BrandDocuments.
     * @example
     * // Create many BrandDocuments
     * const brandDocument = await prisma.brandDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BrandDocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, BrandDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BrandDocuments and returns the data saved in the database.
     * @param {BrandDocumentCreateManyAndReturnArgs} args - Arguments to create many BrandDocuments.
     * @example
     * // Create many BrandDocuments
     * const brandDocument = await prisma.brandDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BrandDocuments and only return the `id`
     * const brandDocumentWithIdOnly = await prisma.brandDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BrandDocumentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BrandDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BrandDocument.
     * @param {BrandDocumentDeleteArgs} args - Arguments to delete one BrandDocument.
     * @example
     * // Delete one BrandDocument
     * const BrandDocument = await prisma.brandDocument.delete({
     *   where: {
     *     // ... filter to delete one BrandDocument
     *   }
     * })
     *
     */
    delete<T extends BrandDocumentDeleteArgs>(args: Prisma.SelectSubset<T, BrandDocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__BrandDocumentClient<runtime.Types.Result.GetResult<Prisma.$BrandDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BrandDocument.
     * @param {BrandDocumentUpdateArgs} args - Arguments to update one BrandDocument.
     * @example
     * // Update one BrandDocument
     * const brandDocument = await prisma.brandDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BrandDocumentUpdateArgs>(args: Prisma.SelectSubset<T, BrandDocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__BrandDocumentClient<runtime.Types.Result.GetResult<Prisma.$BrandDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BrandDocuments.
     * @param {BrandDocumentDeleteManyArgs} args - Arguments to filter BrandDocuments to delete.
     * @example
     * // Delete a few BrandDocuments
     * const { count } = await prisma.brandDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BrandDocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, BrandDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BrandDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrandDocuments
     * const brandDocument = await prisma.brandDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BrandDocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, BrandDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BrandDocuments and returns the data updated in the database.
     * @param {BrandDocumentUpdateManyAndReturnArgs} args - Arguments to update many BrandDocuments.
     * @example
     * // Update many BrandDocuments
     * const brandDocument = await prisma.brandDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BrandDocuments and only return the `id`
     * const brandDocumentWithIdOnly = await prisma.brandDocument.updateManyAndReturn({
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
    updateManyAndReturn<T extends BrandDocumentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BrandDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BrandDocument.
     * @param {BrandDocumentUpsertArgs} args - Arguments to update or create a BrandDocument.
     * @example
     * // Update or create a BrandDocument
     * const brandDocument = await prisma.brandDocument.upsert({
     *   create: {
     *     // ... data to create a BrandDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrandDocument we want to update
     *   }
     * })
     */
    upsert<T extends BrandDocumentUpsertArgs>(args: Prisma.SelectSubset<T, BrandDocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__BrandDocumentClient<runtime.Types.Result.GetResult<Prisma.$BrandDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BrandDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandDocumentCountArgs} args - Arguments to filter BrandDocuments to count.
     * @example
     * // Count the number of BrandDocuments
     * const count = await prisma.brandDocument.count({
     *   where: {
     *     // ... the filter for the BrandDocuments we want to count
     *   }
     * })
    **/
    count<T extends BrandDocumentCountArgs>(args?: Prisma.Subset<T, BrandDocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BrandDocumentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BrandDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandDocumentAggregateArgs>(args: Prisma.Subset<T, BrandDocumentAggregateArgs>): Prisma.PrismaPromise<GetBrandDocumentAggregateType<T>>;
    /**
     * Group by BrandDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandDocumentGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BrandDocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BrandDocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: BrandDocumentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BrandDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BrandDocument model
     */
    readonly fields: BrandDocumentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BrandDocument.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BrandDocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    brand<T extends Prisma.BrandDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BrandDefaultArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reviewer<T extends Prisma.BrandDocument$reviewerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BrandDocument$reviewerArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the BrandDocument model
 */
export interface BrandDocumentFieldRefs {
    readonly id: Prisma.FieldRef<"BrandDocument", 'String'>;
    readonly brandId: Prisma.FieldRef<"BrandDocument", 'String'>;
    readonly docType: Prisma.FieldRef<"BrandDocument", 'String'>;
    readonly fileUrl: Prisma.FieldRef<"BrandDocument", 'String'>;
    readonly reviewedBy: Prisma.FieldRef<"BrandDocument", 'String'>;
    readonly reviewedAt: Prisma.FieldRef<"BrandDocument", 'DateTime'>;
    readonly status: Prisma.FieldRef<"BrandDocument", 'String'>;
    readonly createdAt: Prisma.FieldRef<"BrandDocument", 'DateTime'>;
    readonly rejectionReason: Prisma.FieldRef<"BrandDocument", 'BrandDocRejectionReason'>;
}
/**
 * BrandDocument findUnique
 */
export type BrandDocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BrandDocument to fetch.
     */
    where: Prisma.BrandDocumentWhereUniqueInput;
};
/**
 * BrandDocument findUniqueOrThrow
 */
export type BrandDocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BrandDocument to fetch.
     */
    where: Prisma.BrandDocumentWhereUniqueInput;
};
/**
 * BrandDocument findFirst
 */
export type BrandDocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BrandDocument to fetch.
     */
    where?: Prisma.BrandDocumentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BrandDocuments to fetch.
     */
    orderBy?: Prisma.BrandDocumentOrderByWithRelationInput | Prisma.BrandDocumentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BrandDocuments.
     */
    cursor?: Prisma.BrandDocumentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BrandDocuments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BrandDocuments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BrandDocuments.
     */
    distinct?: Prisma.BrandDocumentScalarFieldEnum | Prisma.BrandDocumentScalarFieldEnum[];
};
/**
 * BrandDocument findFirstOrThrow
 */
export type BrandDocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BrandDocument to fetch.
     */
    where?: Prisma.BrandDocumentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BrandDocuments to fetch.
     */
    orderBy?: Prisma.BrandDocumentOrderByWithRelationInput | Prisma.BrandDocumentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BrandDocuments.
     */
    cursor?: Prisma.BrandDocumentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BrandDocuments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BrandDocuments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BrandDocuments.
     */
    distinct?: Prisma.BrandDocumentScalarFieldEnum | Prisma.BrandDocumentScalarFieldEnum[];
};
/**
 * BrandDocument findMany
 */
export type BrandDocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BrandDocuments to fetch.
     */
    where?: Prisma.BrandDocumentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BrandDocuments to fetch.
     */
    orderBy?: Prisma.BrandDocumentOrderByWithRelationInput | Prisma.BrandDocumentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BrandDocuments.
     */
    cursor?: Prisma.BrandDocumentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BrandDocuments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BrandDocuments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BrandDocuments.
     */
    distinct?: Prisma.BrandDocumentScalarFieldEnum | Prisma.BrandDocumentScalarFieldEnum[];
};
/**
 * BrandDocument create
 */
export type BrandDocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a BrandDocument.
     */
    data: Prisma.XOR<Prisma.BrandDocumentCreateInput, Prisma.BrandDocumentUncheckedCreateInput>;
};
/**
 * BrandDocument createMany
 */
export type BrandDocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrandDocuments.
     */
    data: Prisma.BrandDocumentCreateManyInput | Prisma.BrandDocumentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BrandDocument createManyAndReturn
 */
export type BrandDocumentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandDocument
     */
    select?: Prisma.BrandDocumentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandDocument
     */
    omit?: Prisma.BrandDocumentOmit<ExtArgs> | null;
    /**
     * The data used to create many BrandDocuments.
     */
    data: Prisma.BrandDocumentCreateManyInput | Prisma.BrandDocumentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandDocumentIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BrandDocument update
 */
export type BrandDocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a BrandDocument.
     */
    data: Prisma.XOR<Prisma.BrandDocumentUpdateInput, Prisma.BrandDocumentUncheckedUpdateInput>;
    /**
     * Choose, which BrandDocument to update.
     */
    where: Prisma.BrandDocumentWhereUniqueInput;
};
/**
 * BrandDocument updateMany
 */
export type BrandDocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BrandDocuments.
     */
    data: Prisma.XOR<Prisma.BrandDocumentUpdateManyMutationInput, Prisma.BrandDocumentUncheckedUpdateManyInput>;
    /**
     * Filter which BrandDocuments to update
     */
    where?: Prisma.BrandDocumentWhereInput;
    /**
     * Limit how many BrandDocuments to update.
     */
    limit?: number;
};
/**
 * BrandDocument updateManyAndReturn
 */
export type BrandDocumentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandDocument
     */
    select?: Prisma.BrandDocumentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BrandDocument
     */
    omit?: Prisma.BrandDocumentOmit<ExtArgs> | null;
    /**
     * The data used to update BrandDocuments.
     */
    data: Prisma.XOR<Prisma.BrandDocumentUpdateManyMutationInput, Prisma.BrandDocumentUncheckedUpdateManyInput>;
    /**
     * Filter which BrandDocuments to update
     */
    where?: Prisma.BrandDocumentWhereInput;
    /**
     * Limit how many BrandDocuments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BrandDocumentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BrandDocument upsert
 */
export type BrandDocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the BrandDocument to update in case it exists.
     */
    where: Prisma.BrandDocumentWhereUniqueInput;
    /**
     * In case the BrandDocument found by the `where` argument doesn't exist, create a new BrandDocument with this data.
     */
    create: Prisma.XOR<Prisma.BrandDocumentCreateInput, Prisma.BrandDocumentUncheckedCreateInput>;
    /**
     * In case the BrandDocument was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BrandDocumentUpdateInput, Prisma.BrandDocumentUncheckedUpdateInput>;
};
/**
 * BrandDocument delete
 */
export type BrandDocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which BrandDocument to delete.
     */
    where: Prisma.BrandDocumentWhereUniqueInput;
};
/**
 * BrandDocument deleteMany
 */
export type BrandDocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BrandDocuments to delete
     */
    where?: Prisma.BrandDocumentWhereInput;
    /**
     * Limit how many BrandDocuments to delete.
     */
    limit?: number;
};
/**
 * BrandDocument.reviewer
 */
export type BrandDocument$reviewerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * BrandDocument without action
 */
export type BrandDocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=BrandDocument.d.ts.map