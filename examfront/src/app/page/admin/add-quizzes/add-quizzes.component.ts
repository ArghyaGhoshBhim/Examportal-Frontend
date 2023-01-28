import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quizzes',
  templateUrl: './add-quizzes.component.html',
  styleUrls: ['./add-quizzes.component.css']
})
export class AddQuizzesComponent implements OnInit {

  categories:any=[]
  form:FormGroup;
  constructor(private categoryService:CategoryService, private builder:FormBuilder, private quizService:QuizService, private router:Router) { 
    this.form=this.builder.group({
      title:["", Validators.required],
      description:["", Validators.required],
      maxMarks:["", Validators.required],
      numberOfQuestion:["", Validators.required],
      active:[false, Validators.required],
      category:[null, Validators.required],
    })
  }

  ngOnInit(): void {
    this.loadAllCategory();

  }

  loadAllCategory(){
    this.categoryService.getCategory().subscribe(
      data=>{
        this.categories=data;
        console.log(data)
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
  // Add quiz
  addQuiz(){
    // console.log(this.form.value)
    this.quizService.addQuiz(this.form.value).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(["/admin/view-quizzes"])
      },
      error=>{
        console.log(error);
      }
    )
  }

}
