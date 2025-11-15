import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterResponse } from '../interface/register-response';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  API_URL: string = 'https://salty-suite.herokuapp.com/api/contents';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  showContent(id: number) {
    return this.http.get<RegisterResponse>(`${this.API_URL}/${id}`);
  }

  storeContent(data: any) {
    return this.http.post<RegisterResponse>(
      `${this.API_URL}`,
      data,
      this.httpOptions
    );
  }

  updateContent(content: any) {
    return this.http.put<RegisterResponse>(
      `${this.API_URL}/${content.id}`,
      content,
      this.httpOptions
    );
  }

  deleteContent(id: number) {
    return this.http.delete<RegisterResponse>(`${this.API_URL}/${id}`);
  }

  getContentChoicesById(id: number) {
    return this.http.get<RegisterResponse>(`${this.API_URL}_choices/${id}`);
  }

  updateContentChoicesPosition(id: number, contentChoices: any) {
    return this.http.put<RegisterResponse>(
      `${this.API_URL}_choices/${id}/updatePosition`,
      contentChoices,
      this.httpOptions
    );
  }
}
