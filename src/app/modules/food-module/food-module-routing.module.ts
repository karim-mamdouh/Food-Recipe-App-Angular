import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodrecipeComponent } from './foodrecipe/foodrecipe.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'recipe/:id', component: FoodrecipeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodModuleRoutingModule {}
