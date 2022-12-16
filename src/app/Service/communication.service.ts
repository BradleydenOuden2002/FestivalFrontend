import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private data = new BehaviorSubject<boolean>(false);
  data$ = this.data.asObservable();

  changeData(data: boolean) {
    this.data.next(data)
  }
}
