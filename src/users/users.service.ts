import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserInput: CreateUserInput) {
    const user = await this.prisma.user.create({
      data: createUserInput,
    });

    return user;
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const user = this.prisma.user.update({
      data: updateUserInput,
      where: {
        id,
      },
    });

    return {
      user,
      message: 'user created',
    };
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
