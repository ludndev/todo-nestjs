import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {
  @ApiProperty()
  content: string;

  @ApiProperty({
    default: false,
  }) // @todo: can this cause issues if status was true ?
  status?: boolean = false;
}
