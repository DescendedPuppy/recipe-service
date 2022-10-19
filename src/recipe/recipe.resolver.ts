import { Recipe } from './model/recipe';
import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Ingredient } from './model/ingredient';
import { IngredientService } from './service/ingredient.service';
import { RecipeService } from './service/recipe.service';

@Resolver(() => Recipe)
export class RecipeResolver {
  constructor(
    private ingredientService: IngredientService,
    private recipeService: RecipeService,
  ) {}

  @Query(() => Recipe, { name: 'recipe' })
  async getRecipe(@Args('id', { type: () => Int }) id: number) {
    return this.recipeService.getRecipe(id);
  }

  @ResolveField('ingredients', () => [Ingredient])
  async getIngredients(@Parent() recipe: Recipe) {
    return this.ingredientService.getIngredientsForRecipe(recipe.id);
  }
}
