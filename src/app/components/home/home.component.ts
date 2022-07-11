import { Component, OnInit } from '@angular/core';
import { FoodCategories, Recipe } from 'src/app/interfaces/food-category';
import { FoodReducerTemplate } from 'src/app/interfaces/store';
import { FoodAPIService } from 'src/app/services/food-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pizzaRecipes = {} as FoodReducerTemplate;
  saladRecipes = {} as FoodReducerTemplate;
  beefRecipes = {} as FoodReducerTemplate;
  numberOfFeatured: number = 8; //Number of featured items to be viewed in each category
  //Carousel responsive options
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor(private _foodAPI: FoodAPIService) {}

  ngOnInit(): void {
    //Fill pizzaRecipes array with unique recipes
    this._foodAPI.getRecipiesByCategory(FoodCategories.Pizza).subscribe(
      (res) => {
        this.pizzaRecipes = this.uniqueRecipesGenerator(
          this.numberOfFeatured,
          res.recipes,
          FoodCategories.Pizza
        );
      },
      (error) => {
        console.log(error);
      }
    );
    //Fill beefRecipes array with unique recipes
    this._foodAPI.getRecipiesByCategory(FoodCategories.Beef).subscribe(
      (res) => {
        this.beefRecipes = this.uniqueRecipesGenerator(
          this.numberOfFeatured,
          res.recipes,
          FoodCategories.Beef
        );
      },
      (error) => {
        console.log(error);
      }
    );
    //Fill saladRecipes array with unique recipes
    this._foodAPI.getRecipiesByCategory(FoodCategories.Salad).subscribe(
      (res) => {
        this.saladRecipes = this.uniqueRecipesGenerator(
          this.numberOfFeatured,
          res.recipes,
          FoodCategories.Salad
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
  //Function returns a new array of random unique recipes based on input number
  uniqueRecipesGenerator(
    numberOfRecipes: number,
    recipes: Array<Recipe>,
    category: FoodCategories
  ): FoodReducerTemplate {
    let uniqueRecipes: Array<Recipe> = [];
    for (let i = 0; i < numberOfRecipes; ) {
      let recipeIndex: number = Math.floor(Math.random() * recipes.length);
      if (
        uniqueRecipes.filter(
          (element) => element.recipe_id === recipes[recipeIndex].recipe_id
        ).length === 0
      ) {
        uniqueRecipes.push(recipes[recipeIndex]);
        i++;
      }
    }
    return { category: category, recipes: uniqueRecipes };
  }
}
