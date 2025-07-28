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
  ) {}

async findAll(): Promise<Users[]> {
    return await this.usersRepository.findAll();
  }

async findOne(id: number) {
  const user = await this.usersRepository.findOne({ where: { id } });
  if (!user) {
    throw new NotFoundException(`User with ID ${id} not found`);
  }
  return user;
}

async postUser(createUserDto){
const user = await this.usersRepository.create(createUserDto); 
return user;
}


async updateUser(id, body) {
const user = await this.usersRepository.findOne({ where: { id } });
  if (!user) {
    throw new NotFoundException(`User with ID ${id} not found`);
  }   
return this.usersRepository.afterSave({...id,...body})
}


async deleteUser(id) {
const user = await this.usersRepository.findOne({ where: { id } });
  if (!user) {
    throw new NotFoundException(`User with ID ${id} not found`);
  }  
  return this.usersRepository.destroy(id); ;
} 

};
