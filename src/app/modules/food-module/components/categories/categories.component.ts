import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TabView } from 'primeng/tabview';
import { Observable } from 'rxjs';
import { FoodCategories } from 'src/app/interfaces/food-category';
import { FoodReducerTemplate } from 'src/app/interfaces/store';
import { FoodAPIService } from 'src/app/services/food-api.service';
import { ProgressLoaderService } from 'src/app/services/progress-loader/progress-loader.service';
import { fillRecipies } from 'src/app/store/food-recipies/food-recipies.actions';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  // Get Tab view inside Html
  @ViewChild(TabView) tabview!: TabView;
  //recipe store observable
  recipeObservable: Observable<FoodReducerTemplate>;

  constructor(
    public _progressLoaderService: ProgressLoaderService,
    private _router: Router,
    private _foodApiService: FoodAPIService,
    private _store: Store<{ recipies: FoodReducerTemplate }>
  ) {
    this.recipeObservable = this._store.select('recipies');
  }

  ngOnInit(): void {
    // Load Pizza Tap By default
    this.fetchDataFromApi('Pizza');
  }

  onTapChange(activeTapIndex: number) {
    let tapTitle = this.tabview.tabs[activeTapIndex].header;
    this.fetchDataFromApi(tapTitle);
  }

  fetchDataFromApi(category: string) {
    // Fetch Data from api
    const indexOfCategoryInEnum = Object.keys(FoodCategories).indexOf(category);
    this._foodApiService
      .getRecipiesByCategory(
        Object.values(FoodCategories)[indexOfCategoryInEnum]
      )
      .subscribe((response) => {
        // Dispatching action and passing the correct payload
        this._store.dispatch(
          fillRecipies({
            payload: {
              category: Object.values(FoodCategories)[indexOfCategoryInEnum],
              recipes: response.recipes,
            },
          })
        );
      });
  }

  onCardClick(recipeID: string) {
    this._router.navigate([`food/recipe/${recipeID}`]);
  }
}
