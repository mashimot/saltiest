import { Injectable } from '@angular/core';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Http } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LanguageToolService {
    apiUrl: string = 'https://languagetool.org/api/v2/check';
    language: string = 'pt-br';
    httpOptions = {
        headers: new HttpHeaders({ 
            'Access-Control-Allow-Origin':'*'
        })
    };
    constructor(
        private http: HttpClient
    ) { }

    getCorrectWord(text: string, language?: string) {
        let params = new HttpParams()
        .set('language', language ? language : this.language)
        .set('text', text);
    
        console.log(params);
        return this.http.get<any>(this.apiUrl, {
            params: params, 
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            }),
        });
    }
}
