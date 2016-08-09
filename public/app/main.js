System.register(['@angular/platform-browser-dynamic', '@angular/http', '@angular/forms', '@angular/core', './components/book-app/book-app.component', './app.routes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, http_1, forms_1, core_1, book_app_component_1, app_routes_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (book_app_component_1_1) {
                book_app_component_1 = book_app_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            platform_browser_dynamic_1.bootstrap(book_app_component_1.BookAppComponent, [
                app_routes_1.appRouterProviders,
                http_1.HTTP_BINDINGS,
                forms_1.disableDeprecatedForms(),
                forms_1.provideForms()
            ])
                .catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=main.js.map