import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../Service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })
  Show:boolean = false;

  constructor(private authservice: AuthenticationService, public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let username = String(this.form.get('username')?.value)
    let password = String(this.form.get('password')?.value)
    console.log(username + " " + password)
    this.authservice.setToken(username, password)
      .subscribe({
          next: () => {
            this.router.navigate(['dashboard'])
          }
        }
      )
  }
}
