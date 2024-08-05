import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserRegistrationDto } from './dto/user-registration.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: UserRegistrationDto) {
    try {
      const saltOrRounds = 10;
      data.password = await bcrypt.hash(data.password, saltOrRounds);

      return await this.prisma.user.create({
        data: data,
      });
    } catch (e) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2002') {
        console.log(
          'There is a unique constraint violation, a new user cannot be created with this email',
        );
      }

      throw e;
    }
  }

  async findOne(id?: number, email?: string, sso_github_id?: number) {
    if (
      id !== undefined &&
      email !== undefined &&
      sso_github_id !== undefined
    ) {
      throw new NotFoundException(
        'Unable to found record without one of the field',
      ); // @todo: create and raise proper exception
    }

    return this.prisma.user.findFirstOrThrow({
      where: {
        OR: [{ id: id }, { email: email }, { sso_github_id: sso_github_id }],
        NOT: [{ sso_github_id: null }], // @todo: is it the correct way to filter null sso_github_id
      },
    });
  }
}
