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
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ChartsMorrisComponent } from './charts-morris/charts-morris.component';
import { ChartsRickshawComponent } from './charts-rickshaw/charts-rickshaw.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BasicTableComponent } from './basic-table/basic-table.component';


const ROUTES: Route[] = [
  {path:'Home',component:HomeComponent,pathMatch:"full"},
  { path: 'Form Layout', component: FormLayoutComponent},
  { path: 'Form Elements', component: FormElementsComponent},
  { path: 'Form Validation', component: FormValidationComponent},
  { path: 'Form wizards', component: FormWizardComponent},
  { path:'Accordion' ,component:AccordionComponent},
  {path:'Chart Morris' ,component:ChartsMorrisComponent},
  {path:'Chart Rickshaw' ,component:ChartsRickshawComponent},
  {path:'Button' ,component:ButtonsComponent},
  {path:"Basic Tables", component:BasicTableComponent}


];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormLayoutComponent,
    FormElementsComponent,
    FormValidationComponent,
    AccordionComponent,
    ChartsRickshawComponent,
    ChartsMorrisComponent,
    ButtonsComponent,
    BasicTableComponent
 
   
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
    MorrisJsModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(ROUTES, { relativeLinkResolution: 'legacy' })
  ],
  providers: [TestServiceService],

  bootstrap: [AppComponent]
})
export class AppModule { }

