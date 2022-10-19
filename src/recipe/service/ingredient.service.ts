import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from '../data/ingredient.entity';
import { Repository } from 'typeorm';
import { Ingredient as IngredientModel } from '../model/ingredient';
import { RecipeIngredient } from '../data/recipe-ingredient.entity';
import { IngredientUnit } from '../model/ingredient-unit';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
    @InjectRepository(RecipeIngredient)
    private readonly recipeIngredientRepository: Repository<RecipeIngredient>,
  ) {}

  async getIngredientsForRecipe(recipeId: number): Promise<[IngredientModel]> {
    /*
    const recipeIngredients = await this.recipeIngredientRepository.find({
      where: { recipeId: recipeId },
    });

    const ingredients = await this.ingredientRepository.find({
      where: recipeIngredients.map((recipeIngredient) => {
        id: recipeIngredient.ingredientId;
      }) as [],
    });
    
     */

    return [
      {
        id: 1,
        name: 'egg',
        unit: IngredientUnit.PIECE,
        unitsNeeded: 2,
        pricePerUnit: 0.5,
      },
    ];
  }
}
