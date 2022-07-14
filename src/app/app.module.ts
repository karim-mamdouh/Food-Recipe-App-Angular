//Modules
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { CarouselModule } from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from 'primeng/menu';
//Reducers
import { recipiesReducer } from './store/food-recipies/food-recipies.reducers';
import { favouritesReducer } from './store/favourite-list/fav-list.reducers';
//Interceptors
import { interceptorProviders } from './services/interceptors/interceptor-providers';
//Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
//Pipes
import { FilterRecieptsPipe } from './pipes/filter-reciepts.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent,
    HomeComponent,
    FooterComponent,
    FilterRecieptsPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    BadgeModule,
    HttpClientModule,
    MenuModule,
    StoreModule.forRoot({
      recipies: recipiesReducer,
      favourites: favouritesReducer,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:10000',
    }),
  ],
  providers: [interceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
