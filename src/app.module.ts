import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationController } from './Organization/organization.controller';
import { OrganizationService } from './Organization/organization.service';
import { PrismaService } from './prisma.servise';
import { UserController } from './User/user.controller';
import { UserService } from './User/user.service';
import { JwtService } from '@nestjs/jwt';
@Module({
  imports: [],
  controllers: [AppController, OrganizationController, UserController],
  providers: [
    AppService,
    OrganizationService,
    PrismaService,
    UserService,
    JwtService,
  ],
})
export class AppModule {}
