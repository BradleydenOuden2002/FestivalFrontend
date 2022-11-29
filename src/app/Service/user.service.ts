import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BaseUrl = ""
  constructor(private httpclient: HttpClient) { }

  register(user:User, password: string){
    return this.httpclient.post(`${this.BaseUrl}?password=${password}`,user)
  }
}
