import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {StudentMainComponent} from "./components/student-main/student-main.component";
import {StudentMainAskComponent} from "./components/student-main-ask/student-main-ask.component";
import {StudentDashboardComponent} from "./components/student-dashboard/student-dashboard.component";
import {LibrarianDashboardComponent} from "./components/librarian-dashboard/librarian-dashboard.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  {
    path: 'auth',
    component: SignInComponent
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'student/main',
    component: StudentMainComponent
  },
  {
    path: 'student/ask',
    component: StudentMainAskComponent
  },
  {
    path: 'student/dashboard',
    component: StudentDashboardComponent
  },
  {
    path: 'librarian/dashboard',
    component: LibrarianDashboardComponent
  },
  {
    path: 'librarian',
    redirectTo: 'librarian/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'admin',
    redirectTo: 'admin/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
