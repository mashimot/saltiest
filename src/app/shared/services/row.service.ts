import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterResponse } from '../interface/register-response';

@Injectable({
    providedIn: 'root'
})
export class RowService {
    API_URL: string = 'https://salty-suite.herokuapp.com/api/rows';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    
    constructor(private http: HttpClient) {
    }
    
    storeRow(data: any) {
        return this.http.post<RegisterResponse>(`${this.API_URL}`, data, this.httpOptions);
    }	

	updateRow(id: number, data: any) {
        return this.http.put<RegisterResponse>(`${this.API_URL}/${id}`, data, this.httpOptions);
    }	

	deleteRow(id: number) {
        return this.http.delete<RegisterResponse>(`${this.API_URL}/${id}`);
    }	
}