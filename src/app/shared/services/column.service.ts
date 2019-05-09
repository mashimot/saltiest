import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterResponse } from '../interface/register-response';

@Injectable({
    providedIn: 'root'
})
export class ColumnService {
    API_URL: string = 'http://127.0.0.1:8000/api/columns';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };
    
    constructor(private http: HttpClient) {
    }
 
    updateColumn(id: number, data: any){
        return this.http.put<RegisterResponse>(`${this.API_URL}/${id}`, data, this.httpOptions);
    }
}