import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DashboardFunctions} from "../../utility-functions/dashboard-functions";
import {SignInService} from "../../services/sign-in.service";
import {UserAuthData} from "../../interfaces/user-auth-data";

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.scss']
})
export class StudentMenuComponent implements OnInit {
  @Input() mainOptions: HTMLCollection = this.elementRef.nativeElement.getElementsByClassName('menu-element');
  @Output() mainOptionsChange = new EventEmitter<HTMLCollection>();
  userData: UserAuthData = this.signInService.userValue as UserAuthData;


  bookHistoryOnClick(bookHistoryElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(bookHistoryElement, [this.mainOptions]);
  }

  fineOnClick(fineElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(fineElement, [this.mainOptions]);
  }

  activeBooksOnClick(activeBooksElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(activeBooksElement, [this.mainOptions]);
  }

  profileOnClick(profileElement: HTMLAnchorElement) {
    DashboardFunctions.optionOnClick(profileElement, [this.mainOptions]);
  }

  logout() {
    this.signInService.logout();
  }

  constructor(private elementRef: ElementRef, private signInService: SignInService) {
  }

  ngOnInit(): void {
  }


}
