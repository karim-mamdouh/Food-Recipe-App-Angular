//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';

//Components
import { FoodModuleRoutingModule } from './food-module-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { FoodcardComponent } from './foodcard/foodcard.component';
import { FoodrecipeComponent } from './foodrecipe/foodrecipe.component';

@NgModule({
  declarations: [
    HomepageComponent,
    FoodcardComponent,
    FoodrecipeComponent
  ],
  imports: [CommonModule, FoodModuleRoutingModule, DropdownModule,TabViewModule,CardModule,ButtonModule,FieldsetModule],
  exports:[HomepageComponent]

})
export class FoodModuleModule {}
