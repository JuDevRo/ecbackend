import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import {User} from '../../users/entities/user.entity'

@Schema()
export class Lobby extends Document {

  @Prop({ required: true })
  number: number;

  @Prop({ required: true, unique: true })
  user: string;

  @Prop({ required: false, unique: true })
  user: string;

  @Prop({ required: false, unique: true })
  user: string;

  @Prop({ required: false, unique: true })
  user: string;

  @Prop({ required: false, unique: true })
  user: string;

  @Prop({ required: true })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(Lobby);