import {Component, OnInit} from '@angular/core';
import {StudentDashboardService} from "../../../services/student-dashboard.service";
import {UserAuthData} from "../../../interfaces/user-auth-data";
import {SignInService} from "../../../services/sign-in.service";


export interface BookHistoryData {
  barcode: number;
  creationDate: string;
  isbn: number;
  returnDate: string;
  status: string;
  studentId: string;
  title: string;
  author: string;
}


@Component({
  selector: 'app-student-dashboard-book-history',
  templateUrl: './student-dashboard-book-history.component.html',
  styleUrls: ['./student-dashboard-book-history.component.scss']
})
export class StudentDashboardBookHistoryComponent implements OnInit {
  bookHistory!: BookHistoryData[];
  userData: UserAuthData = this.signInService.userValue as UserAuthData;

  constructor(private bookHistoryService: StudentDashboardService, private signInService: SignInService) {
  }

  ngOnInit(): void {
    this.bookHistoryService.getBookHistory(this.userData.memberId).subscribe((val: BookHistoryData[]) => {
      this.bookHistory = val;
    });

  }

}
