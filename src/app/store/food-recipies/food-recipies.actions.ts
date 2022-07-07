import { createAction, props } from '@ngrx/store';
import { FoodReducerTemplate } from 'src/app/interfaces/store';
export const FILL_RECIPIES = '[HOME PAGE] Fill_Recipies'
//Fill recipes array action, accepts FoodReducerTemplate object
export const fillRecipies = createAction(
  FILL_RECIPIES,
  props<{
    payload: FoodReducerTemplate;
  }>()
);
