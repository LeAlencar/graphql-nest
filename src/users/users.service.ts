import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserInput: CreateUserInput) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        email: createUserInput.email,
      },
    });

    if (userExists) {
      return {
        user: userExists,
        success: null,
        error: 'User already exists',
      };
    }
    const user = await this.prisma.user.create({
      data: createUserInput,
    });

    return {
      user,
      success: 'User created with success',
      error: null,
    };
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      return {
        success: null,
        error: 'User not found',
      };
    }

    return {
      user,
      success: 'User found',
      error: null,
    };
  }

  async update(updateUserInput: UpdateUserInput) {
    const user = await this.prisma.user.findFirst({
      where: {
        id: updateUserInput.id,
      },
    });

    if (!user) {
      return {
        success: null,
        error: 'User not found',
      };
    }

    const updatedUser = await this.prisma.user.update({
      data: updateUserInput,
      where: {
        id: updateUserInput.id,
      },
    });

    return {
      user: updatedUser,
      success: 'User updated',
      error: null,
    };
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
