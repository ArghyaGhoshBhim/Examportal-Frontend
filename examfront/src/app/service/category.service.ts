import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private client:HttpClient) { }
  // Load all categories
  getCategory(){
    return this.client.get("http://localhost:5555/category/");
  }


  // Add category
  addCategory(category:any){
    return this.client.post("http://localhost:5555/category/", category);
  }

  // Delete category
  deleteCategory(cId:number):Observable<any>{
    return this.client.delete(`http://localhost:5555/category/${cId}`);
  }
}
