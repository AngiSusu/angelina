import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { GridsterModule } from 'angular-gridster2';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatDividerModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatRadioModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatMenuModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { GoalsComponent } from './goals/goals.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { WelcomeComponent } from './common/welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    ProjectsComponent,
    GoalsComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    MatDividerModule,MatIconModule,
    BrowserAnimationsModule, MatInputModule,MatSelectModule,
    MatFormFieldModule, MatButtonModule, MatRadioModule, MatCheckboxModule, MatCardModule,
    DragDropModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
