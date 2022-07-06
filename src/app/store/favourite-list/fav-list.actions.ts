import { createAction, props } from '@ngrx/store';
import { Favourite } from 'src/app/interfaces/food-category';

//Add recipe to list, accepts Favourite object as payload
export const addFavourite = createAction(
  'ADD_FAVOURITE',
  props<{ payload: Favourite }>()
);
//Remove favourite item from list, accepts index of object in list
export const removeFavourite = createAction(
  'REMOVE_FAVOURITE',
  props<{ payload: number }>()
);
//Reset favourites list
export const resetFavourites = createAction('RESET_FAVOURITES');
