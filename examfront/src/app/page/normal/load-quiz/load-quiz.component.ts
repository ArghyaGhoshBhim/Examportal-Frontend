import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  cId:any;
  quizzes:any=[]
  constructor(
    private route:ActivatedRoute,
    private quizService:QuizService
  ) { }

  ngOnInit(): void {
    // this.cId =this.route.snapshot.params['cId'];
    this.route.params.subscribe(params=>{
      this.cId=params['cId'];
      this.loadQuizes(this.cId);
    })
    
  }

  loadQuizes(cId:any){
    if(cId==0){
      this.quizService.getActiveQuizes().subscribe(
        data=>{
          this.quizzes=data;
          console.log(this.quizzes)
        },
        error=>{
          console.log(error)
        }
      )
    }else{
      console.log("load sjhjsnjkh ksjhkjshkjsh ")
      this.quizzes=[]
      this.quizService.getActiveQuizOfCategory(cId).subscribe(data=>{
        this.quizzes=data;
        
      }, 
      error=>{
        console.log(error);
      }
      )
    }
  }
}
