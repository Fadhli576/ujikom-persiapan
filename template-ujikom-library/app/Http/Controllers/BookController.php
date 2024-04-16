<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\BookCategory;
use App\Models\BookCategoryRelation;
use App\Models\BookCollection;
use App\Models\Review;
use Illuminate\Http\Request;
use Inertia\Response;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return inertia('Book/Index', [
            'books' => Book::with('loans', 'bookCategoryRelation.category')->get(),
            'bookCategories' => BookCategory::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'cover_image'=> 'required:jpeg,png,jpg,svg',
            'title' => 'required',
            'author' => 'required',
            'publisher' => 'required',
            'category_id' => 'required',
            'publication_year' => 'required',
        ]);

        $imageName = time().'.'.$request->cover_image->extension();

        $request->cover_image->move(public_path('images'), $imageName);

        $book = Book::create([
            'cover_image' => $imageName,
            'title' => $request->title,
            'author' => $request->author,
            'publisher' => $request->publisher,
            'publication_year' => $request->publication_year,
        ]);

        BookCategoryRelation::create([
            'book_id' => $book->id,
            'book_category_id' => $request->category_id,
        ]);

        return redirect()->route('book.index')->with('success', 'Book created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        return inertia('Book/Edit', [
            'book' => $book->load('bookCategoryRelation'),
            'bookCategories' => BookCategory::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        $bookCategoryRelation = BookCategoryRelation::where('book_id', $book->id)->first();
        $request->validate([
            'title' => 'required',
            'author' => 'required',
            'publisher' => 'required',
            'publication_year' => 'required',
            'category_id' => 'required'
        ]);

        if ($request->cover_image) {
            if ($book->cover_image) {
                $oldImagePath = public_path('images') . '/' . $book->cover_image;
                if (file_exists($oldImagePath)) {
                    unlink($oldImagePath);
                }
            }

            $imageName = time().'.'.$request->cover_image->extension();
            $request->cover_image->move(public_path('images'), $imageName);
            $book->update([
                'cover_image' => $imageName,
                'title' => $request->title,
                'author' => $request->author,
                'publisher' => $request->publisher,
                'publication_year' => $request->publication_year,
            ]);

            if (!$bookCategoryRelation) {
                BookCategoryRelation::create([
                    'book_id' => $book->id,
                    'book_category_id' => $request->category_id,
                ]);
            } else {
                $bookCategoryRelation->update([
                    'book_category_id' => $request->category_id
                ]);
            }

        } else {
            $book->update([
                'title' => $request->title,
                'author' => $request->author,
                'publisher' => $request->publisher,
                'publication_year' => $request->publication_year,
            ]);

            if (!$bookCategoryRelation) {
                BookCategoryRelation::create([
                    'book_id' => $book->id,
                    'book_category_id' => $request->category_id,
                ]);
            } else {
                $bookCategoryRelation->update([
                    'book_category_id' => $request->category_id
                ]);
            }

        }

        return redirect()->route('book.index')->with('success', 'Book updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        $imagePath = public_path('images/' . $book->cover_image);
        if (file_exists($imagePath)) {
            unlink($imagePath);
        }
        $book->delete();

        $book->bookCategoryRelation()->delete();


        return redirect()->route('book.index')->with('success', 'Book deleted successfully.');
    }

    public function indexBookList() {
        return inertia('Book/User/Index', [
            'books' => Book::with(['reviews'])->get()
        ]);
    }

    public function bookDetail(Book $book) {
        return inertia('Book/User/Detail', [
            'book' => $book->load(['reviews.user']),
            'collection' => BookCollection::where('book_id', $book->id)->where('user_id', auth()->id())->first(),
            'review' => Review::where('book_id', $book->id)->where('user_id', auth()->id())->first(),
            'loan' => $book->loans()->latest()->first(),
        ]);
    }
}
