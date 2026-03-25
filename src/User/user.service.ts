import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.servise';
import { Request } from 'express';
import { User } from './user.interface';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private JwtService: JwtService,
  ) {}

  //create user
  async createUser(req: Request): Promise<User> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { name, email, password, fk_orgId, role } = req.body;

    const hashedPassword: string = await bcrypt.hash(password as string, 10);
    return await this.prisma.users.create({
      data: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        name: name,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        email: email,
        password: hashedPassword,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        fk_orgId: fk_orgId,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        role: role || 'USER',
      },
    });
  }

  //get user by email
  async getUserByEmail(email: string, password: string): Promise<User | null> {
    const user: User | null = await this.prisma.users.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return null;
    }

    const isPasswordValid: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new BadRequestException('Invalid password');
    }
    const payload = {
      userId: user.userId,
      fk_orgId: user.fk_orgId,
      role: user.role,
    };
    const token = this.JwtService.sign(payload, {
      secret: process.env.JWT_SECRET as string,
      expiresIn: '1h',
    });
    user.token = token;
    return user;
  }

  //get who with me in the same company
  async getFreinds(req: Request): Promise<User[] | null> {
    const user: User | null = await this.prisma.users.findUnique({
      where: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        email: req.body.email,
      },
    });
    if (!user) {
      return null;
    }
    const friends: User[] | null = await this.prisma.users.findMany({
      where: {
        fk_orgId: user.fk_orgId,
      },
    });
    if (!friends) {
      return null;
    }
    return friends;
  }
}
