import { Users } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: typeof Users);
    findAll(): Promise<Users[]>;
    findOne(id: number): Promise<Users>;
    postUser(createUserDto: any): Promise<Users>;
    updateUser(id: any, body: any): Promise<void>;
    deleteUser(id: any): Promise<number>;
}
