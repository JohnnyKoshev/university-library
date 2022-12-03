import {Component, ElementRef, OnInit} from '@angular/core';
import {DashboardFunctions} from "../../../utility-functions/dashboard-functions";
import {SignInService} from "../../../services/sign-in.service";
import {UserAuthData} from "../../../interfaces/user-auth-data";

@Component({
  selector: 'app-librarian-dashboard',
  templateUrl: './librarian-dashboard.component.html',
  styleUrls: ['./librarian-dashboard.component.scss']
})
export class LibrarianDashboardComponent implements OnInit {
  mainOptions: HTMLCollection = this.elementRef.nativeElement.getElementsByClassName('menu-element');
  subOptions: HTMLCollection = this.elementRef.nativeElement.getElementsByClassName('menu-option');
  userData: UserAuthData = this.signInService.userValue as UserAuthData;

  searchOnClick(searchElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(searchElement, this.subOptions);
  }

  addOnClick(addElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(addElement, this.subOptions);
  }

  returnOnClick(returnElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(returnElement, this.subOptions);
  }

  booksOnClick(bookElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(bookElement, this.mainOptions);
  }

  dashboardOnClick(dashboardElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(dashboardElement, this.mainOptions);
  }

  fineOnClick(fineElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(fineElement, this.mainOptions);
  }

  requestsOnClick(requestsElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(requestsElement, this.mainOptions);
  }

  studentsOnClick(studentsElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(studentsElement, this.mainOptions);
  }

  logout() {
    this.signInService.logout();
  }

  constructor(private elementRef: ElementRef, private signInService: SignInService) {
  }

  ngOnInit(): void {
  }

}
