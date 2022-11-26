import {Component, OnInit} from '@angular/core';
import {SignInService} from "../../services/sign-in.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})


export class SignInComponent implements OnInit {

  onClick(credentials: { memberId: string, password: string }, e: Event) {
    e.preventDefault();
    if (credentials.memberId && credentials.password) {
      this.signInService.login(credentials);
      console.log('test', credentials);
    }
  }

  processSignIn(credentials: { ID: string, password: string }, btnEl: MatButton) {
    if (credentials.ID && credentials.password)
      btnEl.focus();
  }

  constructor(private signInService: SignInService) {
  }

  ngOnInit(): void {
  }

}
