import {provideRouter, RouterConfig}  from '@angular/router';
import {BookComponent} from './components/book/book.component';
import {BookListComponent} from './components/book-list/book-list.component';
import {AddEditComponent} from './components/add-edit/add-edit.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    },
    {
        path: 'books',
        component: BookListComponent
    },
    {
        path: 'books/add',
        component: AddEditComponent
    },
    {
        path: 'books/:id',
        component: BookComponent
    },
    {
        path: 'books/:id/edit',
        component: AddEditComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
