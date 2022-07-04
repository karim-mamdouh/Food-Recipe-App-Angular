//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModuleRoutingModule } from './auth-module-routing.module';
//Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, AuthModuleRoutingModule],
})
export class AuthModuleModule {}
