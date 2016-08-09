import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgForm}    from '@angular/forms';
import {Book} from '../../models/book';
import {BooksService} from '../../services/books.service';

@Component({
  selector: 'book',
  templateUrl: 'app/components/add-edit/add-edit.component.html',
  styleUrls: ['app/components/add-edit/add-edit.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AddEditComponent implements OnInit, OnDestroy {
    book: Book;
    genres: Array<any>;
    sub: any;

    constructor(
        private booksService: BooksService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    ) {
        this.book = new Book();
        this.book.image = 'app/images/placeholder.png';
    }

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
        this.booksService.getGenres().subscribe(
            genres => this.genres = genres
        );
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    save() {
        if (!this.book.id) {
            this.booksService.addBook(this.book).subscribe(
                res => this.location.back()
            );
        } else {
            this.booksService.editBook(this.book, this.book.id).subscribe(
                res => this.location.back()
            );
        }
    }

    cancel() {
        this.location.back();
    }

    delete() {
        this.booksService.deleteBook(this.book.id).subscribe(
            res => this.router.navigate(['/books'])
        );
    }

    onChange(event) {
        let file = event.srcElement.files;
        this.booksService.uploadFile(file[0]).then(
            res => {
                console.log(res);
                this.book.image = 'data/' + res;
            }
        );
    }
}
