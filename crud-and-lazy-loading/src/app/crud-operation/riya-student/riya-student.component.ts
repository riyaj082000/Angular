import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../riya-student';
import { RiyaStudentService } from '../../riya-student.service';

@Component({
  selector: 'app-riya-student',
  templateUrl: './riya-student.component.html',
  styleUrls: ['./riya-student.component.css']
})
export class RiyaStudentComponent implements OnInit {

  studentList: Student[] =[];


  constructor(private studentService:RiyaStudentService, private router: Router,) { }

  ngOnInit(): void {
   
    this.studentList = this.studentService.getStudent();
  }
 
 
remove(id: number) {
  this. studentService.removeUser(id);
  this.studentList = this.studentService.getStudent();
}

}
