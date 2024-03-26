import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import {UserSchema} from './users/user.entity'
 @Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nestjs'),
  MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
 
