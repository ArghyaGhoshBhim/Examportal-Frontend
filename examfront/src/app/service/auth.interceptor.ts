import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()  
export class AuthIterceptor implements HttpInterceptor{

    constructor(private loginService:LoginService){}
    // Add token in the headers
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token=this.loginService.getToken();
        if(token!=null){
            req=req.clone({setHeaders:{
                Authorization:`Bearer ${token}`
            }})
        }
        return next.handle(req);

    } 
} 

export const AuthIterceptorProvider=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthIterceptor,
        multi:true
    }
]