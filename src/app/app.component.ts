import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activeURL: string = '';
  title = 'Yummy Taste';

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this._router.events.subscribe((event: any) => {
      if (event.url !== undefined && event.type === 1)
        this.activeURL = event.url;
    });
  }
}
