import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';


const routes: Routes = [
  
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  { path: 'formLayout', component: FormLayoutComponent},
  { path: 'formElements', component: FormElementsComponent},
  { path: 'formValidation', component: FormValidationComponent},
  { path: 'formwizards', component: FormWizardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
