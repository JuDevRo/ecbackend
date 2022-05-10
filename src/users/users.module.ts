import { MongooseModule } from '@nestjs/mongoose';

import { Module } from '@nestjs/common';
import {UserController} from '../users/controllers/user.controller'
import { UserService } from './services/user.service';
import {User, UserSchema} from './entities/user.entity'

@Module({
    imports: [
        MongooseModule.forFeature([
          {
            name: User.name,
            schema: UserSchema,
          },
        ]),
      ],
      controllers: [UserController],
      providers: [UserService],
      exports: [UserService],
})
export class UsersModule {}
