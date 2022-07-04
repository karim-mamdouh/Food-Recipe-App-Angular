//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FavListComponent } from './components/fav-list/fav-list.component';

const routes: Routes = [
  //Default route
  { path: '', redirectTo: 'food', pathMatch: 'full' },
  //Auth route
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth-module/auth-module.module').then(
        (module) => module.AuthModuleModule
      ),
  },
  //Food route
  {
    path: 'food',
    loadChildren: () =>
      import('./modules/food-module/food-module.module').then(
        (module) => module.FoodModuleModule
      ),
  },
  //Favorite recipies list route
  {
    path: 'fav-list',
    component: FavListComponent,
  },
  //Wrong path route
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
