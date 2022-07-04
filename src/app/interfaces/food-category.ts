export interface Recipe {
  image_url: string;
  publisher: string;
  publisher_url: string;
  recipe_id: string;
  social_rank: number;
  source_url: string;
  title: string;
}

export interface RecipeDetails extends Recipe {
  ingredients: Array<string>;
}

export interface FoodCategory {
  count: number;
  recipes: Array<Recipe>;
}

export interface SingleRecipe {
  recipe: RecipeDetails;
}
