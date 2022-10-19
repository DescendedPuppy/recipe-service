import { registerEnumType } from '@nestjs/graphql';

export enum IngredientUnit {
  HUNDRED_GRAMS,
  PIECE,
  BUNCH,
}

registerEnumType(IngredientUnit, {
  name: 'IngredientUnit',
});
