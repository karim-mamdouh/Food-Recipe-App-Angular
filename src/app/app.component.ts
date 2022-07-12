import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activeURL: string = '';
  title = 'FoodApp';

  constructor(private _updates: SwUpdate, private _router: Router) {}

  ngOnInit(): void {
    this._updates.available.subscribe(() => {
      this._updates.activateUpdate().then(() => document.location.reload());
    });
    this._router.events.subscribe((event: any) => {
      if (event.url !== undefined && event.type === 1)
        this.activeURL = event.url;
    });
  }
}
