import {Component, ElementRef, OnInit} from '@angular/core';
import {DashboardFunctions} from "../../utility-functions/dashboard-functions";

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.scss']
})
export class StudentMenuComponent implements OnInit {
  mainOptions: HTMLCollection = this.elementRef.nativeElement.getElementsByClassName('menu-element');

  bookHistoryOnClick(bookHistoryElement: HTMLAnchorElement){
    DashboardFunctions.optionOnClick(bookHistoryElement, this.mainOptions);
  }

  fineOnClick(fineElement: HTMLAnchorElement){
    DashboardFunctions.optionOnClick(fineElement, this.mainOptions);
  }

  activeBooksOnClick(activeBooksElement: HTMLAnchorElement){
    DashboardFunctions.optionOnClick(activeBooksElement, this.mainOptions);
  }

  profileOnClick(profileElement: HTMLAnchorElement){
    DashboardFunctions.optionOnClick(profileElement, this.mainOptions);
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }


}
