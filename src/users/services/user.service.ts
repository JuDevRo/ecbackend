import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Db } from 'mongodb';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt'

import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @Inject('MONGO') private database: Db
    ) {}

    findAll() {
        return this.userModel.find().exec()
    }

    async findOne(id: string) {
        const user = await this.userModel.findById(id).exec()
        if(!user) {
            throw new NotFoundException(`Product # ${id} not found`)
        }
        return user
    }

    async create(data: CreateUserDto) {
        
        const newModel = new this.userModel(data);
        const hashPassword = await bcrypt.hash(newModel.password, 10)
        newModel.password = hashPassword
        const model = await newModel.save();
        const {password, ...rta} = model.toJSON()
        return rta
    }
}
