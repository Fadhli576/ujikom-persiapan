<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookCategory extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function bookCategoryRelation()
    {
        return $this->hasMany(BookCategoryRelation::class);
    }
}
