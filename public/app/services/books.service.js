System.register(['@angular/core', '@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var BooksService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            BooksService = (function () {
                function BooksService(http) {
                    this.http = http;
                    this.apiUrl = 'api/books';
                }
                // jsonToUrlString(data: any) : string {
                //     let str = Object.keys(data).map(function(key){
                //         return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
                //         }).join('&');
                //     return str;
                // }
                BooksService.prototype.getBooks = function () {
                    return this.http.get(this.apiUrl)
                        .map(this.extractData);
                };
                BooksService.prototype.getBookById = function (id) {
                    return this.http.get(this.apiUrl + '/' + id)
                        .map(this.extractData);
                };
                BooksService.prototype.getGenres = function () {
                    return this.http.get('api/genres')
                        .map(this.extractData);
                };
                BooksService.prototype.addBook = function (book) {
                    var body = book;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http
                        .post(this.apiUrl, body, { headers: headers });
                };
                BooksService.prototype.editBook = function (book, id) {
                    var body = book;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http
                        .put(this.apiUrl + '/' + id, body, { headers: headers });
                };
                BooksService.prototype.deleteBook = function (id) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http
                        .delete(this.apiUrl + '/' + id, { headers: headers });
                };
                BooksService.prototype.uploadFile = function (file) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200) {
                                    resolve(xhr.response);
                                }
                                else {
                                    reject(xhr.response);
                                }
                            }
                        };
                        xhr.open('POST', _this.apiUrl + '/upload', true);
                        var formData = new FormData();
                        formData.append("file", file, file.name);
                        xhr.send(formData);
                    });
                };
                BooksService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body || {};
                };
                BooksService.prototype.handleError = function (error) {
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                BooksService = __decorate([
                    core_1.Injectable(),
                    __metadata('design:paramtypes', [http_1.Http])
                ], BooksService);
                return BooksService;
            }());
            exports_1("BooksService", BooksService);
        }
    }
});
//# sourceMappingURL=books.service.js.map
