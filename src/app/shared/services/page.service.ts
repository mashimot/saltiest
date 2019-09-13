import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterResponse, Pageable } from '../interface/register-response';

@Injectable({
    providedIn: 'root'
})
export class PageService {
    API_URL: string = 'http://127.0.0.1:8000/api/pages';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    constructor(private http: HttpClient) {
    }
 
    getPages(){
      	return this.http.get<RegisterResponse>(`${this.API_URL}`);
    }
    
    getPageByUrl(url: string){
        return this.http.get<any>(url);
    }

    getPageByProjectId(projectId: number){
        return this.http.get<Pageable>(`${this.API_URL}/${projectId}/project`);
    }

    getPageById(id: number){
        return this.http.get<RegisterResponse>(`${this.API_URL}/${id}`);
    }    
    
    createPage(data: any) {
        return this.http.post<RegisterResponse>(this.API_URL, data, this.httpOptions);
    }
    
    updatePagesPosition(id: number, data: any) {
        return this.http.put<RegisterResponse>(`${this.API_URL}/${id}/updatePosition`, data, this.httpOptions);
    }
    
    deletePage(id: number){
        return this.http.delete<RegisterResponse>(`${this.API_URL}/${id}`);
    }
}