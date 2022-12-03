import {Component, OnInit} from '@angular/core';
import {SignInService} from "../../services/sign-in.service";
import {MatButton} from "@angular/material/button";
import {UserAuthData} from "../../interfaces/user-auth-data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})


export class SignInComponent implements OnInit {
  onClick(credentials: { memberId: string, password: string }, e: Event) {
    e.preventDefault();
    if (credentials.memberId && credentials.password) {
      this.signInService.login(credentials).subscribe({
        next: (userAuthData: UserAuthData) => {
          if (userAuthData.role === 'ADMIN') {
            this.router.navigateByUrl('admin/dashboard');
          } else if (userAuthData.role === 'LIBRARIAN') {
            this.router.navigateByUrl('librarian/dashboard');
          } else if (userAuthData.role === 'STUDENT') {
            this.router.navigateByUrl('student/main');
          }
        },
        error: function (err) {
          const errStatus = err.split(':')[3].trim().split(' ')[0];
          if (errStatus == '401') {
            console.log('wrong password');
          } else if (errStatus == '400') {
            console.log('wrong id');
          }
        }
      });

    }
  }

  processSignIn(credentials: { memberId: string, password: string }, btnEl: MatButton) {
    if (credentials.memberId && credentials.password)
      btnEl.focus();
  }

  constructor(private signInService: SignInService, private router: Router) {
  }

  ngOnInit(): void {
  }
}
