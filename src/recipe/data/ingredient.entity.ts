import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IngredientUnit } from './ingredient-unit.entity';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column()
  name: string;

  @Column('float')
  pricePerUnit: number;

  @Column({
    type: 'enum',
    enum: IngredientUnit,
    default: IngredientUnit.HUNDRED_GRAMS,
  })
  unit: IngredientUnit;
}
