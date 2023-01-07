import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'user ID' })
  id: number;

  @Field()
  email: string;

  @Field()
  name: string;
}
