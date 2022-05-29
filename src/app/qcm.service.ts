import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from './models/language.model';


@Injectable({
  providedIn: 'root'
})
export class QcmService {
  private _id(_id: any) {
    throw new Error('Method not implemented.');
  }
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
  

 

 deletelanguage(id: string): Observable<any> {
  return this.http.delete(`${this.baseUrl}/language/${id}`);
}

updatelanguage(id: string): Observable<any> {
  return this.http.put(`${this.baseUrl}/language/${id}`);
}

getlanguage(id: string): Observable<any> {
  return this.http.get(`${this.baseUrl}/language/${id}`);
}
 

}
