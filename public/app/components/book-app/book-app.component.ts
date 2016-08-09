import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BooksService} from '../../services/books.service';
import {BookComponent} from '../book/book.component';
import {BookListComponent} from '../book-list/book-list.component';
import {AddEditComponent} from '../add-edit/add-edit.component';

@Component({
    selector: 'book-app',
    templateUrl: 'app/components/book-app/book-app.component.html',
    styleUrls: ['app/components/book-app/book-app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [BooksService],
    precompile: [BookAppComponent, BookComponent, BookListComponent, AddEditComponent]
})
export class BookAppComponent {

    constructor() {

    }

}
