import { Controller, Get, Post, Req } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import type { Request, Response } from 'express';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Get()
  async getOrganization() {
    return await this.organizationService.getOrganization();
  }

  @Post('create')
  async createOrganization(@Req() req: Request) {
    return await this.organizationService.createOrganization(req);
  }
}
