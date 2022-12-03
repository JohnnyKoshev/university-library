import {Component, OnInit} from '@angular/core';
import {StudentDashboardService} from "../../../services/student-dashboard.service";
import {SignInService} from "../../../services/sign-in.service";

@Component({
  selector: 'app-student-dashboard-active-books',
  templateUrl: './student-dashboard-active-books.component.html',
  styleUrls: ['./student-dashboard-active-books.component.scss']
})
export class StudentDashboardActiveBooksComponent implements OnInit {
  activeBooks: any;



  constructor(private activeBooksService: StudentDashboardService, private signInService: SignInService) {
  }

  ngOnInit(): void {
    this.activeBooksService.getActiveBooks(this.signInService.userValue!.memberId).subscribe(val => {
      this.activeBooks = val;
      console.log(this.activeBooks);
    });
  }

}
