import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-riya-nested-form',
  templateUrl: './riya-nested-form.component.html',
  styleUrls: ['./riya-nested-form.component.css']
})
export class RiyaNestedFormComponent implements OnInit {

  title = 'Lazy-Loading';
  contactForm:FormGroup;
  constructor(private builder:FormBuilder){
    this.contactForm = this.builder.group({
      fullName:new FormControl('',Validators.required),
      emailAddress:new FormControl('',[Validators.compose([Validators.required,Validators.email])]),
      phoneNumber:new FormControl('',[Validators.compose([Validators.required,Validators.maxLength(10),
        Validators.minLength(10),Validators.pattern('^[0-9]+')])]),
      comment:new FormControl('',Validators.required),
    })

  }
  ngOnInit(): void {
  
  }
  onSubmit(contactForm){
    console.log(contactForm)
  }

}
