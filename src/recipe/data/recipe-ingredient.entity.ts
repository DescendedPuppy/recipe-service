import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RecipeIngredient {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column('int')
  recipeId: number;

  @Column('int')
  ingredientId: number;

  @Column('int')
  amount: number;

  @Column({ nullable: true })
  preparation?: string;
}
