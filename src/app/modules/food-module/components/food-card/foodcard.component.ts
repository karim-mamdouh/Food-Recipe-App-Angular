import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/food-category';

@Component({
  selector: 'app-foodcard',
  templateUrl: './foodcard.component.html',
  styleUrls: ['./foodcard.component.scss'],
})
export class FoodcardComponent implements OnInit {
  @Input() foodData: Recipe | null = null;
  constructor() {}

  ngOnInit(): void {}
}
