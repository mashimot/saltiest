import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Http } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class LanguageToolService {
    apiUrl: string = 'https://languagetool.org/api/v2/check';
    language: string = 'pt-br';

    constructor(
        private http: Http
    ) { }

    getCorrectWord(text: string, language?: string): Observable<any> {
        return this.http.get(this.apiUrl, {
            params: {
                language: language ? language : this.language,
                text: text
            }
        }).pipe(
            map((res: Response) => {
                return res.json();
            })
        );
    }
}
