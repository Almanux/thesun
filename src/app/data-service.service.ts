import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  serviceURL = "service.php"

  /*options = {
    headers: {'Content-Type': 'application/json'},
    //params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
    responseType: 'json'
  }*/

  options = {
    headers: {'Content-Type': 'application/json'}
  }

  constructor(private http: HttpClient) {

  }

  public getSunData(): Observable<any> {
    return this.http.post<any>(this.serviceURL, {action: "getSunData"}, this.options);
  }
}
