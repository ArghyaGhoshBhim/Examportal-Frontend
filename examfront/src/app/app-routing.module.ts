import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AdminGuard } from './guard/admin.guard';
import { NormalGuard } from './guard/normal.guard';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';
import { NormalDashboardComponent } from './page/normal/normal-dashboard/normal-dashboard.component';
import { RegisterComponent } from './page/register/register.component';
import { ProfileComponent } from './page/profile/profile.component';
import { WelcomeComponent } from './page/admin/welcome/welcome.component';
import { AddCategoriesComponent } from './page/admin/add-categories/add-categories.component';
import { ViewCategoriesComponent } from './page/admin/view-categories/view-categories.component';
import { ViewQuizzesComponent } from './page/admin/view-quizzes/view-quizzes.component';
import { AddQuizzesComponent } from './page/admin/add-quizzes/add-quizzes.component';
import { UpdateQuizzesComponent } from './page/admin/update-quizzes/update-quizzes.component';
import { ViewQuizQuestionsComponent } from './page/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './page/admin/add-question/add-question.component';
import { LoadQuizComponent } from './page/normal/load-quiz/load-quiz.component';

const routes: Routes = [
  
  {path:'', redirectTo:"home", pathMatch:"full"},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent},
  {
    path:"admin", 
    component:DashboardComponent, 
    canActivate:[AdminGuard],

    children:[
      {
        path:"",
        component:WelcomeComponent
      

      },
      {
        path:"profile",
        component:ProfileComponent
      },
      {
        path:"welcome",
        component:WelcomeComponent
      },
      {
        path:"view-categories",
        component:ViewCategoriesComponent
      },
      {
        path:"add-categories",
        component:AddCategoriesComponent
      },
      {
        path:"view-quizzes",
        component:ViewQuizzesComponent
      },
      {
        path:"add-quizzes",
        component:AddQuizzesComponent
      },
      {
        path:"quiz/:qId",
        component:UpdateQuizzesComponent
      },
      {
        path:"view-quiz-questions/:qId/:title",
        component:ViewQuizQuestionsComponent
      },
      {
        path:"add-questions/:qId/:qTitle",
        component:AddQuestionComponent
      }
    ]

},
  {path:"normal", 
  component:NormalDashboardComponent, 
  canActivate:[NormalGuard],
  children:[
    {
      path:"load-quiz/:cId",
      component:LoadQuizComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
