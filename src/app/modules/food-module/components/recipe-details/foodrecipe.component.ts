import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Favourite, RecipeDetails } from 'src/app/interfaces/food-category';
import { FoodAPIService } from 'src/app/services/food-api.service';

@Component({
  selector: 'app-foodrecipe',
  templateUrl: './foodrecipe.component.html',
  styleUrls: ['./foodrecipe.component.scss'],
})
export class FoodrecipeComponent implements OnInit {
  //Recipe details object to be viewed
  recipeDetails: RecipeDetails | null = null;

  constructor(
    private _favStore: Store<{ favourites: { favourites: Array<Favourite> } }>,
    private _router: ActivatedRoute,
    private _foodApiService: FoodAPIService
  ) {}

  ngOnInit(): void {
    // Recieve the recipt ID
    this.fetchDataFromApi(this._router.snapshot.params?.['id']);
  }

  fetchDataFromApi(recipeID: string): void {
    // Fetch food Recipt from api
    this._foodApiService.getSpecificRecipe(recipeID).subscribe((response) => {
      this.recipeDetails = response.recipe;
    });
  }
}
