import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphsService {
  baseUrl:string = 'http://localhost:3000/grafica';

  constructor( private httpClient: HttpClient ) { }

  private getSocialUsers() {
    return this.httpClient.get(this.baseUrl);
  }

  getRRSSUsersData() {
    return this.getSocialUsers()
      .pipe(
        delay(3000),
        map(data => {
          const labels = Object.keys(data);
          const values = Object.values(data);
          
          return { labels, values };
        })
      );
  }
}
