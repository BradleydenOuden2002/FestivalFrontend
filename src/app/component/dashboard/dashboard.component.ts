import { Component, OnInit } from '@angular/core';
import {Evt} from "../../model/evt";
import {EventService} from "../../Service/event.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  latlong: string;
  listevt: Evt[]
  constructor(private eventservice: EventService) { }

  ngOnInit(): void {
    this.getLocation()
  }

  getEvents(){
    this.eventservice.getEvents().subscribe(data=>{
      this.listevt = data
    });
  }

  getEventsLatLong(){
    this.eventservice.getEventsLatLong(this.latlong).subscribe(data=>{
      this.listevt = data
    })
  }

  getLocation(): void{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.latlong = latitude+","+longitude;
        return this.getEventsLatLong();
      });
    } else {
      console.log("No support for geolocation")
      return this.getEvents();
    }
    return this.getEvents()
  }
}
