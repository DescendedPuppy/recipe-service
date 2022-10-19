import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeResolver } from './recipe/recipe.resolver';
import { RecipeService } from './recipe/service/recipe.service';
import { IngredientService } from './recipe/service/ingredient.service';
import { Recipe } from './recipe/data/recipe.entity';
import { Ingredient } from './recipe/data/ingredient.entity';
import { RecipeIngredient } from './recipe/data/recipe-ingredient.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      keepConnectionAlive: true,
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Recipe]),
    TypeOrmModule.forFeature([Ingredient]),
    TypeOrmModule.forFeature([RecipeIngredient]),
  ],
  controllers: [AppController],
  providers: [AppService, RecipeService, IngredientService, RecipeResolver],
})
export class AppModule {}
