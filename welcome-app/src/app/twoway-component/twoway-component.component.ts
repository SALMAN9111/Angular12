import { Component, OnInit } from '@angular/core';
// import { ModuleA } from '../ModuleA/ModuleA';

@Component({
  selector: 'app-twoway-component',
  templateUrl: './twoway-component.component.html',
  styleUrls: ['./twoway-component.component.css']
})
export class TwowayComponentComponent implements OnInit {
  firstName: String;
  lastName: String;

  constructor() {
    this.firstName = "salman ";
    this.lastName = "burkaposh ";
  }

  firstNameChange(firstName: any) {
    console.log(firstName)
    this.firstName = firstName.toUpperCase();
    console.log(firstName)
  }

  lastNameChange(lastName: any) {
    this.lastName = lastName.toUpperCase();
  }

  ngOnInit(): void {
  }

}
