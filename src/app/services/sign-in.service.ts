import {Injectable} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {HttpClient} from '@angular/common/http';

type Credentials = { ID: string, password: string };

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  credentials: Credentials | null = null;
  apiUrl: string = "https://iut-library.herokuapp.com/login";


  validateSignIn(credentials: Credentials) {
    this.credentials = credentials;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${this.credentials?.ID}:${this.credentials?.password}`)
      })
    };

    return this.http.get(this.apiUrl, httpOptions).subscribe((val) => {
      console.log(val);
    });
  }


  constructor(private http: HttpClient) {
  }
}
