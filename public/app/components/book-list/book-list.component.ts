import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Book} from '../../models/book';
import {BooksService} from '../../services/books.service';
import {SortByFieldPipe, GetFieldPipe} from '../../pipes/books-sort.pipe';

@Component({
  selector: 'book-list',
  templateUrl: 'app/components/book-list/book-list.component.html',
  styleUrls: ['app/components/book-list/book-list.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: [SortByFieldPipe, GetFieldPipe]
})
export class BookListComponent implements OnInit {
    books: Array<Book>;
    tab: string;

    constructor(
        private booksService: BooksService
    ) {
        this.tab = 'author';
    }

    ngOnInit() {
        this.booksService.getBooks().subscribe(
            books => {
                this.books = books;
                for (let book of this.books) {
                    if (book.image == 'null') {
                        book.image = 'app/images/placeholder.png';
                    }
                }
            }
        );
    }

    getImage(id) {
        return 'app/images/placeholder.png';
    }

    changeTab(tab: string) {
        this.tab = tab;
    }

    isActive(tab: string) {
        return this.tab == tab;
    }
}
