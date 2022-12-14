import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {SignInService} from "../services/sign-in.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private signInService: SignInService){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        this.signInService.logout();
      }
      const error = err.message || err.statusText;
      return throwError(error);
    }))
  }
}
