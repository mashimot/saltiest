import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToolService {
  readonly API_URL: string = '/assets/_mock/tools.json';

  constructor(private http: HttpClient) {}

  getTools(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}
