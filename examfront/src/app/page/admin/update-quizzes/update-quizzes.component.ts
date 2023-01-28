import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/models/Quiz.model';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-update-quizzes',
  templateUrl: './update-quizzes.component.html',
  styleUrls: ['./update-quizzes.component.css']
})
export class UpdateQuizzesComponent implements OnInit {

  qId=0;
  categories:any=[]
  form!: FormGroup;
  // quiz={
  //   qId:0,
  //   title:"",
  //   description:"",
  //   maxMarks:0,
  //   active:false,
  //   category:null
  // }
  

  quiz:any;
  constructor(private build:FormBuilder,private categoryService:CategoryService, private quizService:QuizService, private route:ActivatedRoute, private router:Router) {
    this.qId=route.snapshot.params['qId'];
    console.log(this.qId);
    this.findQuizById(this.qId);
    // console.log(this.quiz)
   }

  ngOnInit(): void {
    this.loadCategories()
    this.form=this.build.group({
      title:["", Validators.required],
      description:["", Validators.required],
      maxMarks:["", Validators.required],
      numberOfQuestion:["", Validators.required],
      active:[false, Validators.required],
      category:[null, Validators.required],
    })

     
  }
// Load all categories
  loadCategories(){
    this.categoryService.getCategory().subscribe(
      data=>{
        this.categories=data;
        
      },
      error=>{
        console.log(error);
      }
    )
  }


  // update category
  updateQuiz(){
  //  console.log(this.form.value);
   let newQuiz=new Quiz();
   newQuiz.title=this.form.value['title'];
   newQuiz.description=this.form.value['description'];
   newQuiz.numberOfQuestion=this.form.value['numberOfQuestion'];
   newQuiz.active=this.form.value['active'];
   newQuiz.category=this.form.value['category'];
   newQuiz.qId=this.qId;
  //  console.log(newQuiz);
  this.quizService.updateQuiz(newQuiz).subscribe(
    data=>{
      this.router.navigate(["/admin/view-quizzes"]);
    },
    error=>{
      console.log(error);
    }
  )
  }


  // Find category by Id
  findQuizById(qId:any){
    this.quizService.getQuizById(qId).subscribe(
      data=>{
        this.quiz=data;
        console.log(data)
      },error=>{
        console.log(error);
      }
    )
  }


}
