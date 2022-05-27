import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from './models/language.model';


@Injectable({
  providedIn: 'root'
})
export class QcmService {
   baseUrl:String = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  
  getall():Observable<Language[]>{
    const url=`${this.baseUrl}/language`
    return this.http.get<Language[]>(url);
  }


  create(data: any): Observable<any> {
    const url=`${this.baseUrl}/language`
    return this.http.post(url, data);
  }
  
  update(id: any, data: any): Observable<any> {
    const url=`${this.baseUrl}/language/languageid`
    return this.http.put(`${url}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    const url=`${this.baseUrl}/language/languageid`
    return this.http.delete(`${url}/${id}`);
  }

}
