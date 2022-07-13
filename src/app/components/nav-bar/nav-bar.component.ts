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
  //Observable for favourites store array count
  favouritesCount: Observable<{ favourites: Array<Favourite> }>;
  // Array of items in the menu: login & register
  items: MenuItem[] = [
    {
      items: this.userItems(),
    },
  ];

  constructor(
    private _favStore: Store<{ favourites: { favourites: Array<Favourite> } }>,
    private _router: Router
  ) {
    this.favouritesCount = this._favStore.select('favourites');
  }

  ngOnInit(): void {}
  //Array that sets content in user dropdown menu based on local storage token
  userItems(): Array<MenuItem> {
    let items: Array<MenuItem> = [];
    let token = JSON.parse(localStorage.getItem('token')!);
    if (token) {
      items = [
        {
          label: 'Logout',
          command: () => {
            this.logout();
          },
        },
      ];
    } else {
      items = [
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
      ];
    }
    return items;
  }
  //Function that navigates to input URL
  navigate(path: string): void {
    this._router.navigate([path]);
  }
  //Function that logs the user out by setting token to false
  logout(): void {
    localStorage.setItem('token', JSON.stringify(false));
    window.location.href = '/';
  }
}
