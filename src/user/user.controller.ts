import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignupDto } from './dtos/signup.dto';
import { LoginDto } from './dtos/login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signup(@Body() signupData: SignupDto) {
    return this.userService.Signup(signupData);
  }

  @Post('login')
  async login(@Body() credentials: LoginDto) {
    return this.userService.login(credentials);
  }
}
