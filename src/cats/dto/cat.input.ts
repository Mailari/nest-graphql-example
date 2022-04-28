import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CatInput {
  @Field(() => String)
  readonly name: string;

  @Field(() => Int)
  readonly age: number;

  @Field(() => String)
  readonly breed: string;
}
