import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.servise';
import { Organization } from './organization.interface';
import { Request, Response } from 'express';
@Injectable()
export class OrganizationService {
  constructor(private prisma: PrismaService) {}

  //get all organizations
  async getOrganization(): Promise<Organization[]> {
    return await this.prisma.organization.findMany({});
  }

  //create organization
  async createOrganization(req: Request): Promise<Organization> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const orgName = req.body.orgName as string;
    return await this.prisma.organization.create({
      data: {
        orgName,
      },
    });
  }
}
