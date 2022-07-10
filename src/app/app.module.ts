//Modules
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
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
import { HttpClientModule } from '@angular/common/http';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
//Reducers
import { recipiesReducer } from './store/food-recipies/food-recipies.reducers';
import { favouritesReducer } from './store/favourite-list/fav-list.reducers';
//Interceptors
import { interceptorProviders } from './services/interceptors/interceptor-providers';
//Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent,
    ServerErrorComponent,
    HomeComponent,
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
    StoreModule.forRoot({
      recipies: recipiesReducer,
      favourites: favouritesReducer,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [interceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
