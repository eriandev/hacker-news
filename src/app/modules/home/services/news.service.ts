import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse } from '../interfaces/news';

@Injectable()
export class NewsService {
  private readonly API_URL = 'https://hn.algolia.com/api/v1/';

  constructor(private http: HttpClient) {}

  public getSelectedNews(query: string, page: number = 0): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(`${this.API_URL}search_by_date?query=${query}&page=${page}`);
  }
}
