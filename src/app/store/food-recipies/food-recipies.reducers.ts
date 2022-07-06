import { createReducer, on } from '@ngrx/store';
import { FoodCategories, Recipe } from 'src/app/interfaces/food-category';
import { FoodReducerTemplate } from 'src/app/interfaces/store';
import { fillRecipies } from './food-recipies.actions';

//Recipes initial state
const initialState: FoodReducerTemplate = {
  category: FoodCategories.Beef,
  recipes: [] as Array<Recipe>,
};
//Recipes reducer
export const recipiesReducer = createReducer(
  initialState,
  //Fill recipes action
  on(fillRecipies, (state, action) => {
    console.log(action);
    return {
      ...state,
      recipes: [...state.recipes, ...action.payload.recipes],
      category: action.payload.category,
    };
  })
);
