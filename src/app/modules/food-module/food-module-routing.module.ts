import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodcardComponent } from './foodcard/foodcard.component';
import { FoodhomeComponent } from './foodhome/foodhome.component';
import { FoodrecipeComponent } from './foodrecipe/foodrecipe.component';

const routes: Routes = [
  {path:'foodHome',component:FoodhomeComponent},
  {path:'foodcard',component:FoodcardComponent},
  {path:'foodrecipe',component:FoodrecipeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodModuleRoutingModule { }
