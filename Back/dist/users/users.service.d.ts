import { Users } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: typeof Users);
    findAll(): Promise<Users[]>;
    findOne(Id: number): Promise<Users>;
    postUser(createUserDto: any): Promise<Users>;
    updateUser(Id: any, body: CreateUserDto): Promise<Users>;
    deleteUser(Id: any): Promise<number>;
}
