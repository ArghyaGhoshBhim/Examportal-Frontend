import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/service/questions.service';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  qId;
  qTitle;
  questions:any=[]
  constructor(
    private route:ActivatedRoute,
    private questionsService:QuestionsService
  ) {
    this.qId=route.snapshot.params['qId'];
    this.qTitle=route.snapshot.params['title'];
    console.log(this.qId, this.qTitle);
   }

  ngOnInit(): void {
    this.loadQuizQuestions();
    
  }


// Delete all question
  deleteQuestion(quesId:any){
    console.log(quesId)
    this.questionsService.deleteQuestion(quesId).subscribe(
      data=>{
        console.log("deleted succesfully");
        this.loadQuizQuestions();
      },
      error=>{
        console.log(error);
      }
    )
  }

  // Load all quiz question
  loadQuizQuestions(){
    this.questionsService.getQuestionsOfQuiz(this.qId).subscribe(
      data=>{
        this.questions=data;
        console.log(this.questions)
      },
      error=>{
        console.log(error);
      }
    )
  }

}
