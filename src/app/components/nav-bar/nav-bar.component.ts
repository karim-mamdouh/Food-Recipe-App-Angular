import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Favourite } from 'src/app/interfaces/food-category';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  favouritesCount: Observable<{ favourites: Array<Favourite> }>;
  // array of items in the menu: login & register
  items: MenuItem[] = [
    {
      items: [
        {
          label: 'Sign In',
          command: () => {
            this.navigate('/auth/login');
          },
        },
        {
          label: 'Sign Up',
          command: () => {
            this.navigate('/auth/register');
          },
        },
      ],
    },
  ];
  constructor(
    private _favStore: Store<{ favourites: { favourites: Array<Favourite> } }>,
    private _router: Router
  ) {
    this.favouritesCount = this._favStore.select('favourites');
  }
  ngOnInit(): void {}
  navigate(path: string): void {
    this._router.navigate([path]);
  }
}
