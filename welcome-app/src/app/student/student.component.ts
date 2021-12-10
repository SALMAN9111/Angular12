import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IStudent } from './IStudent';

@Component({
  selector: 'monocept-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  maxHeight = 100;
  maxWidth = 100;
  hide = true
  student: IStudent;
  students: IStudent[];
  public show = false;

  constructor() {
    this.students = [{ cgpa: 0, name: " ", location: " ", profilePic: " " }];
    this.student = { cgpa: 0, name: " ", location: " ", profilePic: " " };

  }

  dsiplaySingleStudent(e: any) {
    this.student = { cgpa: 7, name: "Salman", location: "Hyderadab", profilePic: "assets/img.jpg" }

    console.log(e);
    alert("event fired")
  }
  dsiplayStudents(e: any) {
    // this.show = true;
    this.students = [
      { cgpa: 7, name: "Salman", location: "Hyderadab", profilePic: "assets/img.jpg" },
      { cgpa: 7, name: "virat", location: "Hyderadab", profilePic: "assets/img.jpg" }
    ]
    console.log(e);
  }

  ngOnInit(): void {
  }

}
