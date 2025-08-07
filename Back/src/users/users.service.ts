import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { promises } from 'dns';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users)
    private usersRepository: typeof Users,
  ) { }

  async findAll(): Promise<Users[]> {
    return await this.usersRepository.findAll();
  }

  async findOne(Id: number) {
    const user = await this.usersRepository.findOne({ where: { Id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${Id} not found`);
    }
    return user;
  }

  async postUser(createUserDto) {
    const user = await this.usersRepository.create(createUserDto);
    return user;
  }


  async updateUser(Id, body: CreateUserDto) {
    const user = await this.usersRepository.findOne({ where: { Id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${Id} not found`);
    }
    await user.update({
      ...body
    });
    return user
  }


  async deleteUser(Id) {
    const user = await this.usersRepository.destroy({
      where: {
        Id
      }
    });
    return user;
  }

}
