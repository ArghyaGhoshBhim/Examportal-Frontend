import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories:any=[]
  constructor(private categoryService:CategoryService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.loadAllCategory()
  }


  loadAllCategory(){
    this.categoryService.getCategory().subscribe(
      data=>{
        this.categories=data;
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

// Delete categoey
deleteCategory(category:any){
  let cId=category["cId"];
  console.log(cId+1)
  this.categoryService.deleteCategory(Math.floor(cId)).subscribe(
    data=>{
      this.loadAllCategory();
    },
    error=>{
      console.log(error)
      this.snack.open("Category deleted not able to delete!", "",{
        duration:3000
      })
    }
  )
}






}
