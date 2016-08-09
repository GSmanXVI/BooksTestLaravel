System.register(['@angular/core', '@angular/router', '@angular/common', '../../models/book', '../../services/books.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, common_1, book_1, books_service_1;
    var AddEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (book_1_1) {
                book_1 = book_1_1;
            },
            function (books_service_1_1) {
                books_service_1 = books_service_1_1;
            }],
        execute: function() {
            AddEditComponent = (function () {
                function AddEditComponent(booksService, route, location, router) {
                    this.booksService = booksService;
                    this.route = route;
                    this.location = location;
                    this.router = router;
                    this.book = new book_1.Book();
                    this.book.image = 'app/images/placeholder.png';
                }
                AddEditComponent.prototype.ngOnInit = function () {
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
                    this.booksService.getGenres().subscribe(function (genres) { return _this.genres = genres; });
                };
                AddEditComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                AddEditComponent.prototype.save = function () {
                    var _this = this;
                    if (!this.book.id) {
                        this.booksService.addBook(this.book).subscribe(function (res) { return _this.location.back(); });
                    }
                    else {
                        this.booksService.editBook(this.book, this.book.id).subscribe(function (res) { return _this.location.back(); });
                    }
                };
                AddEditComponent.prototype.cancel = function () {
                    this.location.back();
                };
                AddEditComponent.prototype.delete = function () {
                    var _this = this;
                    this.booksService.deleteBook(this.book.id).subscribe(function (res) { return _this.router.navigate(['/books']); });
                };
                AddEditComponent.prototype.onChange = function (event) {
                    var _this = this;
                    var file = event.srcElement.files;
                    this.booksService.uploadFile(file[0]).then(function (res) {
                        console.log(res);
                        _this.book.image = 'data/' + res;
                    });
                };
                AddEditComponent = __decorate([
                    core_1.Component({
                        selector: 'book',
                        templateUrl: 'app/components/add-edit/add-edit.component.html',
                        styleUrls: ['app/components/add-edit/add-edit.component.css'],
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }),
                    __metadata('design:paramtypes', [books_service_1.BooksService, router_1.ActivatedRoute, common_1.Location, router_2.Router])
                ], AddEditComponent);
                return AddEditComponent;
            }());
            exports_1("AddEditComponent", AddEditComponent);
        }
    }
});
//# sourceMappingURL=add-edit.component.js.map
