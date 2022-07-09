//Modules
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BadgeModule } from 'primeng/badge';
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { DataViewModule } from 'primeng/dataview';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
//Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FavListComponent } from './components/fav-list/fav-list.component';
import { StoreModule } from '@ngrx/store';
import { recipiesReducer } from './store/food-recipies/food-recipies.reducers';
import { favouritesReducer } from './store/favourite-list/fav-list.reducers';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { InterceptorService } from './services/interceptor/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    FavListComponent,
    ServerErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TooltipModule,
    AppRoutingModule,
    ButtonModule,
    DataViewModule,
    InputTextModule,
    CarouselModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    CheckboxModule,
    RadioButtonModule,
    TabViewModule,
    CardModule,
    ProgressSpinnerModule,
    BadgeModule,
    HttpClientModule,
    DropdownModule,
    StoreModule.forRoot(
      { recipies: recipiesReducer, favourites: favouritesReducer },
      {}
    ),
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
