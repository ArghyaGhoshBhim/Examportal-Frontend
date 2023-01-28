import { Component, OnInit } from '@angular/core';

import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes:any=[]
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.loadQuizes();
    
  }

  loadQuizes(){
    this.quizService.loadAllQuizzes().subscribe(
      data=>{
        this.quizzes=data;
        console.log(this.quizzes);
      }, 
      error=>{
        Swal.fire(
          'Error !!',
           'Error in loading data',
         'error'
        )
      }
    )
  }



  // Delete quiz
  deleteQuiz(cId:number){
    this.quizService.deleteQuiz(cId).subscribe(
      data=>{
        this.loadQuizes();
      },
      error=>{
        console.log(error);
      }
    )
  }



  



}
