import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Favourite } from 'src/app/interfaces/food-category';
import { removeFavourite } from 'src/app/store/favourite-list/fav-list.actions';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.scss'],
})
export class FavListComponent implements OnInit {
  //Observable for store array
  favouriteRecipes: Observable<{ favourites: Array<Favourite> }>;

  constructor(
    private _favStore: Store<{ favourites: { favourites: Array<Favourite> } }>,
    private _router: Router
  ) {
    this.favouriteRecipes = this._favStore.select('favourites');
  }

  ngOnInit(): void {}

  //Function that routes to recipe details based on input object
  goToRecipe(favourite: Favourite): void {
    this._router.navigate([`/food/recipe/${favourite.recipe.recipe_id}`]);
  }
  //Function that removes favourite item from store
  removeRecipe(favourite: Favourite): void {
    this._favStore.dispatch(removeFavourite({ payload: favourite }));
  }
}
