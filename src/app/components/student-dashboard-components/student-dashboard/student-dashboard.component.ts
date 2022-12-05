import {Component, ElementRef, OnInit} from '@angular/core';
import {DashboardFunctions} from "../../../utility-functions/dashboard-functions";

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  mainOptions: HTMLCollection = this.elementRef.nativeElement.getElementsByClassName('menu-element');

  isTriggered(searchedEl: 'Profile' | 'Active Books' | 'Book History' | 'Fine', options: HTMLCollection[]): string {
    return DashboardFunctions.isTriggered(searchedEl, options);
  }

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit(): void {
  }

}
