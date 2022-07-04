import { Component, OnInit } from '@angular/core';
import FoodCategories, {
  FoodAPIService,
} from 'src/app/services/food-api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private _api: FoodAPIService) {}
  ngOnInit(): void {
    this._api.getSpecificRecipe('47746').subscribe((res) => {
      console.log(res);
    });
  }
}
