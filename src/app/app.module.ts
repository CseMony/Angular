import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { ChartMorrisComponent } from './charts/chart-morris/chart-morris.component';
import { ChartRickshawComponent } from './charts/chart-rickshaw/chart-rickshaw.component';


const ROUTES: Route[] = [
  {path:'',redirectTo:'index.html',pathMatch:'full'},
=======



const ROUTES: Route[] = [
  {path:'',component:HomeComponent},
>>>>>>> 2f61bbedcd99e7e6e3de26b13e818bec21a8703f
  { path: 'formLayout', component: FormLayoutComponent},
  { path: 'formElements', component: FormElementsComponent},
  { path: 'formValidation', component: FormValidationComponent},
  { path: 'formwizards', component: FormWizardComponent},
  { path:'Accordion' ,component:AccordionComponent},
  {path:'chartMorris' ,component:ChartMorrisComponent},
  {path:'chartRickshaw' ,component:ChartRickshawComponent},

];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormLayoutComponent,
    FormElementsComponent,
    FormValidationComponent,
<<<<<<< HEAD
    AccordionComponent,
    ChartMorrisComponent,
    ChartRickshawComponent
=======
    AccordionComponent
>>>>>>> 2f61bbedcd99e7e6e3de26b13e818bec21a8703f

  
   
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

