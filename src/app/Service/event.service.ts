import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evt} from "../model/evt";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  //
  private BaseUrl = "http://localhost:8090/api/v2/Event"

  constructor(private httpclient: HttpClient) {
  }

  getEvents(): Observable<Evt[]> {
    return this.httpclient.get<Evt[]>(`${this.BaseUrl}`);
  }

  getEventsLatLong(latlong: String): Observable<Evt[]> {
    return this.httpclient.get<Evt[]>(`${this.BaseUrl}/${latlong}`)
  }
}
