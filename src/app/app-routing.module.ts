import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { FormLayoutComponent } from './form-layout/form-layout.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';


const routes: Route[] = [
  
<<<<<<< HEAD
  {path:'',redirectTo:'index.html',pathMatch:'full'},
=======
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
>>>>>>> 2f61bbedcd99e7e6e3de26b13e818bec21a8703f
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
