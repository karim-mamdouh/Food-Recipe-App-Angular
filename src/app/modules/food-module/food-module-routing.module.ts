//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { FoodrecipeComponent } from './components/recipe-details/foodrecipe.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FavListComponent } from './components/fav-list/fav-list.component';
import { AuthGuardGuard } from 'src/app/guards/auth-guard.guard';

const routes: Routes = [
  //Default route
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  //Categories route
  { path: 'categories', component: CategoriesComponent },
  //Recipe details route
  {
    path: 'recipe/:id',
    canActivate: [AuthGuardGuard],
    component: FoodrecipeComponent,
  },
  //Favorite recipies list route
  {
    path: 'fav-list',
    canActivate: [AuthGuardGuard],
    component: FavListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodModuleRoutingModule {}
