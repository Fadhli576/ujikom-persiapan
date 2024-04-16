<?php

namespace App\Http\Controllers;

use App\Models\BookCollection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookCollectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Book/Wishlist/Index', [
            'bookCollections' => BookCollection::with('book.reviews')->where('user_id', Auth::id())->get()
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        BookCollection::create([
            'book_id' => $request->book_id,
            'user_id' => $request->user_id,
        ]);

        return redirect()->back()->with('success', 'Book added to wishlist successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(BookCollection $bookCollection)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BookCollection $bookCollection)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BookCollection $bookCollection)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BookCollection $bookCollection)
    {
        $bookCollection->delete();

        return redirect()->back()->with('success', 'Book removed from wishlist successfully.');
    }
}
