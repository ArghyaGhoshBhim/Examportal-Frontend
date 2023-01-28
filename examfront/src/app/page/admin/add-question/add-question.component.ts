import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/service/questions.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  
  qId;
  qTitle;

  option1:any;
  option2:any;
  option3:any;
  option4:any;
  question={
    quiz:{qId:0},
    content:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    answer:""
  }

  form:FormGroup;
  constructor(
    private route:ActivatedRoute, 
    private builder:FormBuilder, 
    private questionService:QuestionsService,
    private router:Router
    ) {
    this.qId=route.snapshot.params["qId"];
    this.qTitle=route.snapshot.params["qTitle"];
    this.form=builder.group({
      content:["", Validators.required],
      option1:["", Validators.required],
      option2:["", Validators.required],
      option3:["", Validators.required],
      option4:["", Validators.required],
      answer:["", Validators.required],
    })
   }

  ngOnInit(): void {
    
    console.log(this.qId)
    this.question.quiz['qId']=this.qId;
    console.log(this.question)
  }

  addQuestion(){
    console.log(this.form.value)
    this.question.content=this.form.value['content'];
    this.question.option1=this.form.value['option1'];
    this.question.option2=this.form.value['option2'];
    this.question.option3=this.form.value['option3'];
    this.question.option4=this.form.value['option4'];
    this.question.answer=this.form.value['answer'];
    this.questionService.addQuestionInQuiz(this.question).subscribe(
      data=>{
        console.log("this jhfjhf");
        this.router.navigate(["/admin/view-quiz-questions/"+this.qId+"/"+this.qTitle])
      },
      error=>{
        console.log(error)
      }
    )
  }

}
