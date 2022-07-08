//General recipe interface
export interface Recipe {
  image_url: string;
  publisher: string;
  publisher_url: string;
  recipe_id: string;
  social_rank: number;
  source_url: string;
  title: string;
}
//Recipe details interface
export interface RecipeDetails extends Recipe {
  ingredients: Array<string>;
}
//Favourite item interface
export interface Favourite {
  category: FoodCategories;
  recipe: Recipe | RecipeDetails;
}
//Food categories to be used with API
export enum FoodCategories {
  Pizza = 'pizza',
  Salad = 'salad',
  Beef = 'beef',
}
