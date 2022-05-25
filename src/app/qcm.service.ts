import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from './models/language.model';


@Injectable({
  providedIn: 'root'
})
export class QcmService {
   baseUrl:String = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  getall():
  
  Observable<Language[]>{
    const url=`${this.baseUrl}/language`
    return this.http.get<Language[]>(url);
  }
  
}
