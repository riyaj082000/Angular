import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RiyaAddStudentComponent } from './crud-operation/riya-add-student/riya-add-student.component';
import { RiyaEditStudentComponent } from './crud-operation/riya-edit-student/riya-edit-student.component';
import { RiyaStudentComponent } from './crud-operation/riya-student/riya-student.component';
import { RiyaLoginComponent } from './riya-login/riya-login.component';
import { RiyaLogoutComponent } from './riya-logout/riya-logout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { RiyaNestedFormChildComponent } from './riya-nested-form-child/riya-nested-form-child.component';





@NgModule({
  declarations: [
    AppComponent,
    RiyaAddStudentComponent,
    RiyaEditStudentComponent,
    RiyaLoginComponent,
    RiyaLogoutComponent,
    RiyaStudentComponent,

   //RiyaNestedFormChildComponent

    // NestedFormComponent,
   // RiyaTemplateDrivenFormsComponent,
    // RiyaHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
