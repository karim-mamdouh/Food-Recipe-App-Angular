//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { FoodrecipeComponent } from './components/recipe-details/foodrecipe.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  //Default route
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  //Categories route
  { path: 'categories', component: CategoriesComponent },
  //Recipe details route
  { path: 'recipe/:id', component: FoodrecipeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodModuleRoutingModule {}
