import { PrismaService } from '../prisma.servise';
import { Request } from 'express';
import { User } from './user.interface';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private prisma;
    private JwtService;
    constructor(prisma: PrismaService, JwtService: JwtService);
    createUser(req: Request): Promise<User>;
    getUserByEmail(email: string, password: string): Promise<User | null>;
    getFreinds(req: Request): Promise<User[] | null>;
}
