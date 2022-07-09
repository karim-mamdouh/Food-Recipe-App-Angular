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
    return {
      ...state,
      favourites: [...state.favourites, action.payload],
    };
  }),
  //Remove favourite action
  on(removeFavourite, (state, action) => {
    return {
      ...state,
      favourites: state.favourites.filter(
        (element, index) => index !== action.payload
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
