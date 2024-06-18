import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private api = 'http://localhost:3000/restaurants';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<any> {
    return this.http.get<any>(this.api, this.httpOptions);
  }

  postRestaurant(data: any): Observable<any> {
    return this.http.post<any>(this.api, data, this.httpOptions);
  }

}
