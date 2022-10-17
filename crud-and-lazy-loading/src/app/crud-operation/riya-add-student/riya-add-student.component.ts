import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../riya-student';
import { RiyaStudentService } from '../../riya-student.service';

@Component({
  selector: 'app-riya-add-student',
  templateUrl: './riya-add-student.component.html',
  styleUrls: ['./riya-add-student.component.css']
})
export class RiyaAddStudentComponent implements OnInit {
  StudentForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(private studentService: RiyaStudentService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.StudentForm = this.formBuilder.group({
      id: 0,
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    })

  }
  get name() {
    return this.StudentForm.get('name');
  }
  
  student: Student[] = [];

  ngOnInit(): void {


    this.student = this.studentService.getStudent();

  }
  onSubmit() {
    if (this.StudentForm.valid) {

      var item = this.studentService.getStudent();
      console.log(this.StudentForm.value);
      let a = this.StudentForm.value;
      this.student.push(a);
      this.router.navigate(['/show']);
    } else {
      this.formSubmitted = true;

    }


  }

}
