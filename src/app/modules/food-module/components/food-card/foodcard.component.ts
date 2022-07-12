import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  Favourite,
  FoodCategories,
  Recipe,
} from 'src/app/interfaces/food-category';
import { addFavourite } from 'src/app/store/favourite-list/fav-list.actions';

@Component({
  selector: 'app-foodcard',
  templateUrl: './foodcard.component.html',
  styleUrls: ['./foodcard.component.scss'],
})
export class FoodcardComponent implements OnInit {
  //Recipe to be viewed incoming to component
  @Input() foodData: Recipe | null = null;
  //Recipe category incoming to component
  @Input() foodCategory: FoodCategories | null = null;

  constructor(
    private _router: Router,
    private _favStore: Store<{ favourites: { favourites: Array<Favourite> } }>
  ) {}

  ngOnInit(): void {}
  //Function that adds recipe object to favourite store
  addToFavourites(): void {
    this._favStore.dispatch(
      addFavourite({
        payload: { recipe: this.foodData!, category: this.foodCategory! },
      })
    );
  }
  //Function that navigates to recipe details based on input recipeID
  onCardClick(recipeID: string): void {
    this._router.navigate([`food/recipe/${recipeID}`]);
  }
}
