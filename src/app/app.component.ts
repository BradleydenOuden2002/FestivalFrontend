import {Component, OnInit} from "@angular/core";
import {User} from "./model/user";
import {UserService} from "./Service/user.service";
import {CommunicationService} from "./Service/communication.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public $LoggedIn: boolean
  user: User;

  constructor(userservice: UserService, private communicationservice: CommunicationService, router: Router) {
    userservice.GetUser().subscribe(data => {
      this.user = data
    })
  }

  ngOnInit() {

    console.log(this.$LoggedIn)
  }

  title = 'Frontend';
}
