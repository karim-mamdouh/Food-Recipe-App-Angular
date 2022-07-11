import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Favourite } from 'src/app/interfaces/food-category';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  favouritesCount: Observable<{ favourites: Array<Favourite> }>;
  constructor(
    private _favStore: Store<{ favourites: { favourites: Array<Favourite> } }>
  ) {
    this.favouritesCount = this._favStore.select('favourites');
  }
  ngOnInit(): void {}
}
