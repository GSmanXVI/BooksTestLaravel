import {Pipe} from '@angular/core';
import {Book} from '../models/book';

@Pipe({
    name: "getFields"
})
export class GetFieldPipe {
    transform(array: Array<Book>, field: string): any {
        array = sort(array, field);
        let set = new Set();
        for (let item of array) {
            if (field == 'name') {
                set.add(item[field][0]);
            } else {
                set.add(item[field]);
            }
        }
        return Array.from(set);
    }
}

@Pipe({
    name: "sortByField"
})
export class SortByFieldPipe {
    transform(array: Array<Book>, field: string, value: string): any {
        return array.filter(book => book[field].indexOf(value) == 0);
    }
}

function sort(array, field) {
    array.sort((a: Book, b: Book) => {
        if (a[field] < b[field]) {
            return -1;
        } else if (a[field] > b[field]) {
            return 1;
        } else {
            return 0;
        }
    });
    return array;
}
