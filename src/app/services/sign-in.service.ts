import {Injectable} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";


type User = {
  memberId: string;
  password: string;
  authdata?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  credentials: User | null = null;
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  login(credentials: User) {
    this.credentials = credentials;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + window.btoa(`${this.credentials?.memberId}:${this.credentials?.password}`)
      })
    };

    return this.http.post<any>(environment.apiUrl+'api/v1/login', this.credentials, httpOptions)
      .pipe(
        map(user => {
          user.authdata = window.btoa(`${this.credentials?.memberId}:${this.credentials?.password}`);
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        }));
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/auth']);
  }

  public get userValue(): User | null {
    return this.userSubject.value;
  }

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }
}
