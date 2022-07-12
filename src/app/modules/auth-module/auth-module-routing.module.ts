//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  //Default route
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //Login route
  { path: 'login', component: LoginComponent },
  //Register route
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthModuleRoutingModule {}
