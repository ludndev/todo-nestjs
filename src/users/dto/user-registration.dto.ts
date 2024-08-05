import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class UserRegistrationDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  // // regex for password to contain at least one uppercase, lowercase, number and special character
  // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //   message:
  //     'password must contain uppercase, lowercase, number and special character',
  // })
  password: string;

  @ApiProperty()
  @IsEmail()
  email: string;
}
