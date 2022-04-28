import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateCatDto {
  @Field(() => String)
  readonly name: string;

  @Field(() => Int)
  readonly age: number;

  @Field(() => String)
  readonly breed: string;
}
