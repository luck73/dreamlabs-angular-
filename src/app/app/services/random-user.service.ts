import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http:HttpClient) { }

  getData():Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/posts"
    return this.http.get<any>(url)
  }
}
