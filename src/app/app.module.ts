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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { Route, RouterModule, Routes } from '@angular/router';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsModule } from '@progress/kendo-angular-icons';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TestServiceService } from './test-service.service';
import { AccordionComponent } from './UI/accordion/accordion.component';



const ROUTES: Route[] = [
  {path:'',component:HomeComponent},
  { path: 'formLayout', component: FormLayoutComponent},
  { path: 'formElements', component: FormElementsComponent},
  { path: 'formValidation', component: FormValidationComponent},
  { path: 'formwizards', component: FormWizardComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    FormLayoutComponent,
    FormElementsComponent,
    FormValidationComponent,
    AccordionComponent

  
   
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    InputsModule,
    BrowserAnimationsModule,
    LayoutModule,
    IconsModule,
    ButtonsModule,
    RouterModule.forRoot(ROUTES, { relativeLinkResolution: 'legacy' })
  ],
  providers: [TestServiceService],

  bootstrap: [AppComponent]
})
export class AppModule { }

