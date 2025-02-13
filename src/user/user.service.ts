import { Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

constructor(@InjectModel(User.name) private userModel: Model<User>) {}

async Signup() {
    return 'Hello World!';
  }

  
  async Login(@Param()) {

  }
}