import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user";
import {observable, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BaseUrl1 = "http://localhost:9090/api/v1/auth/token"
  private BaseUrl2 = "http://localhost:9090/api/v2/User"
  private jwt: string | null;
  private jwtstring: string;

  constructor(private httpclient: HttpClient) {
  }

  register(user: User, password: string) {
    return this.httpclient.post(`${this.BaseUrl1}?password=${password}`, user)
  }

  GetUser(): Observable<User> {
    this.jwt = localStorage.getItem("auth token")
    if (this.jwt != null) {
      this.jwtstring = this.jwt
    }
    console.log("jwt token string" + this.jwtstring)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer + ${this.jwtstring}`
    })
    headers = headers.append("responseType", "application/json")
    return this.httpclient.get<User>(`${this.BaseUrl2}`, {headers})
  }
}
