import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {NgForm} from '@angular/common';
import {Book} from '../../models/book';
import {BooksService} from '../../services/books.service';

@Component({
  selector: 'book',
  templateUrl: 'app/components/book/book.component.html',
  styleUrls: ['app/components/book/book.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class BookComponent implements OnInit, OnDestroy {
    book: Book;
    sub: any;

    constructor(
        private booksService: BooksService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.booksService.getBookById(id).subscribe(
                book => {
                    this.book = book;
                    if (this.book.image == 'null') {
                        this.book.image = 'app/images/placeholder.png';
                    }
                }
            );
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getImage() {
        return 'app/images/placeholder.png';
    }
}
