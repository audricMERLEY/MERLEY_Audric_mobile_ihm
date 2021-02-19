import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
@Injectable()
export class LoginService {
  auth : boolean = false;
  default_credentials= {
    "email":"eve.holt@reqres.in",
    "password":"pistol"
  }
  constructor(public httpApi: HttpClient) {
  }
  logIn(email:string,password:string){
    let credentials = {
      "email":email,
      "password":password
    };
    return this.httpApi.post("https://reqres.in/api/login",credentials).pipe(
      map((data : any)=> data)
    );
  }

  register(email:string,password:string){
    let credentials = {
      "email":email,
      "password":password
    };
    return this.httpApi.post("https://reqres.in/api/register",credentials).pipe(
      map((data : any)=> data)
    );
  }

}
