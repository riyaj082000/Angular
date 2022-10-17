import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiyaAddStudentComponent } from './crud-operation/riya-add-student/riya-add-student.component';
import { RiyaEditStudentComponent } from './crud-operation/riya-edit-student/riya-edit-student.component';
import { RiyaStudentComponent } from './crud-operation/riya-student/riya-student.component';
import { RiyaLoginComponent } from './riya-login/riya-login.component';
import { RiyaLogoutComponent } from './riya-logout/riya-logout.component';

const routes: Routes = [
  {path:'show',component:RiyaStudentComponent},
  {path:'edit/:id',component:RiyaEditStudentComponent},
  {path:'add',component:RiyaAddStudentComponent},
  { path: 'login', component: RiyaLoginComponent },
  { path: 'logout', component: RiyaLogoutComponent },
  {
    path: 'riya-home',
    loadChildren: () => import('./Lazy-Loading/riya-home/riya-home.module').then(m => m.RiyaHomeModule)
  },
  {
    path: 'riya-template-driven-forms',
    loadChildren: () => import('./Lazy-Loading/riya-template-driven-forms/riya-template-driven.module').then(m => m.RiyaTemplateDrivenFormsModule)
  },
  {
    path: 'riya-nested-form',
    loadChildren: () => import('./Lazy-Loading/nested-forms/riya-nested-form/riya-nested-form.module').then(m => m.RiyaNestedFormModule)
  },

  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
