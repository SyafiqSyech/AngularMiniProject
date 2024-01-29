import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Podcasts } from './podcasts';

@Injectable({
  providedIn: 'root'
})

export class PodcastsService {

  constructor(private http:HttpClient) { }

  get(searchKey: string, currentPage: number, pageSize:number):Observable<HttpResponse<any>>{
    let url = `http://localhost:3000/podcasts?_page=${currentPage}&_limit=${pageSize}`
    if (searchKey) {
      url = `${url}&title_like=${searchKey}`;
    }
    return this.http.get<HttpResponse<any>>(url,{observe:'response'})
  }

  add(payload:Podcasts){
    return this.http.post('http://localhost:3000/podcasts', payload);
  }
  
  getById(id: any): Observable<Podcasts> {
    return this.http.get<Podcasts>(
      `http://localhost:3000/podcasts/${id}`
    );
  }
   
  update(payload: Podcasts): Observable<Podcasts> {
    return this.http.put<Podcasts>(
      `http://localhost:3000/podcasts/${payload.id}`,
      payload
    );
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/podcasts/${id}`);
  }
}
