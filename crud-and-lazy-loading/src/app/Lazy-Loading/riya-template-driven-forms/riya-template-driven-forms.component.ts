import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-riya-template-driven-forms',
  templateUrl: './riya-template-driven-forms.component.html',
  styleUrls: ['./riya-template-driven-forms.component.css']
})
export class RiyaTemplateDrivenFormsComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
   
  }

  onSubmit(form:NgForm){
    console.log(form.value);
  }

}
