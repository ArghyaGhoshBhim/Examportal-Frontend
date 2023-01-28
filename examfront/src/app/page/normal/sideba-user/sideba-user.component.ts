import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-sideba-user',
  templateUrl: './sideba-user.component.html',
  styleUrls: ['./sideba-user.component.css']
})
export class SidebaUserComponent implements OnInit {



  categories:any=[]
  constructor(
    private categoryService:CategoryService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loadCategories();
  }


  
  loadCategories(){
    this.categoryService.getCategory().subscribe(
      data=>{
        this.categories=data;
        console.log(this.categories)
      }, error=>{
        console.log(error)
      }
    )
  }

}
