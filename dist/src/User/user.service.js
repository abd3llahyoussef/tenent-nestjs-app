"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_servise_1 = require("../prisma.servise");
const bcrypt = __importStar(require("bcrypt"));
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    prisma;
    JwtService;
    constructor(prisma, JwtService) {
        this.prisma = prisma;
        this.JwtService = JwtService;
    }
    async createUser(req) {
        const { name, email, password, fk_orgId, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        return await this.prisma.users.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
                fk_orgId: fk_orgId,
                role: role || 'USER',
            },
        });
    }
    async getUserByEmail(email, password) {
        const user = await this.prisma.users.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            return null;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.BadRequestException('Invalid password');
        }
        const payload = {
            userId: user.userId,
            fk_orgId: user.fk_orgId,
            role: user.role,
        };
        const token = this.JwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '1h',
        });
        user.token = token;
        return user;
    }
    async getFreinds(req) {
        const user = await this.prisma.users.findUnique({
            where: {
                email: req.body.email,
            },
        });
        if (!user) {
            return null;
        }
        const friends = await this.prisma.users.findMany({
            where: {
                fk_orgId: user.fk_orgId,
            },
        });
        if (!friends) {
            return null;
        }
        return friends;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_servise_1.PrismaService,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map