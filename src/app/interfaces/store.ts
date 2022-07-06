import { FoodCategories, Recipe } from './food-category';

export interface FoodReducerTemplate {
  category: FoodCategories;
  recipes: Array<Recipe>;
}
