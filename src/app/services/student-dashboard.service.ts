import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentDashboardService {

  getActiveBooks(studentId: string) {
    const options = {params: new HttpParams().set('studentId', studentId)}
    return this.http.get<any>(environment.apiUrl + `api/v1/reservation/student/active`, options);
  }

  getBookHistory(studentId: string) {
    const options = {params: new HttpParams().set('studentId', studentId)}
    return this.http.get<any>(environment.apiUrl + `api/v1/reservation/student/history`, options);
  }

  getFines(studentId: string) {
    const options = {params: new HttpParams().set('studentId', studentId)}
    return this.http.get<any>(environment.apiUrl + `api/v1/fine/one`, options);
  }

  constructor(private http: HttpClient) {
  }
}
