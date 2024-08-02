import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {
  @ApiProperty()
  content: string;

  @ApiProperty({
    default: false,
  })
  status?: boolean = false;
}
