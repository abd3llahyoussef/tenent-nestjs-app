import { PrismaService } from '../prisma.servise';
import { Organization } from './organization.interface';
import { Request } from 'express';
export declare class OrganizationService {
    private prisma;
    constructor(prisma: PrismaService);
    getOrganization(): Promise<Organization[]>;
    createOrganization(req: Request): Promise<Organization>;
}
