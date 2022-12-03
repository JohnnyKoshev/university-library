import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {StudentMainComponent} from "./components/student-main-components/student-main/student-main.component";
import {StudentMainAskComponent} from "./components/student-main-components/student-main-ask/student-main-ask.component";
import {StudentDashboardComponent} from "./components/student-dashboard-components/student-dashboard/student-dashboard.component";
import {LibrarianDashboardComponent} from "./components/librarian-dashboard-components/librarian-dashboard/librarian-dashboard.component";
import {AdminDashboardComponent} from "./components/admin-dashboard-components/admin-dashboard/admin-dashboard.component";
import {AuthGuard} from "./auth.guard";

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
    component: StudentMainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'student/ask',
    component: StudentMainAskComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'student/dashboard',
    component: StudentDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'librarian/dashboard',
    component: LibrarianDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'librarian',
    redirectTo: 'librarian/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard]
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
