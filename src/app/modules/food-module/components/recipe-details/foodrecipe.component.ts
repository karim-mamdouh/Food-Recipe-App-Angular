import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDetails } from 'src/app/interfaces/food-category';
import { FoodAPIService } from 'src/app/services/food-api.service';

@Component({
  selector: 'app-foodrecipe',
  templateUrl: './foodrecipe.component.html',
  styleUrls: ['./foodrecipe.component.scss'],
})
export class FoodrecipeComponent implements OnInit {
  val2: number = 0;
  recipeDetails: RecipeDetails | null = null;

  constructor(
    private _router: ActivatedRoute,
    private _foodApiService: FoodAPIService
  ) {}

  ngOnInit(): void {
    // Recieve the recipt ID
    this.fetchDataFromApi(this._router.snapshot.params?.['id']);
  }

  fetchDataFromApi(recipeID: string) {
    // Fetch food Recipt from api
    this._foodApiService.getSpecificRecipe(recipeID).subscribe((response) => {
      this.recipeDetails = response.recipe;
    });
  }
}
