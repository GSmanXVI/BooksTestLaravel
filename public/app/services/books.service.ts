import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Book} from '../models/book';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BooksService {
    private apiUrl: string;

    constructor(private http: Http) {
        this.apiUrl = 'api/books'
    }

    jsonToUrlString(data: any) : string {
        let str = Object.keys(data).map(function(key){
            return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
            }).join('&');
        return str;
    }

    getBooks() {
        return this.http.get(this.apiUrl)
            .map(this.extractData);
    }

    getBookById(id: string) {
        return this.http.get(this.apiUrl + '/' + id)
            .map(this.extractData);
    }

    getGenres() {
        return this.http.get('api/genres')
            .map(this.extractData);
    }

    addBook(book: Book) {
        let body = this.jsonToUrlString(book);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http
            .post(this.apiUrl, body, { headers: headers });
    }

    editBook(book: Book, id: string) {
        let body = this.jsonToUrlString(book);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http
            .put(this.apiUrl + '/' + id, body, { headers: headers });
    }

    deleteBook(id: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http
            .delete(this.apiUrl + '/' + id, { headers: headers });
    }

    uploadFile(file:File):Promise<any> {
        return new Promise((resolve, reject) => {

            let xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.open('POST', this.apiUrl + '/upload', true);

            let formData = new FormData();
            formData.append("file", file, file.name);
            xhr.send(formData);
        });
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
