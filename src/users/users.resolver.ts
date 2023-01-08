import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUser')
  async createUser(@Args('input') createUserInput: CreateUserInput) {
    return await this.usersService.create(createUserInput);
  }

  @Query('users')
  findAll() {
    return this.usersService.findAll();
  }

  @Query('user')
  async findOne(@Args('id', { type: () => Int }) id: number) {
    const response = await this.usersService.findOne(id);
    console.log(response);
    return response;
  }

  @Mutation('updateUser')
  updateUser(@Args('input') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput);
  }

  @Mutation('deleteUser')
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
