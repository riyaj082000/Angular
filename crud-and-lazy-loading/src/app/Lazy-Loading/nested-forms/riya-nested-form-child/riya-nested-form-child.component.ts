import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';


@Component({
  selector: 'app-riya-nested-form-child',
  templateUrl: './riya-nested-form-child.component.html',
  styleUrls: ['./riya-nested-form-child.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class RiyaNestedFormChildComponent implements OnInit {

  childForm: any;

  constructor( 
    public parentForm: FormGroupDirective,
    ) { }

  ngOnInit() {
    this.childForm = this.parentForm.form;
    this.childForm.addControl('address', new FormGroup({
      streetName: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      pinCode: new FormControl(null, [Validators.required])
    }));
  }

}
