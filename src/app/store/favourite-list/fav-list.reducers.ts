import { createReducer, on } from '@ngrx/store';
import { Favourite } from 'src/app/interfaces/food-category';
import {
  addFavourite,
  removeFavourite,
  resetFavourites,
} from './fav-list.actions';

//Favourites inital state
const initialState = {
  favourites: [] as Array<Favourite>,
};
//Favourites reducer
export const favouritesReducer = createReducer(
  initialState,
  //Add to favourites action
  on(addFavourite, (state, action) => {
    if (
      state.favourites.filter(
        (element) =>
          element.recipe.recipe_id === action.payload.recipe.recipe_id
      ).length !== 0
    ) {
      return {
        ...state,
      };
    } else {
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    }
  }),
  //Remove favourite action
  on(removeFavourite, (state, action) => {
    return {
      ...state,
      favourites: state.favourites.filter(
        (element) =>
          element.recipe.recipe_id !== action.payload.recipe.recipe_id
      ),
    };
  }),
  //Reset favourites action
  on(resetFavourites, (state) => {
    return {
      ...state,
      favourites: [],
    };
  })
);
