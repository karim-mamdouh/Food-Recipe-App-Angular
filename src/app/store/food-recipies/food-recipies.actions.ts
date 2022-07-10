import { createAction, props } from '@ngrx/store';
import { FoodReducerTemplate } from 'src/app/interfaces/store';

//Fill recipes array action, accepts FoodReducerTemplate object
export const fillRecipies = createAction(
  'Fill_Recipies',
  props<{
    payload: FoodReducerTemplate;
  }>()
);
//Reset recipes array action
export const resetRecipes = createAction('RESET_RECIPES');
