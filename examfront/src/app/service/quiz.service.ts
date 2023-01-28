import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private client:HttpClient) { }


// Load all quizzes
  loadAllQuizzes(){
    return this.client.get("http://localhost:5555/quiz/");
  }

  // Add quizzes
  addQuiz(quiz:any){
    return this.client.post("http://localhost:5555/quiz/", quiz);
  }

  // Delete Quize
  deleteQuiz(qId:any){
    return this.client.delete(`http://localhost:5555/quiz/${qId}`);
  }

  // Get Quize by id
  getQuizById(qId:any){
    return this.client.get(`http://localhost:5555/quiz/${qId}`);
  }

  // Update Quiz
  updateQuiz(quiz:any){
    return this.client.put("http://localhost:5555/quiz/", quiz)
  }

  // Get quiz by category
  getQuizOfCategory(cId:any){
    return this.client.get("http://localhost:5555/quiz/category/"+cId);
  }

  //Get active quizes
  getActiveQuizes(){
    return this.client.get("http://localhost:5555/quiz/active");
  }
  //Get active quizes by category
  getActiveQuizOfCategory(cId:any){
    return this.client.get("http://localhost:5555/quiz/active/category/"+cId);
  }
}
