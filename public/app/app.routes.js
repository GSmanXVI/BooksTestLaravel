System.register(['@angular/router', './components/book/book.component', './components/book-list/book-list.component', './components/add-edit/add-edit.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, book_component_1, book_list_component_1, add_edit_component_1;
    var routes, appRouterProviders;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
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
            routes = [
                {
                    path: '',
                    redirectTo: '/books',
                    pathMatch: 'full'
                },
                {
                    path: 'books',
                    component: book_list_component_1.BookListComponent
                },
                {
                    path: 'books/add',
                    component: add_edit_component_1.AddEditComponent
                },
                {
                    path: 'books/:id',
                    component: book_component_1.BookComponent
                },
                {
                    path: 'books/:id/edit',
                    component: add_edit_component_1.AddEditComponent
                }
            ];
            exports_1("appRouterProviders", appRouterProviders = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map