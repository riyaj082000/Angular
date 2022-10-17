import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiyaNestedFormComponent } from './riya-nested-form.component';



const routes: Routes = [
  {
    path: '',
    component: RiyaNestedFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiyaNestedFormRoutingModule { }