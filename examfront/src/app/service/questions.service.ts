import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private client:HttpClient) { }


  // Get quiz question
  getQuestionsOfQuiz(qId:any){
    return this.client.get(`http://localhost:5555/question/questionbyqid/${qId}`)
  }


  // Add question in quiz
  addQuestionInQuiz(question:any){
    return this.client.post("http://localhost:5555/question/", question);
  }


  // Delete question
  deleteQuestion(quesId:any){
    return this.client.delete(`http://localhost:5555/question/${quesId}`);
  }
}
