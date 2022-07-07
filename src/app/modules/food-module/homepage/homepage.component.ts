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
  foodRecipiesFromStore = {} as FoodReducerTemplate;

  constructor(
    private _foodApiService: FoodAPIService,
    private _store: Store<{ recipies: FoodReducerTemplate }>) {
    this._store.select('recipies').subscribe(res => {
      this.foodRecipiesFromStore = res;
    });
  }

  ngOnInit(): void {
    // Fetch Data from api 
    this._foodApiService.getRecipiesByCategory(FoodCategories.Pizza).subscribe(response => {
      // Dispatching action and passing the correct payload
      this._store.dispatch(
        fillRecipies({
          payload: { category: FoodCategories.Pizza, recipes: response.recipes }
        })
      );
    });
  }
}
