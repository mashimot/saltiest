import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterResponse } from '../interface/register-response';

@Injectable({
  	providedIn: 'root'
})
export class ContentChoiceItemService {
    API_URL: string = 'http://127.0.0.1:8000/api/contents_choices_items';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
	};
	
  	constructor(private http: HttpClient) { }

  	storeContentChoiceItem(contentChoiceItem) {
		return this.http.post<RegisterResponse>(`${this.API_URL}`, contentChoiceItem, this.httpOptions);
	}

	updateContentChoiceItem(id: number, contentChoiceItem: any){
		return this.http.put<RegisterResponse>(`${this.API_URL}/${id}`, contentChoiceItem, this.httpOptions);
	}

	deleteContentChoiceItem(id: number) {
		return this.http.delete<RegisterResponse>(`${this.API_URL}/${id}`);
	}	

	getContentChoiceItemById(id: number){
		return this.http.get<RegisterResponse>(`${this.API_URL}/${id}`);
	}
}
