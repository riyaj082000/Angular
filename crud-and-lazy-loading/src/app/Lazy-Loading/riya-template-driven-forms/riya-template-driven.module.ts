

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiyaTemplateDrivenFormsComponent } from './riya-template-driven-forms.component';
import { RiyaTemplateDrivenFormsRoutingModule } from './riya-template-driven-routing.module';
import { FormsModule } from '@angular/forms';
// import { RiyaHomeRoutingModule } from './riya-home-routing.module';



@NgModule({
  imports: [
    CommonModule,
    RiyaTemplateDrivenFormsRoutingModule,FormsModule
// RiyaHomeRoutingModule
    
  ],
  declarations: [RiyaTemplateDrivenFormsComponent]
})
export class RiyaTemplateDrivenFormsModule { }