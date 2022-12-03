import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StudentMainComponent} from './components/student-main-components/student-main/student-main.component';
import {
  StudentMainHeaderComponent
} from './components/student-main-components/student-main-header/student-main-header.component';
import {MatCardModule} from "@angular/material/card";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgImageSliderModule} from 'ng-image-slider';
import {
  StudentMainAskComponent
} from './components/student-main-components/student-main-ask/student-main-ask.component';
import {
  StudentMainFooterComponent
} from './components/student-main-components/student-main-footer/student-main-footer.component';
import {StudentMenuComponent} from './components/student-menu/student-menu.component';
import {
  StudentDashboardComponent
} from './components/student-dashboard-components/student-dashboard/student-dashboard.component';
import {
  LibrarianDashboardComponent
} from './components/librarian-dashboard-components/librarian-dashboard/librarian-dashboard.component';
import {
  AdminDashboardComponent
} from './components/admin-dashboard-components/admin-dashboard/admin-dashboard.component';
import {BasicAuthInterceptor} from "./interceptors/basic-auth.interceptor";
import {ErrorInterceptor} from "./interceptors/error.interceptor";
import {
  StudentDashboardProfileComponent
} from './components/student-dashboard-components/student-dashboard-profile/student-dashboard-profile.component';
import {
  StudentDashboardActiveBooksComponent
} from './components/student-dashboard-components/student-dashboard-active-books/student-dashboard-active-books.component';
import {
  StudentDashboardBookHistoryComponent
} from './components/student-dashboard-components/student-dashboard-book-history/student-dashboard-book-history.component';
import {
  StudentDashboardFineComponent
} from './components/student-dashboard-components/student-dashboard-fine/student-dashboard-fine.component';
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    StudentMainComponent,
    StudentMainHeaderComponent,
    StudentMainAskComponent,
    StudentMainFooterComponent,
    StudentMenuComponent,
    StudentDashboardComponent,
    LibrarianDashboardComponent,
    AdminDashboardComponent,
    StudentDashboardProfileComponent,
    StudentDashboardActiveBooksComponent,
    StudentDashboardBookHistoryComponent,
    StudentDashboardFineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    NgImageSliderModule,
    HttpClientModule,
    MatSelectModule,
    NgbModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
