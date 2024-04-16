<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    protected $guarded = ['id'];


    public function categories()
    {
        return $this->belongsToMany(BookCategory::class);
    }

    public function loans()
    {
        return $this->hasMany(Loan::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function collections()
    {
        return $this->hasMany(BookCollection::class);
    }

    public function bookCategoryRelation()
    {
        return $this->hasOne(BookCategoryRelation::class);
    }
}
