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
var HomeService = /** @class */ (function () {
    function HomeService() {
    }
    HomeService.prototype.get = function () {
        return [
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
                                        "table": {}
                                    },
                                    {
                                        "html": {
                                            "category": "headings",
                                            "tag": "h6",
                                            "text": "A tool for lazy Developers.",
                                            "class": "text-center"
                                        },
                                        "table": {}
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
                                        "table": {}
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
                                        "table": {}
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
                                        "table": {}
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
                                        "table": {}
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
                                        "table": {}
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "name": "Salt - A tool for Lazy Developer"
            }
        ];
    };
    HomeService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HomeService);
    return HomeService;
}());
export { HomeService };
//# sourceMappingURL=home.service.js.map