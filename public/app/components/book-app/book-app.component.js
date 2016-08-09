System.register(['@angular/core', '@angular/router', '../../services/books.service', '../book/book.component', '../book-list/book-list.component', '../add-edit/add-edit.component'], function(exports_1, context_1) {
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
    var core_1, router_1, books_service_1, book_component_1, book_list_component_1, add_edit_component_1;
    var BookAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (books_service_1_1) {
                books_service_1 = books_service_1_1;
            },
            function (book_component_1_1) {
                book_component_1 = book_component_1_1;
            },
            function (book_list_component_1_1) {
                book_list_component_1 = book_list_component_1_1;
            },
            function (add_edit_component_1_1) {
                add_edit_component_1 = add_edit_component_1_1;
            }],
        execute: function() {
            BookAppComponent = (function () {
                function BookAppComponent() {
                }
                BookAppComponent = __decorate([
                    core_1.Component({
                        selector: 'book-app',
                        templateUrl: 'app/components/book-app/book-app.component.html',
                        styleUrls: ['app/components/book-app/book-app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [books_service_1.BooksService],
                        precompile: [BookAppComponent, book_component_1.BookComponent, book_list_component_1.BookListComponent, add_edit_component_1.AddEditComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BookAppComponent);
                return BookAppComponent;
            }());
            exports_1("BookAppComponent", BookAppComponent);
        }
    }
});
//# sourceMappingURL=book-app.component.js.map