import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  loggedIn: boolean = false; //Login flag for local storage

  constructor() {}

  ngOnInit(): void {
    this.loggedIn = JSON.parse(localStorage.getItem('token')!);
  }
  //Function to logout user by setting token to false and refreshing page
  logout(): void {
    localStorage.setItem('token', JSON.stringify(false));
    window.location.href = '/';
  }
}
