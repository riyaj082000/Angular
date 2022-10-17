import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiyaHomeComponent } from './riya-home.component';

const routes: Routes = [
  {
    path: '',
    component: RiyaHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiyaHomeRoutingModule { }