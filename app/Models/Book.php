<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Book
 */
class Book extends Model
{
    protected $table = 'books';

    public $timestamps = false;

    protected $fillable = [
        'name',
        'author',
        'year',
        'genreId',
        'info',
        'image'
    ];

    protected $guarded = [];


}
