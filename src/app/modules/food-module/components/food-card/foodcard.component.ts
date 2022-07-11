import { Component, Input, OnInit } from '@angular/core';
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
  @Input() foodData: Recipe | null = null;
  @Input() foodCategory: FoodCategories | null = null;

  constructor(
    private _favStore: Store<{ favourites: { favourites: Array<Favourite> } }>
  ) {}

  ngOnInit(): void {}
  addToFavourites(): void {
    this._favStore.dispatch(
      addFavourite({
        payload: { recipe: this.foodData!, category: this.foodCategory! },
      })
    );
  }
}
