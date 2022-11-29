import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../Service/user.service";
import {User} from "../../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user = new User;
  constructor(private userservice: UserService, public router: Router) {
  }

  form = new FormGroup({
    firstname: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    validatepassword: new FormControl(null, [Validators.required, Validators.minLength(6)])
  })

  ngOnInit(): void {
  }

  onSubmit() {
    this.user.firstname  = String(this.form.get('firstname')?.value);
    this.user.lastname = String(this.form.get('lastname')?.value);
    this.user.username = String(this.form.get('username')?.value);
    this.user.email = String(this.form.get('email')?.value);
    let password = String(this.form.get('password')?.value);
    let validatepassword = String(this.form.get('validatepassword')?.value);

    if (password == validatepassword){
      this.userservice.register(this.user, password).subscribe(
        {
          next: () => {
            this.router.navigate(['login'])
          }
        }
      )
    }
  }
}
