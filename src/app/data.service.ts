import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie, Token } from './inferface/model';

@Injectable()
export class DataService {
  serviceUrl:string = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) {
    }

  public getMainPage(): Observable<Token[]> {
    const url = `${this.serviceUrl}/main-page/`;
    return this.http.get<Token[]>(url);
  }

  public getActivePage(): Observable<Serie[]> {
    const url = `${this.serviceUrl}/serie/`;
    return this.http.get<Serie[]>(url)
  }

  public getSeriePage(slug: string): Observable<any> {
    const url = `${this.serviceUrl}/serie/${slug}`;
    return this.http.get(url)
  }
}
