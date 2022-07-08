//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';

//Components
import { FoodModuleRoutingModule } from './food-module-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FoodModuleRoutingModule, DropdownModule],
})
export class FoodModuleModule {}
