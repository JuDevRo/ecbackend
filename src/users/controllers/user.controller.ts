import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { CreateUserDto } from '../dtos/user.dto';
import { UserService } from '../services/user.service';

@Controller('users') // De aquí cambio el nombre de la ruta
export class UserController {
    constructor(private usersService: UserService) {}

    @Get()
    getAll() {
        return this.usersService.findAll();
  }

    @Get(':userId')
    getOne(@Param('userId') userId: string) {
        return this.usersService.findOne(userId);
  }

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }
}
