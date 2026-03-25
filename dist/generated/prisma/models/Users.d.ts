import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UsersModel = runtime.Types.Result.DefaultSelection<Prisma.$UsersPayload>;
export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type UsersMinAggregateOutputType = {
    userId: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    fk_orgId: string | null;
    role: string | null;
    CreatedAt: Date | null;
    UpdatedAt: Date | null;
};
export type UsersMaxAggregateOutputType = {
    userId: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    fk_orgId: string | null;
    role: string | null;
    CreatedAt: Date | null;
    UpdatedAt: Date | null;
};
export type UsersCountAggregateOutputType = {
    userId: number;
    name: number;
    email: number;
    password: number;
    fk_orgId: number;
    role: number;
    CreatedAt: number;
    UpdatedAt: number;
    _all: number;
};
export type UsersMinAggregateInputType = {
    userId?: true;
    name?: true;
    email?: true;
    password?: true;
    fk_orgId?: true;
    role?: true;
    CreatedAt?: true;
    UpdatedAt?: true;
};
export type UsersMaxAggregateInputType = {
    userId?: true;
    name?: true;
    email?: true;
    password?: true;
    fk_orgId?: true;
    role?: true;
    CreatedAt?: true;
    UpdatedAt?: true;
};
export type UsersCountAggregateInputType = {
    userId?: true;
    name?: true;
    email?: true;
    password?: true;
    fk_orgId?: true;
    role?: true;
    CreatedAt?: true;
    UpdatedAt?: true;
    _all?: true;
};
export type UsersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput | Prisma.UsersOrderByWithRelationInput[];
    cursor?: Prisma.UsersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsersCountAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsers[P]> : Prisma.GetScalarType<T[P], AggregateUsers[P]>;
};
export type UsersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithAggregationInput | Prisma.UsersOrderByWithAggregationInput[];
    by: Prisma.UsersScalarFieldEnum[] | Prisma.UsersScalarFieldEnum;
    having?: Prisma.UsersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type UsersGroupByOutputType = {
    userId: string;
    name: string;
    email: string;
    password: string;
    fk_orgId: string;
    role: string;
    CreatedAt: Date;
    UpdatedAt: Date;
    _count: UsersCountAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]>;
}>>;
export type UsersWhereInput = {
    AND?: Prisma.UsersWhereInput | Prisma.UsersWhereInput[];
    OR?: Prisma.UsersWhereInput[];
    NOT?: Prisma.UsersWhereInput | Prisma.UsersWhereInput[];
    userId?: Prisma.StringFilter<"Users"> | string;
    name?: Prisma.StringFilter<"Users"> | string;
    email?: Prisma.StringFilter<"Users"> | string;
    password?: Prisma.StringFilter<"Users"> | string;
    fk_orgId?: Prisma.StringFilter<"Users"> | string;
    role?: Prisma.StringFilter<"Users"> | string;
    CreatedAt?: Prisma.DateTimeFilter<"Users"> | Date | string;
    UpdatedAt?: Prisma.DateTimeFilter<"Users"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    user?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.UsersWhereInput> | null;
    userRole?: Prisma.UsersListRelationFilter;
};
export type UsersOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fk_orgId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    CreatedAt?: Prisma.SortOrder;
    UpdatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    user?: Prisma.UsersOrderByWithRelationInput;
    userRole?: Prisma.UsersOrderByRelationAggregateInput;
};
export type UsersWhereUniqueInput = Prisma.AtLeast<{
    userId?: string;
    email?: string;
    AND?: Prisma.UsersWhereInput | Prisma.UsersWhereInput[];
    OR?: Prisma.UsersWhereInput[];
    NOT?: Prisma.UsersWhereInput | Prisma.UsersWhereInput[];
    name?: Prisma.StringFilter<"Users"> | string;
    password?: Prisma.StringFilter<"Users"> | string;
    fk_orgId?: Prisma.StringFilter<"Users"> | string;
    role?: Prisma.StringFilter<"Users"> | string;
    CreatedAt?: Prisma.DateTimeFilter<"Users"> | Date | string;
    UpdatedAt?: Prisma.DateTimeFilter<"Users"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    user?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.UsersWhereInput> | null;
    userRole?: Prisma.UsersListRelationFilter;
}, "userId" | "email">;
export type UsersOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fk_orgId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    CreatedAt?: Prisma.SortOrder;
    UpdatedAt?: Prisma.SortOrder;
    _count?: Prisma.UsersCountOrderByAggregateInput;
    _max?: Prisma.UsersMaxOrderByAggregateInput;
    _min?: Prisma.UsersMinOrderByAggregateInput;
};
export type UsersScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsersScalarWhereWithAggregatesInput | Prisma.UsersScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsersScalarWhereWithAggregatesInput | Prisma.UsersScalarWhereWithAggregatesInput[];
    userId?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    password?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    fk_orgId?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    role?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    CreatedAt?: Prisma.DateTimeWithAggregatesFilter<"Users"> | Date | string;
    UpdatedAt?: Prisma.DateTimeWithAggregatesFilter<"Users"> | Date | string;
};
export type UsersCreateInput = {
    userId?: string;
    name: string;
    email: string;
    password: string;
    CreatedAt?: Date | string;
    UpdatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutUsersInput;
    user?: Prisma.UsersCreateNestedOneWithoutUserRoleInput;
    userRole?: Prisma.UsersCreateNestedManyWithoutUserInput;
};
export type UsersUncheckedCreateInput = {
    userId?: string;
    name: string;
    email: string;
    password: string;
    fk_orgId: string;
    role: string;
    CreatedAt?: Date | string;
    UpdatedAt?: Date | string;
    userRole?: Prisma.UsersUncheckedCreateNestedManyWithoutUserInput;
};
export type UsersUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    CreatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutUsersNestedInput;
    user?: Prisma.UsersUpdateOneWithoutUserRoleNestedInput;
    userRole?: Prisma.UsersUpdateManyWithoutUserNestedInput;
};
export type UsersUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fk_orgId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    CreatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userRole?: Prisma.UsersUncheckedUpdateManyWithoutUserNestedInput;
};
export type UsersCreateManyInput = {
    userId?: string;
    name: string;
    email: string;
    password: string;
    fk_orgId: string;
    role: string;
    CreatedAt?: Date | string;
    UpdatedAt?: Date | string;
};
export type UsersUpdateManyMutationInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    CreatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsersUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fk_orgId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    CreatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsersListRelationFilter = {
    every?: Prisma.UsersWhereInput;
    some?: Prisma.UsersWhereInput;
    none?: Prisma.UsersWhereInput;
};
export type UsersOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UsersNullableScalarRelationFilter = {
    is?: Prisma.UsersWhereInput | null;
    isNot?: Prisma.UsersWhereInput | null;
};
export type UsersCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fk_orgId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    CreatedAt?: Prisma.SortOrder;
    UpdatedAt?: Prisma.SortOrder;
};
export type UsersMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fk_orgId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    CreatedAt?: Prisma.SortOrder;
    UpdatedAt?: Prisma.SortOrder;
};
export type UsersMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fk_orgId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    CreatedAt?: Prisma.SortOrder;
    UpdatedAt?: Prisma.SortOrder;
};
export type UsersCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutOrganizationInput, Prisma.UsersUncheckedCreateWithoutOrganizationInput> | Prisma.UsersCreateWithoutOrganizationInput[] | Prisma.UsersUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutOrganizationInput | Prisma.UsersCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.UsersCreateManyOrganizationInputEnvelope;
    connect?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
};
export type UsersUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutOrganizationInput, Prisma.UsersUncheckedCreateWithoutOrganizationInput> | Prisma.UsersCreateWithoutOrganizationInput[] | Prisma.UsersUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutOrganizationInput | Prisma.UsersCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.UsersCreateManyOrganizationInputEnvelope;
    connect?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
};
export type UsersUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutOrganizationInput, Prisma.UsersUncheckedCreateWithoutOrganizationInput> | Prisma.UsersCreateWithoutOrganizationInput[] | Prisma.UsersUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutOrganizationInput | Prisma.UsersCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.UsersUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.UsersUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.UsersCreateManyOrganizationInputEnvelope;
    set?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
    disconnect?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
    delete?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
    connect?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
    update?: Prisma.UsersUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.UsersUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.UsersUpdateManyWithWhereWithoutOrganizationInput | Prisma.UsersUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.UsersScalarWhereInput | Prisma.UsersScalarWhereInput[];
};
export type UsersUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutOrganizationInput, Prisma.UsersUncheckedCreateWithoutOrganizationInput> | Prisma.UsersCreateWithoutOrganizationInput[] | Prisma.UsersUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutOrganizationInput | Prisma.UsersCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.UsersUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.UsersUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.UsersCreateManyOrganizationInputEnvelope;
    set?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
    disconnect?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
    delete?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
    connect?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
    update?: Prisma.UsersUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.UsersUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.UsersUpdateManyWithWhereWithoutOrganizationInput | Prisma.UsersUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.UsersScalarWhereInput | Prisma.UsersScalarWhereInput[];
};
export type UsersCreateNestedOneWithoutUserRoleInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutUserRoleInput, Prisma.UsersUncheckedCreateWithoutUserRoleInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutUserRoleInput;
    connect?: Prisma.UsersWhereUniqueInput;
};
export type UsersCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutUserInput, Prisma.UsersUncheckedCreateWithoutUserInput> | Prisma.UsersCreateWithoutUserInput[] | Prisma.UsersUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutUserInput | Prisma.UsersCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UsersCreateManyUserInputEnvelope;
    connect?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
};
export type UsersUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutUserInput, Prisma.UsersUncheckedCreateWithoutUserInput> | Prisma.UsersCreateWithoutUserInput[] | Prisma.UsersUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutUserInput | Prisma.UsersCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UsersCreateManyUserInputEnvelope;
    connect?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
};
export type UsersUpdateOneWithoutUserRoleNestedInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutUserRoleInput, Prisma.UsersUncheckedCreateWithoutUserRoleInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutUserRoleInput;
    upsert?: Prisma.UsersUpsertWithoutUserRoleInput;
    disconnect?: Prisma.UsersWhereInput | boolean;
    delete?: Prisma.UsersWhereInput | boolean;
    connect?: Prisma.UsersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsersUpdateToOneWithWhereWithoutUserRoleInput, Prisma.UsersUpdateWithoutUserRoleInput>, Prisma.UsersUncheckedUpdateWithoutUserRoleInput>;
};
export type UsersUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutUserInput, Prisma.UsersUncheckedCreateWithoutUserInput> | Prisma.UsersCreateWithoutUserInput[] | Prisma.UsersUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutUserInput | Prisma.UsersCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UsersUpsertWithWhereUniqueWithoutUserInput | Prisma.UsersUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UsersCreateManyUserInputEnvelope;
    set?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
    disconnect?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
    delete?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
    connect?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
    update?: Prisma.UsersUpdateWithWhereUniqueWithoutUserInput | Prisma.UsersUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UsersUpdateManyWithWhereWithoutUserInput | Prisma.UsersUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UsersScalarWhereInput | Prisma.UsersScalarWhereInput[];
};
export type UsersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutUserInput, Prisma.UsersUncheckedCreateWithoutUserInput> | Prisma.UsersCreateWithoutUserInput[] | Prisma.UsersUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutUserInput | Prisma.UsersCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UsersUpsertWithWhereUniqueWithoutUserInput | Prisma.UsersUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UsersCreateManyUserInputEnvelope;
    set?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
    disconnect?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
    delete?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
    connect?: Prisma.UsersWhereUniqueInput | Prisma.UsersWhereUniqueInput[];
    update?: Prisma.UsersUpdateWithWhereUniqueWithoutUserInput | Prisma.UsersUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UsersUpdateManyWithWhereWithoutUserInput | Prisma.UsersUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UsersScalarWhereInput | Prisma.UsersScalarWhereInput[];
};
export type UsersCreateWithoutOrganizationInput = {
    userId?: string;
    name: string;
    email: string;
    password: string;
    CreatedAt?: Date | string;
    UpdatedAt?: Date | string;
    user?: Prisma.UsersCreateNestedOneWithoutUserRoleInput;
    userRole?: Prisma.UsersCreateNestedManyWithoutUserInput;
};
export type UsersUncheckedCreateWithoutOrganizationInput = {
    userId?: string;
    name: string;
    email: string;
    password: string;
    role: string;
    CreatedAt?: Date | string;
    UpdatedAt?: Date | string;
    userRole?: Prisma.UsersUncheckedCreateNestedManyWithoutUserInput;
};
export type UsersCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.UsersWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsersCreateWithoutOrganizationInput, Prisma.UsersUncheckedCreateWithoutOrganizationInput>;
};
export type UsersCreateManyOrganizationInputEnvelope = {
    data: Prisma.UsersCreateManyOrganizationInput | Prisma.UsersCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type UsersUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.UsersWhereUniqueInput;
    update: Prisma.XOR<Prisma.UsersUpdateWithoutOrganizationInput, Prisma.UsersUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.UsersCreateWithoutOrganizationInput, Prisma.UsersUncheckedCreateWithoutOrganizationInput>;
};
export type UsersUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.UsersWhereUniqueInput;
    data: Prisma.XOR<Prisma.UsersUpdateWithoutOrganizationInput, Prisma.UsersUncheckedUpdateWithoutOrganizationInput>;
};
export type UsersUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.UsersScalarWhereInput;
    data: Prisma.XOR<Prisma.UsersUpdateManyMutationInput, Prisma.UsersUncheckedUpdateManyWithoutOrganizationInput>;
};
export type UsersScalarWhereInput = {
    AND?: Prisma.UsersScalarWhereInput | Prisma.UsersScalarWhereInput[];
    OR?: Prisma.UsersScalarWhereInput[];
    NOT?: Prisma.UsersScalarWhereInput | Prisma.UsersScalarWhereInput[];
    userId?: Prisma.StringFilter<"Users"> | string;
    name?: Prisma.StringFilter<"Users"> | string;
    email?: Prisma.StringFilter<"Users"> | string;
    password?: Prisma.StringFilter<"Users"> | string;
    fk_orgId?: Prisma.StringFilter<"Users"> | string;
    role?: Prisma.StringFilter<"Users"> | string;
    CreatedAt?: Prisma.DateTimeFilter<"Users"> | Date | string;
    UpdatedAt?: Prisma.DateTimeFilter<"Users"> | Date | string;
};
export type UsersCreateWithoutUserRoleInput = {
    userId?: string;
    name: string;
    email: string;
    password: string;
    CreatedAt?: Date | string;
    UpdatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutUsersInput;
    user?: Prisma.UsersCreateNestedOneWithoutUserRoleInput;
};
export type UsersUncheckedCreateWithoutUserRoleInput = {
    userId?: string;
    name: string;
    email: string;
    password: string;
    fk_orgId: string;
    role: string;
    CreatedAt?: Date | string;
    UpdatedAt?: Date | string;
};
export type UsersCreateOrConnectWithoutUserRoleInput = {
    where: Prisma.UsersWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsersCreateWithoutUserRoleInput, Prisma.UsersUncheckedCreateWithoutUserRoleInput>;
};
export type UsersCreateWithoutUserInput = {
    userId?: string;
    name: string;
    email: string;
    password: string;
    CreatedAt?: Date | string;
    UpdatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutUsersInput;
    userRole?: Prisma.UsersCreateNestedManyWithoutUserInput;
};
export type UsersUncheckedCreateWithoutUserInput = {
    userId?: string;
    name: string;
    email: string;
    password: string;
    fk_orgId: string;
    CreatedAt?: Date | string;
    UpdatedAt?: Date | string;
    userRole?: Prisma.UsersUncheckedCreateNestedManyWithoutUserInput;
};
export type UsersCreateOrConnectWithoutUserInput = {
    where: Prisma.UsersWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsersCreateWithoutUserInput, Prisma.UsersUncheckedCreateWithoutUserInput>;
};
export type UsersCreateManyUserInputEnvelope = {
    data: Prisma.UsersCreateManyUserInput | Prisma.UsersCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UsersUpsertWithoutUserRoleInput = {
    update: Prisma.XOR<Prisma.UsersUpdateWithoutUserRoleInput, Prisma.UsersUncheckedUpdateWithoutUserRoleInput>;
    create: Prisma.XOR<Prisma.UsersCreateWithoutUserRoleInput, Prisma.UsersUncheckedCreateWithoutUserRoleInput>;
    where?: Prisma.UsersWhereInput;
};
export type UsersUpdateToOneWithWhereWithoutUserRoleInput = {
    where?: Prisma.UsersWhereInput;
    data: Prisma.XOR<Prisma.UsersUpdateWithoutUserRoleInput, Prisma.UsersUncheckedUpdateWithoutUserRoleInput>;
};
export type UsersUpdateWithoutUserRoleInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    CreatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutUsersNestedInput;
    user?: Prisma.UsersUpdateOneWithoutUserRoleNestedInput;
};
export type UsersUncheckedUpdateWithoutUserRoleInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fk_orgId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    CreatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsersUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UsersWhereUniqueInput;
    update: Prisma.XOR<Prisma.UsersUpdateWithoutUserInput, Prisma.UsersUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UsersCreateWithoutUserInput, Prisma.UsersUncheckedCreateWithoutUserInput>;
};
export type UsersUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UsersWhereUniqueInput;
    data: Prisma.XOR<Prisma.UsersUpdateWithoutUserInput, Prisma.UsersUncheckedUpdateWithoutUserInput>;
};
export type UsersUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UsersScalarWhereInput;
    data: Prisma.XOR<Prisma.UsersUpdateManyMutationInput, Prisma.UsersUncheckedUpdateManyWithoutUserInput>;
};
export type UsersCreateManyOrganizationInput = {
    userId?: string;
    name: string;
    email: string;
    password: string;
    role: string;
    CreatedAt?: Date | string;
    UpdatedAt?: Date | string;
};
export type UsersUpdateWithoutOrganizationInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    CreatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UsersUpdateOneWithoutUserRoleNestedInput;
    userRole?: Prisma.UsersUpdateManyWithoutUserNestedInput;
};
export type UsersUncheckedUpdateWithoutOrganizationInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    CreatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userRole?: Prisma.UsersUncheckedUpdateManyWithoutUserNestedInput;
};
export type UsersUncheckedUpdateManyWithoutOrganizationInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    CreatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsersCreateManyUserInput = {
    userId?: string;
    name: string;
    email: string;
    password: string;
    fk_orgId: string;
    CreatedAt?: Date | string;
    UpdatedAt?: Date | string;
};
export type UsersUpdateWithoutUserInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    CreatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutUsersNestedInput;
    userRole?: Prisma.UsersUpdateManyWithoutUserNestedInput;
};
export type UsersUncheckedUpdateWithoutUserInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fk_orgId?: Prisma.StringFieldUpdateOperationsInput | string;
    CreatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userRole?: Prisma.UsersUncheckedUpdateManyWithoutUserNestedInput;
};
export type UsersUncheckedUpdateManyWithoutUserInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fk_orgId?: Prisma.StringFieldUpdateOperationsInput | string;
    CreatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsersCountOutputType = {
    userRole: number;
};
export type UsersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userRole?: boolean | UsersCountOutputTypeCountUserRoleArgs;
};
export type UsersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersCountOutputTypeSelect<ExtArgs> | null;
};
export type UsersCountOutputTypeCountUserRoleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsersWhereInput;
};
export type UsersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    fk_orgId?: boolean;
    role?: boolean;
    CreatedAt?: boolean;
    UpdatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Users$userArgs<ExtArgs>;
    userRole?: boolean | Prisma.Users$userRoleArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type UsersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    fk_orgId?: boolean;
    role?: boolean;
    CreatedAt?: boolean;
    UpdatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Users$userArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type UsersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    fk_orgId?: boolean;
    role?: boolean;
    CreatedAt?: boolean;
    UpdatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Users$userArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type UsersSelectScalar = {
    userId?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    fk_orgId?: boolean;
    role?: boolean;
    CreatedAt?: boolean;
    UpdatedAt?: boolean;
};
export type UsersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "name" | "email" | "password" | "fk_orgId" | "role" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["users"]>;
export type UsersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Users$userArgs<ExtArgs>;
    userRole?: boolean | Prisma.Users$userRoleArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UsersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Users$userArgs<ExtArgs>;
};
export type UsersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Users$userArgs<ExtArgs>;
};
export type $UsersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Users";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        user: Prisma.$UsersPayload<ExtArgs> | null;
        userRole: Prisma.$UsersPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
        name: string;
        email: string;
        password: string;
        fk_orgId: string;
        role: string;
        CreatedAt: Date;
        UpdatedAt: Date;
    }, ExtArgs["result"]["users"]>;
    composites: {};
};
export type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsersPayload, S>;
export type UsersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsersCountAggregateInputType | true;
};
export interface UsersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Users'];
        meta: {
            name: 'Users';
        };
    };
    findUnique<T extends UsersFindUniqueArgs>(args: Prisma.SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UsersFindFirstArgs>(args?: Prisma.SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UsersFindManyArgs>(args?: Prisma.SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UsersCreateArgs>(args: Prisma.SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UsersCreateManyArgs>(args?: Prisma.SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UsersDeleteArgs>(args: Prisma.SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UsersUpdateArgs>(args: Prisma.SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UsersDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UsersUpdateManyArgs>(args: Prisma.SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UsersUpsertArgs>(args: Prisma.SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UsersCountArgs>(args?: Prisma.Subset<T, UsersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsersCountAggregateOutputType> : number>;
    aggregate<T extends UsersAggregateArgs>(args: Prisma.Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>;
    groupBy<T extends UsersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsersGroupByArgs['orderBy'];
    } : {
        orderBy?: UsersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UsersFieldRefs;
}
export interface Prisma__UsersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.Users$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Users$userArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    userRole<T extends Prisma.Users$userRoleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Users$userRoleArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UsersFieldRefs {
    readonly userId: Prisma.FieldRef<"Users", 'String'>;
    readonly name: Prisma.FieldRef<"Users", 'String'>;
    readonly email: Prisma.FieldRef<"Users", 'String'>;
    readonly password: Prisma.FieldRef<"Users", 'String'>;
    readonly fk_orgId: Prisma.FieldRef<"Users", 'String'>;
    readonly role: Prisma.FieldRef<"Users", 'String'>;
    readonly CreatedAt: Prisma.FieldRef<"Users", 'DateTime'>;
    readonly UpdatedAt: Prisma.FieldRef<"Users", 'DateTime'>;
}
export type UsersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where: Prisma.UsersWhereUniqueInput;
};
export type UsersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where: Prisma.UsersWhereUniqueInput;
};
export type UsersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput | Prisma.UsersOrderByWithRelationInput[];
    cursor?: Prisma.UsersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type UsersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput | Prisma.UsersOrderByWithRelationInput[];
    cursor?: Prisma.UsersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type UsersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput | Prisma.UsersOrderByWithRelationInput[];
    cursor?: Prisma.UsersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type UsersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsersCreateInput, Prisma.UsersUncheckedCreateInput>;
};
export type UsersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UsersCreateManyInput | Prisma.UsersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    data: Prisma.UsersCreateManyInput | Prisma.UsersCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UsersIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UsersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsersUpdateInput, Prisma.UsersUncheckedUpdateInput>;
    where: Prisma.UsersWhereUniqueInput;
};
export type UsersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UsersUpdateManyMutationInput, Prisma.UsersUncheckedUpdateManyInput>;
    where?: Prisma.UsersWhereInput;
    limit?: number;
};
export type UsersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsersUpdateManyMutationInput, Prisma.UsersUncheckedUpdateManyInput>;
    where?: Prisma.UsersWhereInput;
    limit?: number;
    include?: Prisma.UsersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UsersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where: Prisma.UsersWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsersCreateInput, Prisma.UsersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UsersUpdateInput, Prisma.UsersUncheckedUpdateInput>;
};
export type UsersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where: Prisma.UsersWhereUniqueInput;
};
export type UsersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsersWhereInput;
    limit?: number;
};
export type Users$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where?: Prisma.UsersWhereInput;
};
export type Users$userRoleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput | Prisma.UsersOrderByWithRelationInput[];
    cursor?: Prisma.UsersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type UsersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
};
export {};
