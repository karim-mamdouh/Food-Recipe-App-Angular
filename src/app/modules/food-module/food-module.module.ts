//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';


//Components
import { FoodModuleRoutingModule } from './food-module-routing.module';
import { FoodhomeComponent } from './foodhome/foodhome.component';
import { FoodcardComponent } from './foodcard/foodcard.component';
import { FoodrecipeComponent } from './foodrecipe/foodrecipe.component';

@NgModule({
  declarations: [
    FoodhomeComponent,
    FoodcardComponent,
    FoodrecipeComponent
  ],
  imports: [CommonModule, FoodModuleRoutingModule, DropdownModule,TabViewModule,CardModule,ButtonModule],
})
export class FoodModuleModule {}
