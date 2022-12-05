import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {StudentDashboardService} from "../../../services/student-dashboard.service";
import {SignInService} from "../../../services/sign-in.service";

export interface ActiveBooksData {
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
  selector: 'app-student-dashboard-active-books',
  templateUrl: './student-dashboard-active-books.component.html',
  styleUrls: ['./student-dashboard-active-books.component.scss']
})
export class StudentDashboardActiveBooksComponent implements OnInit {
  activeBooks!: ActiveBooksData[];
  @ViewChildren('activeBooks') things!: QueryList<ElementRef>;

  constructor(private activeBooksService: StudentDashboardService, private signInService: SignInService) {
  }

  ngOnInit(): void {
    this.activeBooksService.getActiveBooks(this.signInService.userValue!.memberId).subscribe(val => {
      this.activeBooks = val;
    });
  }

  ngAfterViewInit() {
    this.things.changes.subscribe(t => {
      this.colorBookStatus();
    })
  }

  private colorBookStatus() {
    this.things.forEach(item => {
      const bookStatusEl = item.nativeElement.firstChild.childNodes[1].childNodes[1].childNodes[0];
      if (bookStatusEl.innerText === 'PENDING') {
        bookStatusEl.style.color = '#14FF00';
        bookStatusEl.innerText = 'Active';
      } else {
        bookStatusEl.style.color = '#FF0000';
        bookStatusEl.innerText = 'Overdue';
      }
    })
  }
}
