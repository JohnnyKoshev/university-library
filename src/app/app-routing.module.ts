import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {StudentMainComponent} from "./components/student-main/student-main.component";
import {StudentMainAskComponent} from "./components/student-main-ask/student-main-ask.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
