import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("./entities/user.entity").Users[]>;
    findOne(Id: number): Promise<import("./entities/user.entity").Users>;
    postUser(CreateUserDto: CreateUserDto): Promise<import("./entities/user.entity").Users>;
    updateUser(id: number, body: CreateUserDto): Promise<import("./entities/user.entity").Users>;
    deleteUser(id: number): Promise<number>;
}
