import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './component/home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { AuthIterceptor, AuthIterceptorProvider } from './service/auth.interceptor';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { NormalDashboardComponent } from './page/normal/normal-dashboard/normal-dashboard.component';
import { ProfileComponent } from './page/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './page/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './page/admin/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { ViewCategoriesComponent } from './page/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './page/admin/add-categories/add-categories.component';
import { ViewQuizzesComponent } from './page/admin/view-quizzes/view-quizzes.component';
import { AddQuizzesComponent } from './page/admin/add-quizzes/add-quizzes.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UpdateQuizzesComponent } from './page/admin/update-quizzes/update-quizzes.component';
import { ViewQuizQuestionsComponent } from './page/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './page/admin/add-question/add-question.component';
import { SidebaUserComponent } from './page/normal/sideba-user/sideba-user.component';
import { LoadQuizComponent } from './page/normal/load-quiz/load-quiz.component';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    NormalDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoriesComponent,
    ViewQuizzesComponent,
    AddQuizzesComponent,
    UpdateQuizzesComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    SidebaUserComponent,
    LoadQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatSlideToggleModule,
    // CKEditorModule

  ],
  providers: [AuthIterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
