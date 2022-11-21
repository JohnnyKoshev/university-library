import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StudentMainComponent } from './components/student-main/student-main.component';
import { StudentMainHeaderComponent } from './components/student-main-header/student-main-header.component';
import {MatCardModule} from "@angular/material/card";

import { NgImageSliderModule } from 'ng-image-slider';
import { StudentMainAskComponent } from './components/student-main-ask/student-main-ask.component';
import { StudentMainFooterComponent } from './components/student-main-footer/student-main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    StudentMainComponent,
    StudentMainHeaderComponent,
    StudentMainAskComponent,
    StudentMainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    NgbModule,
    MatCardModule,
    NgImageSliderModule
    // CarouselModule,
    // AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
