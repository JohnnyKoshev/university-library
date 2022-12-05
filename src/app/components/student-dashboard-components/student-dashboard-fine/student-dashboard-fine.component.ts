import {Component, OnInit, ViewChild} from '@angular/core';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {StudentDashboardService} from "../../../services/student-dashboard.service";
import {UserAuthData} from "../../../interfaces/user-auth-data";
import {SignInService} from "../../../services/sign-in.service";

export interface FinesData {
  amount: number;
  barcode: number;
  isbn: number;
  reason: string;
  studentId: string;
  title: string;
}


@Component({
  selector: 'app-student-dashboard-fine',
  templateUrl: './student-dashboard-fine.component.html',
  styleUrls: ['./student-dashboard-fine.component.scss']
})

export class StudentDashboardFineComponent implements OnInit {
  userData: UserAuthData = this.signInService.userValue as UserAuthData;
  finesData: FinesData[] = [];
  displayedColumns: string[] = ['Title','ISBN', 'Reason', 'Barcode', 'Amount'];
  dataSource: MatTableDataSource<FinesData> = new MatTableDataSource(this.finesData);
  @ViewChild('dropdownBtn') dropdownTitle!: HTMLButtonElement;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(private _liveAnnouncer: LiveAnnouncer, private finesService: StudentDashboardService, private signInService: SignInService) {
  }


  ngOnInit(): void {
    this.addEmptyRows();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.finesService.getFines(this.userData.memberId).subscribe(
      {
        next: (val: FinesData[]) => {
          this.finesData = val;
          console.log(this.finesData);
          this.dataSource = new MatTableDataSource(this.finesData);
          this.table.renderRows();
          this.addEmptyRows();
        }
      })
  }

  private addEmptyRows() {
    const length = 30 - this.finesData.length;
    for (let i = 0; i < length; i++) {
      this.finesData.push(Object.create(null));
    }
    this.dataSource = new MatTableDataSource(this.finesData);
  }


  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  dropdownNameChange(dropdownTitle: HTMLButtonElement, dropdownItem: HTMLAnchorElement) {
    [dropdownTitle.innerText, dropdownItem.innerText] = [dropdownItem.innerText, dropdownTitle.innerText];
  }
}
