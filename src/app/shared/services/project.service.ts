import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterResponse } from '../interface/register-response';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  API_URL: string = 'https://salty-suite.herokuapp.com/api/projects';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getProjects(queryParams?) {
    const httpOptions = {
      params: { ...queryParams }
    };
    return this.http.get<any>(`${this.API_URL}`, httpOptions);
  }

  getProjectById(id: number) {
    return this.http.get<RegisterResponse>(`${this.API_URL}/${id}`);
  }

  updateProject(id: number, data) {
    return this.http.put<RegisterResponse>(`${this.API_URL}/${id}`, data, this.httpOptions);
  }

  storeProject(data) {
    return this.http.post<RegisterResponse>(`${this.API_URL}`, data, this.httpOptions);
  }

  deleteProject(id: number) {
    return this.http.delete<RegisterResponse>(`${this.API_URL}/${id}`, this.httpOptions);
  }
}
