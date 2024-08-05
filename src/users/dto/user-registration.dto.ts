import { ApiProperty } from '@nestjs/swagger';

export class UserRegistrationDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
