import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';


import { RouterModule, ROUTES } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    FormLayoutComponent,
    FormElementsComponent,
    FormValidationComponent,
    FormWizardComponent,
    //MenuListItemComponent,
   
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
