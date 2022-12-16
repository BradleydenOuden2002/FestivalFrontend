import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../Service/authentication.service";
import {Router} from "@angular/router";
import {CommunicationService} from "../../Service/communication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() recieveChildData: EventEmitter<boolean> = new EventEmitter();
  errorMessage: string;
  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  constructor(private authservice: AuthenticationService, private communicationserivce: CommunicationService, public router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let username = String(this.form.get('username')?.value)
    let password = String(this.form.get('password')?.value)
    console.log(username + " " + password)
    this.authservice.setToken(username, password)
      .subscribe({
          next: () => {
            this.communicationserivce.changeData(true);  //invoke new Data
            this.router.navigate(['dashboard']);
          }
        }
      )
  }
}
