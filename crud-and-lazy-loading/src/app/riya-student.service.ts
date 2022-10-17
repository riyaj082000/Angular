import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './riya-student';

@Injectable({
  providedIn: 'root'
})
export class RiyaStudentService {
  private studentList: Student[] = [{
    id: 1,
    firstname: 'Sneha',
lastname:'Gulati',
    email: 'Sneha@gmail.com',
    mobile: '8855221144',
    gender: 'Female'
  },{ id: 2,
    firstname: 'Rohit',
    lastname:'sharma',
    email: 'rohit@gmail.com',
    mobile: '8851856234',
    gender: 'Male'
  },
  { id: 3,
    firstname: 'Mansi',
    lastname:'Gupta',
    email: 'mansi@gmail.com',
    mobile: '9685856234',
    gender: 'Female'
  },
  ];

  constructor(private router: Router) { }
  getStudent() {
    return this.studentList
  }
  removeUser(id: number) {
    this.studentList = this.studentList.filter(x => x.id != id);
  }
  updateUser(student: Student) {
    const userIndex = this.studentList.findIndex(x => x.id == student.id);
    if (userIndex != null && userIndex != undefined) {
      this.studentList[userIndex] = student;
    }
  }
  getUsersByID(id: number) {
    return this.studentList.find(x => x.id == id)
  }
}
