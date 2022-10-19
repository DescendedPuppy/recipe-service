import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql/dist/scalars';
import { IngredientUnit } from './ingredient-unit';

@ObjectType()
export class Ingredient {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  unitsNeeded: number;

  @Field(() => Float)
  pricePerUnit: number;

  @Field(() => IngredientUnit)
  unit: IngredientUnit;
}
