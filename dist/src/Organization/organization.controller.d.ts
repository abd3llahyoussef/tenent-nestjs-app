import { OrganizationService } from './organization.service';
import type { Request } from 'express';
export declare class OrganizationController {
    private readonly organizationService;
    constructor(organizationService: OrganizationService);
    getOrganization(): Promise<import("./organization.interface").Organization[]>;
    createOrganization(req: Request): Promise<import("./organization.interface").Organization>;
}
