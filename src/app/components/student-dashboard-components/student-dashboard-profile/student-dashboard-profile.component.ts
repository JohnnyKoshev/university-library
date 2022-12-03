import { Component, OnInit } from '@angular/core';
import {UserAuthData} from "../../../interfaces/user-auth-data";
import {SignInService} from "../../../services/sign-in.service";

@Component({
  selector: 'app-student-dashboard-profile',
  templateUrl: './student-dashboard-profile.component.html',
  styleUrls: ['./student-dashboard-profile.component.scss']
})
export class StudentDashboardProfileComponent implements OnInit {
  userData: UserAuthData = this.signInService.userValue as UserAuthData;

  constructor(private signInService: SignInService) { }

  ngOnInit(): void {
  }

}
