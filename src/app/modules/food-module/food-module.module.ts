//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';

//Components
import { FoodModuleRoutingModule } from './food-module-routing.module';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [CommonModule, FoodModuleRoutingModule, DropdownModule],
  exports:[HomepageComponent]
})
export class FoodModuleModule {}
