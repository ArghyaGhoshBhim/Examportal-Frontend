import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  form:FormGroup;
  constructor(private builder:FormBuilder, private categoryService:CategoryService, private snack:MatSnackBar, private router:Router) { 
    this.form=builder.group({
      title:["", Validators.required],
      description:["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  formSubmit(){
    let validate=this.validation(this.form.value["title"], this.form.value["description"]);
   if(validate){
    this.categoryService.addCategory(this.form.value).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(["/admin/view-categories"])
      },
      error=>{
        console.log("This is error");
      }
    )
   }
  }




  validation(title:string,description:string):boolean{

    if(title.trim()=="" || title==null){
      this.snack.open("Title is requried !!", "",{
        duration:3000
      })
      return false;
    }


    if(description.trim()=="" || description==null){
      this.snack.open("Description is requried !!", "",{
        duration:3000
      })
      return false;
    }
    return true;

  }



}
