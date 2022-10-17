import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiyaTemplateDrivenFormsComponent } from './riya-template-driven-forms.component';



const routes: Routes = [
  {
    path: '',
    component: RiyaTemplateDrivenFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiyaTemplateDrivenFormsRoutingModule { }
