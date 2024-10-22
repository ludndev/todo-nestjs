import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRegistrationDto } from './dto/user-registration.dto';
import { UserInterface } from './interfaces/user.interface';
import { UserLoginDto } from './dto/user-login.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() userRegistrationDto: UserRegistrationDto) {
    // @todo: password security check only in production/staging (allow unsafe for dev)

    const user: UserInterface = await this.usersService.create(userRegistrationDto);

    return {
      email: user.email,
      password: user.password,
    };
  }

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() userLoginDto: UserLoginDto) {
    return await this.usersService.loginUser(userLoginDto);
  }
}
