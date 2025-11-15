import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Pageable } from '../interface/register-response';

@Injectable({
  providedIn: 'root'
})
export class HtmlElementService {
  private category: string;
  private readonly API_URL: string = '/assets/_mock/';

  constructor(private http: HttpClient) {
    this.category = 'form';
  }

  getTags() {
    return this.getHtmlElements().pipe(
      map((htmlElements: any) => {
        const elements = htmlElements.reduce((acc, item) => {
          if (item.html && item.html.category && item.html.category === this.category) {
            acc[item.html.tag] = null;
          }

          return acc;
        }, {});

        return elements;
      }),
      map(elements => {
        return Object.keys(elements);
      })
    );
  }

  getTools() {
    return this.http.get<any>(`${this.API_URL}`);
  }

  getOptionChoices() {
    return of({
      success: true,
      message: 'any',
      paginate: {
        current_page: 1,
        data: [
          {
            description: 'Escala Likert',
            html: {
              content_choice_id: 1,
              content_html_tag_id: 2,
              category: 'form',
              tag: 'radio',
              label: 'Type your Text',
              choices: [
                {
                  id: 1,
                  content_choice_id: 1,
                  text: 'Discordo Totalmente',
                  value: '1',
                  position: 1
                },
                {
                  id: 2,
                  content_choice_id: 1,
                  text: 'Discordo',
                  value: '2',
                  position: 2
                },
                {
                  id: 3,
                  content_choice_id: 1,
                  text: 'Discordo Totalmente e Nem Discordo',
                  value: '3',
                  position: 3
                },
                {
                  id: 4,
                  content_choice_id: 1,
                  text: 'Concordo',
                  value: '4',
                  position: 4
                },
                {
                  id: 5,
                  content_choice_id: 1,
                  text: 'Concordo Totalmente',
                  value: '5',
                  position: 5
                },
                {
                  id: 6,
                  content_choice_id: 1,
                  text: 'NA (N\u00e3o Aplic\u00e1vel)',
                  value: '0',
                  position: 6
                }
              ]
            }
          },
          {
            description: 'Bass Players',
            html: {
              content_choice_id: 2,
              content_html_tag_id: 2,
              category: 'form',
              tag: 'radio',
              label: 'Type your Text',
              choices: [
                {
                  id: 7,
                  content_choice_id: 2,
                  text: 'Les Claypool',
                  value: '1',
                  position: 1
                },
                {
                  id: 8,
                  content_choice_id: 2,
                  text: 'Geddy Lee',
                  value: '2',
                  position: 2
                }
              ]
            }
          }
        ],
        first_page_url: 'http://127.0.0.1:8000/api/contents_choices?page=1',
        from: 1,
        last_page: 2,
        last_page_url: 'http://127.0.0.1:8000/api/contents_choices?page=2',
        next_page_url: 'http://127.0.0.1:8000/api/contents_choices?page=2',
        path: 'http://127.0.0.1:8000/api/contents_choices',
        per_page: 99999999999999999,
        prev_page_url: null,
        to: 2,
        total: 3
      }
    });
  }

  getHtmlElements() {
    return this.http.get(`${this.API_URL}html-elements.json`);
  }
}
