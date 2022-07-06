import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodCategories } from '../interfaces/food-category';

@Injectable({
  providedIn: 'root',
})
export class FoodAPIService {
  private _baseURL: string = 'https://forkify-api.herokuapp.com/api/'; //Base API URL

  constructor(private _httpFood: HttpClient) {}
  //Get all recipies of a specific category
  getRecipiesByCategory(category: FoodCategories): Observable<any> {
    return this._httpFood.get(`${this._baseURL}search?q=${category}`);
  }
  //Get a specific recipe details using recipe id
  getSpecificRecipe(recipedID: string): Observable<any> {
    if (!Number(recipedID)) {
      throw new Error('Wrong data input, value should be ID of recipe');
    }
    return this._httpFood.get(`${this._baseURL}get?rId=${recipedID}`);
  }
}
