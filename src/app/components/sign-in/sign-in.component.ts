import { Component, OnInit } from '@angular/core';
import {SignInService} from "../../services/sign-in.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})


export class SignInComponent implements OnInit {
  onClick(credentials: {ID: string, password: string},e: Event){
    e.preventDefault();
    this.signInService.validateSignIn(credentials);
    console.log('test', credentials);
  }

  constructor(private signInService: SignInService) { }

  ngOnInit(): void {
  }

}
