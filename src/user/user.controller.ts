import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  Signup(): string {
    return this.userService.Signup();
  }

  @Post()
  Login() {}
}
