//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { FoodModuleRoutingModule } from './food-module-routing.module';
import { BadgeModule } from 'primeng/badge';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
//Components
import { FoodcardComponent } from './components/food-card/foodcard.component';
import { FoodrecipeComponent } from './components/recipe-details/foodrecipe.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FavListComponent } from './components/fav-list/fav-list.component';

@NgModule({
  declarations: [
    FoodcardComponent,
    FoodrecipeComponent,
    FavListComponent,
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    FoodModuleRoutingModule,
    DropdownModule,
    TabViewModule,
    CardModule,
    ButtonModule,
    FieldsetModule,
    RatingModule,
    FormsModule,
    BadgeModule,
    VirtualScrollerModule,
  ],
  exports: [],
})
export class FoodModuleModule {}
