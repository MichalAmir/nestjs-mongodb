import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User} from './user.entity'; 

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async getUser(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async updateUser(id: string, user: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async deleteUser(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
}