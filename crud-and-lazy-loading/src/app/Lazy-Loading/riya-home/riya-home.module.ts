import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiyaHomeComponent } from './riya-home.component';
import { RiyaHomeRoutingModule } from './riya-home-routing.module';



@NgModule({
  imports: [
    CommonModule,
RiyaHomeRoutingModule
    
  ],
  declarations: [RiyaHomeComponent]
})
export class RiyaHomeModule { }