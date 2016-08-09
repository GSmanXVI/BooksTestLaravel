<?php

use App\Models\Book;
use App\Models\Genre;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/books', function () {
    $books = Book::orderBy('id', 'asc')->get();
    foreach ($books as $book) {
        $genre = Genre::where('id', $book->genreId)->first();
        $book->genre = $genre->name;
    }
    return $books;
});

Route::get('/api/books/{id}', function ($id) {
     $book = Book::where('id', $id)->first();
     $genre = Genre::where('id', $book->genreId)->first();
     $book->genre = $genre->name;
     return $book;
});

Route::post('/api/books', function (Request $request) {
    $book = new Book;
    $request = Request::all();

    $validator = Validator::make($request, [
        'name' => 'required|max:150',
        'author' => 'required|max:100',
        'year' => 'required|digits:4',
        'info' => 'required|max:2000',
    ]);

    if (!$validator->fails()) {
        $book->name = $request['name'];
        $book->author = $request['author'];
        $book->year = $request['year'];
        $book->genreId = $request['genreId'];
        $book->info = $request['info'];
        $book->image = $request['image'];
        $book->save();
    }
});

Route::put('/api/books/{id}', function (Request $request, $id) {
    $book = Book::where('id', $id)->first();
    $request = Request::all();

    $validator = Validator::make($request, [
        'name' => 'required|max:150',
        'author' => 'required|max:100',
        'year' => 'required|digits:4',
        'info' => 'required|max:2000',
    ]);

    $book->name = $request['name'];
    $book->author = $request['author'];
    $book->year = $request['year'];
    $book->genreId = $request['genreId'];
    $book->info = $request['info'];
    $book->image = $request['image'];
    $book->save();
});

Route::delete('/api/books/{id}', function ($id) {
    $book = Book::findOrFail($id);
    File::delete($book->image);
    $book->delete();
});

Route::get('/api/genres', function () {
    return Genre::orderBy('id', 'asc')->get();
});

Route::post('api/books/upload', function () {
    if (Request::hasFile('file'))
    {
        $image = Request::file('file');
        $filename  = time() . '.' . $image->getClientOriginalExtension();
        $path = public_path('data\\' . $filename);
        Image::make($image->getRealPath())->resize(200, 200)->save($path);
        return $filename;
    }
});

Route::get('/{any}', function ($any) {
    return view('welcome');
})->where('any', '.*');
