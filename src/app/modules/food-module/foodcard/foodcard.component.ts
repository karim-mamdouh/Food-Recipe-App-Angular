import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodcard',
  templateUrl: './foodcard.component.html',
  styleUrls: ['./foodcard.component.scss']
})
export class FoodcardComponent implements OnInit {
  @Input('foodData') foodData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
