import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FoodCategories, Recipe } from 'src/app/interfaces/food-category';
import { FoodReducerTemplate } from 'src/app/interfaces/store';
import { FoodAPIService } from 'src/app/services/food-api.service';
import { fillRecipies } from 'src/app/store/food-recipies/food-recipies.actions';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  foodRecipes$: Observable<Recipe[]>;

  constructor(private _foodApiService: FoodAPIService, private _store: Store<any>) {
    // get recipes array which is inside recipies reducer
    this.foodRecipes$ = this._store.select(state => state.recipies.recipes);
  }

  ngOnInit(): void {
    // Fetch Data from api 
    this._foodApiService.getRecipiesByCategory(FoodCategories.Salad).subscribe(response => {
      // Temp Object Holding the Data from the response
      const foodRecipeTempObj: FoodReducerTemplate = {
        category: FoodCategories.Salad,
        recipes: response.recipes,
        count: response.count
      };
      // Dispatching action and passing the temp obj as params
      this._store.dispatch(fillRecipies({ payload: foodRecipeTempObj }));
    });
  }
}
