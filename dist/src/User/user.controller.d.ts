import { UserService } from './user.service';
import type { Request } from 'express';
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    createUser(req: Request): Promise<import("./user.interface").User>;
    login(req: Request): Promise<import("./user.interface").User | null>;
    getFreinds(req: Request): Promise<import("./user.interface").User[] | null>;
}
