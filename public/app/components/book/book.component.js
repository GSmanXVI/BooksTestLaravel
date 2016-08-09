System.register(['@angular/core', '@angular/router', '../../services/books.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, books_service_1;
    var BookComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (books_service_1_1) {
                books_service_1 = books_service_1_1;
            }],
        execute: function() {
            BookComponent = (function () {
                function BookComponent(booksService, route) {
                    this.booksService = booksService;
                    this.route = route;
                }
                BookComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.route.params.subscribe(function (params) {
                        var id = params['id'];
                        _this.booksService.getBookById(id).subscribe(function (book) {
                            _this.book = book;
                            if (_this.book.image == 'null') {
                                _this.book.image = 'app/images/placeholder.png';
                            }
                        });
                    });
                };
                BookComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                BookComponent.prototype.getImage = function () {
                    return 'app/images/placeholder.png';
                };
                BookComponent = __decorate([
                    core_1.Component({
                        selector: 'book',
                        templateUrl: 'app/components/book/book.component.html',
                        styleUrls: ['app/components/book/book.component.css'],
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [books_service_1.BooksService, router_1.ActivatedRoute])
                ], BookComponent);
                return BookComponent;
            }());
            exports_1("BookComponent", BookComponent);
        }
    }
});
//# sourceMappingURL=book.component.js.map