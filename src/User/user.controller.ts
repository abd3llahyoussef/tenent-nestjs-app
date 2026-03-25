import { Controller, Post, Req, UseGuards, Get } from '@nestjs/common';
import { UserService } from './user.service';
import type { Request } from 'express';
import { AuthGuard } from 'Guards/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post('create')
  async createUser(@Req() req: Request) {
    return await this.UserService.createUser(req);
  }

  @Post('login')
  async login(@Req() req: Request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { email, password }: { email: string; password: string } = req.body;
    return await this.UserService.getUserByEmail(email, password);
  }

  @Get('friend')
  @UseGuards(AuthGuard)
  async getFreinds(@Req() req: Request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return await this.UserService.getFreinds(req);
  }
}
