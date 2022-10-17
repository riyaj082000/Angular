import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RiyaStudentService } from '../../riya-student.service';

@Component({
  selector: 'app-riya-edit-student',
  templateUrl: './riya-edit-student.component.html',
  styleUrls: ['./riya-edit-student.component.css']
})
export class RiyaEditStudentComponent implements OnInit {

  id: number = 0;
  studentEditForm: FormGroup;
  formSubmitted : boolean = false; 

  constructor(private studentService: RiyaStudentService,
    private route: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder
  ) {


    this.studentEditForm = this.formBuilder.group({
      id: 0,
      firstname:  ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lastname:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    })



  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (params['id'] != null) {
        this.studentEditForm.get('id')?.setValue(params['id']);
        const data = this.studentService.getUsersByID(this.id);
        if (data) {
          this.studentEditForm.setValue(data);
        }
      }
    });
  }
  save() {
    if(this.studentEditForm.valid){
    this.studentService.updateUser(this.studentEditForm.value);
    this.router.navigate(['/show']);}
    
    else {
      this.formSubmitted = true;
    
    }


  }
}
