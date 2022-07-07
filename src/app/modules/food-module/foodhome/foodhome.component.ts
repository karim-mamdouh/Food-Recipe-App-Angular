import { Component, OnInit } from '@angular/core';
import { FoodCategories, Recipe } from 'src/app/interfaces/food-category';
import { FoodAPIService } from 'src/app/services/food-api.service';

@Component({
  selector: 'app-foodhome',
  templateUrl: './foodhome.component.html',
  styleUrls: ['./foodhome.component.scss']
})
export class FoodhomeComponent implements OnInit {
  foodRecipes : Recipe[]=[]
  constructor(private _foodApiService:FoodAPIService) { 
    
  }

  ngOnInit(): void {
    this._foodApiService.getRecipiesByCategory(FoodCategories.Pizza).subscribe(response =>{
      this.foodRecipes = response.recipes;
      console.log(this.foodRecipes);    
    })
  }

}
