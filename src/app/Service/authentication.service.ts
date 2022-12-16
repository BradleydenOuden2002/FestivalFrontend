import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Token} from "../model/token";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  $Islogging: boolean;

  constructor(private tokenservice: TokenService) {
  }

  checklogin() {
    if (localStorage.getItem("auth token")) {
      this.$Islogging = true;
    } else {
      this.$Islogging = false
    }
  }

  setToken(username: string, password: string) {
    return this.tokenservice.token(username, password).pipe(tap(
      res => localStorage.setItem("auth token", res.text),
      () => console.log("http request completed")
    ))
  }
}
