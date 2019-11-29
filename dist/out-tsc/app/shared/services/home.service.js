var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
        this.API_URL = 'http://127.0.0.1:8000/api';
    }
    HomeService.prototype.getHome = function () {
        return this.http.get(this.API_URL + "/pages");
    };
    HomeService.prototype.getHomeStatic = function () {
        return ([
            {
                "rows": [
                    {
                        "grid": "12",
                        "columns": [
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
                                        "definition": {}
                                    },
                                    {
                                        "html": {
                                            "category": "headings",
                                            "tag": "h6",
                                            "text": "A tool for lazy Developers.",
                                            "class": "text-center"
                                        },
                                        "definition": {}
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
                                        "definition": {}
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
                                        "definition": {}
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
                                        "definition": {}
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
                                        "definition": {}
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
                                        "definition": {}
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "name": "Salt - A tool for Lazy Developer"
            }
        ]);
    };
    HomeService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], HomeService);
    return HomeService;
}());
export { HomeService };
//# sourceMappingURL=home.service.js.map