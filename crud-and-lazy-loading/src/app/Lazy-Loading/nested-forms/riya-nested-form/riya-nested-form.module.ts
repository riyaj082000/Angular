import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiyaNestedFormComponent } from './riya-nested-form.component';
import { RiyaNestedFormRoutingModule } from './riya-nested-form-routing.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RiyaNestedFormChildComponent } from '../riya-nested-form-child/riya-nested-form-child.component';


@NgModule({
  imports: [
    CommonModule,
    RiyaNestedFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
    
  ],
  declarations: [RiyaNestedFormComponent, RiyaNestedFormChildComponent]
})
export class RiyaNestedFormModule { }