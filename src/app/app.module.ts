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
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { LibrarianDashboardMainComponent } from './components/librarian-dashboard-components/librarian-dashboard-main/librarian-dashboard-main.component';
import { LibrarianDashboardBooksComponent } from './components/librarian-dashboard-components/librarian-dashboard-books-components/librarian-dashboard-books/librarian-dashboard-books.component';
import { LibrarianDashboardStudentsComponent } from './components/librarian-dashboard-components/librarian-dashboard-students/librarian-dashboard-students.component';
import { LibrarianDashboardRequestsComponent } from './components/librarian-dashboard-components/librarian-dashboard-requests/librarian-dashboard-requests.component';
import { LibrarianDashboardFineComponent } from './components/librarian-dashboard-components/librarian-dashboard-fine/librarian-dashboard-fine.component';
import { AdminDashboardMainComponent } from './components/admin-dashboard-components/admin-dashboard-main/admin-dashboard-main.component';
import { AdminDashboardLibrariansComponent } from './components/admin-dashboard-components/admin-dashboard-librarians-components/admin-dashboard-librarians/admin-dashboard-librarians.component';
import { AdminDashboardStudentsComponent } from './components/admin-dashboard-components/admin-dashboard-students-components/admin-dashboard-students/admin-dashboard-students.component';
import { AdminDashboardLibrariansAddLibrarianComponent } from './components/admin-dashboard-components/admin-dashboard-librarians-components/admin-dashboard-librarians-add-librarian/admin-dashboard-librarians-add-librarian.component';
import { AdminDashboardLibrariansDeleteLibrarianComponent } from './components/admin-dashboard-components/admin-dashboard-librarians-components/admin-dashboard-librarians-delete-librarian/admin-dashboard-librarians-delete-librarian.component';
import { AdminDashboardStudentsAddStudentComponent } from './components/admin-dashboard-components/admin-dashboard-students-components/admin-dashboard-students-add-student/admin-dashboard-students-add-student.component';
import { AdminDashboardStudentsDeleteStudentComponent } from './components/admin-dashboard-components/admin-dashboard-students-components/admin-dashboard-students-delete-student/admin-dashboard-students-delete-student.component';
import { LibrarianDashboardBooksSearchBookComponent } from './components/librarian-dashboard-components/librarian-dashboard-books-components/librarian-dashboard-books-search-book/librarian-dashboard-books-search-book.component';
import { LibrarianDashboardBooksAddBookComponent } from './components/librarian-dashboard-components/librarian-dashboard-books-components/librarian-dashboard-books-add-book/librarian-dashboard-books-add-book.component';
import { LibrarianDashboardBooksReturnBookComponent } from './components/librarian-dashboard-components/librarian-dashboard-books-components/librarian-dashboard-books-return-book/librarian-dashboard-books-return-book.component';


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
    StudentDashboardFineComponent,
    LibrarianDashboardMainComponent,
    LibrarianDashboardBooksComponent,
    LibrarianDashboardStudentsComponent,
    LibrarianDashboardRequestsComponent,
    LibrarianDashboardFineComponent,
    AdminDashboardMainComponent,
    AdminDashboardLibrariansComponent,
    AdminDashboardStudentsComponent,
    AdminDashboardLibrariansAddLibrarianComponent,
    AdminDashboardLibrariansDeleteLibrarianComponent,
    AdminDashboardStudentsAddStudentComponent,
    AdminDashboardStudentsDeleteStudentComponent,
    LibrarianDashboardBooksSearchBookComponent,
    LibrarianDashboardBooksAddBookComponent,
    LibrarianDashboardBooksReturnBookComponent
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
    NgbModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
