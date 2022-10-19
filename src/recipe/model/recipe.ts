import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Ingredient } from './ingredient';

@ObjectType()
export class Recipe {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  preparation?: string;

  @Field(() => [Ingredient])
  ingredients: Ingredient[];
}
