import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { TabView } from 'primeng/tabview';
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
  foodRecipiesFromStore = [] as Recipe[];
  // Get Tab view inside Html
  @ViewChild(TabView) tabview!: TabView;

  constructor(
    private _foodApiService: FoodAPIService,
    private _store: Store<{ recipies: FoodReducerTemplate }>) {
    this._store.select('recipies').subscribe(res => {
      this.foodRecipiesFromStore = res.recipes;
    });
  }

  ngOnInit(): void {
    // Load Pizza Tap By default
    this.fetchDataFromApi("Pizza");
  }

  onTapChange(activeTapIndex: number) {
    let tapTitle = this.tabview.tabs[activeTapIndex].header;
    this.fetchDataFromApi(tapTitle);
  }

  fetchDataFromApi(category: string) {
    // Fetch Data from api 
    const indexOfCategoryInEnum = Object.keys(FoodCategories).indexOf(category);
    this._foodApiService.getRecipiesByCategory(Object.values(FoodCategories)[indexOfCategoryInEnum]).subscribe(response => {
      // Dispatching action and passing the correct payload
      this._store.dispatch(
        fillRecipies({
          payload: { category: Object.values(FoodCategories)[indexOfCategoryInEnum], recipes: response.recipes }
        })
      );
    });
  }
}
