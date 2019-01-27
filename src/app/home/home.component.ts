import { Component, OnInit } from '@angular/core';
import { FormConfigService } from './../services/form-config.service';
import { Page } from './../shared/models/page.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	pages: Array<Page>;
	config: {
		previewMode: boolean
	}

  	constructor(
		private formConfigService: FormConfigService
	) {
    this.pages = [];
   }

  ngOnInit() {
    this.config = {
      	previewMode: true
    };
    this.formConfigService.setConfig(this.config);
    this.pages = [
      {
        "rows": [
          {
            "grid": "3 9",
            "columns": [
              {
                "contents": [
                  {
                    "html": {
                      "tag": "image",
                      "category": "html",
                      "src": "https://mashimot.github.io/salt/app/salt.png"
                    },
                    "table": {}
                  }
                ]
              },
              {
                "contents": [
                  {
                    "html": {
                      "label": "Type your Text",
                      "category": "headings",
                      "tag": "h1",
                      "text": "Salt.",
                      "class": "text-center"
                    },
                    "table": {}
                  },
                  {
                    "html": {
                      "category": "headings",
                      "tag": "h6",
                      "text": "A tool for lazy Developers.",
                      "class": "text-center"
                    },
                  }
                ]
              }
            ]
          },
          {
            "grid": "12",
            "columns": [
              {
                "contents": [
                  {
                    "html": {
                      "tag": "html",
                      "category": "html",
                      "data": "<h1 class=\"p-3 mb-3 bg-danger text-white text-center\">A simple drag & drop Bootstrap Form Builder </h1>"
                    },
                  }
                ]
              }
            ]
          },
          {
            "grid": "3 9",
            "columns": [
              {
                "contents": [
                  {
                    "html": {
                      "tag": "image",
                      "category": "html",
                      "src": "http://i.imgur.com/AVqsATi.gif"
                    },
                  }
                ]
              },
              {
                "contents": [
                  {
                    "html": {
                      "tag": "html",
                      "category": "html",
                      "data": "<p class=\"f3\">This project was made with Angular 6.1.2.</p>\n<p>It's been in development since December 2017 and is <strong>currently being developed.</strong></p>"
                    },
                  }
                ]
              }
            ]
          },
          {
            "grid": "8 4",
            "columns": [
              {
                "contents": [
                  {
                    "html": {
                      "label": "Type your Text",
                      "category": "headings",
                      "tag": "h1",
                      "text": "Features",
                      "class": "text-center"
                    },
                  }
                ]
              },
              {
                "contents": []
              }
            ]
          },
          {
            "grid": "12",
            "columns": [
              {
                "contents": [
                  {
                    "html": {
                      "tag": "html",
                      "category": "html",
                      "data": "<a href=\"http://wiki.languagetool.org/public-http-api\" target=\"_blank\">API RESTful - Language Tool (LanguageTool Style and Grammar Checker)</a> http://wiki.languagetool.org/public-http-api"
                    },
                  }
                ]
              }
            ]
          }
        ],
        "name": "Salt - A tool for Lazy Developer"
      }
    ];
  }
}
