import { Controller, Get, Post, Body, Patch, Param, Delete,ValidationPipe, Query, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

@Get()
async findAll() {
    return await this.usersService.findAll();
  }

@Get(':Id')
async findOne(@Param('Id')Id : number) {
    return await this.usersService.findOne(Id); 
  }


@Post()
async postUser(@Body(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true})) CreateUserDto: CreateUserDto) {
    return await this.usersService.postUser(CreateUserDto);
}


@Patch(':id')
async updateUser(@Param('id') id:number,@Body(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true})) body: CreateUserDto) {
    return await this.usersService.updateUser(id, body);
}

@Delete(':id')
async deleteUser(@Param('id') id:number) {
    return await this.usersService.deleteUser(id);
}
}

