import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_BINDINGS} from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {enableProdMode} from '@angular/core';
import {BookAppComponent} from './components/book-app/book-app.component';
import {appRouterProviders} from './app.routes';

enableProdMode();
bootstrap(BookAppComponent, [
    appRouterProviders,
    HTTP_BINDINGS,
    disableDeprecatedForms(),
    provideForms()
])
.catch((err: any) => console.error(err));
