import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-normal-dashboard',
  templateUrl: './normal-dashboard.component.html',
  styleUrls: ['./normal-dashboard.component.css']
})
export class NormalDashboardComponent implements OnInit {

  constructor(
    private loginService:LoginService
  ) { }

  ngOnInit(): void {
    this.loginService.loginStatusSubject.next(true);
  }

}
