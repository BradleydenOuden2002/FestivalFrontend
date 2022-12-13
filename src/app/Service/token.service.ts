import { Injectable } from '@angular/core';
import {Token} from "../model/token";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private BaseUrl = "http://localhost:9090/api/v1/auth/token";
  constructor(private httpclient: HttpClient) { }

  token(username: String, password: String): Observable<Token>{
      console.log("get token")
      let headers = new HttpHeaders({Authorization: 'Basic '+ window.btoa(username+ ":"+ password)});
      headers = headers.append("responseType","text")
      return this.httpclient.post<Token>(`${this.BaseUrl}`,{},{headers})
  }
}
