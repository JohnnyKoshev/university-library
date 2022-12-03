import {Component, ElementRef, OnInit} from '@angular/core';
import {DashboardFunctions} from "../../../utility-functions/dashboard-functions";
import {SignInService} from "../../../services/sign-in.service";
import {UserAuthData} from "../../../interfaces/user-auth-data";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  mainOptions: HTMLCollection = this.elementRef.nativeElement.getElementsByClassName('menu-element');
  subOptions: HTMLCollection = this.elementRef.nativeElement.getElementsByClassName('menu-option');
  userData: UserAuthData  = this.signInService.userValue as UserAuthData;


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

  logout(){
    this.signInService.logout();
  }

  constructor(private elementRef: ElementRef, private signInService: SignInService) { }

  ngOnInit(): void {
  }

}
