import {Component, ElementRef, OnInit} from '@angular/core';
import {DashboardFunctions} from "../../utility-functions/dashboard-functions";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  mainOptions: HTMLCollection = this.elementRef.nativeElement.getElementsByClassName('menu-element');
  subOptions: HTMLCollection = this.elementRef.nativeElement.getElementsByClassName('menu-option');

  deleteLibrarianOnClick(searchElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(searchElement, this.subOptions);
  }

  addLibrarianOnClick(addElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(addElement, this.subOptions);
  }

  deleteStudentOnClick(searchElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(searchElement, this.subOptions);
  }

  addStudentOnClick(addElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(addElement, this.subOptions);
  }


  librariansOnClick(bookElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(bookElement, this.mainOptions);
  }

  dashboardOnClick(dashboardElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(dashboardElement, this.mainOptions);
  }

  studentsOnClick(studentsElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(studentsElement, this.mainOptions);
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

}
