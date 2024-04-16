<?php

namespace App\Http\Controllers;

use App\Models\BookCategory;
use Illuminate\Http\Request;

class BookCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('BookCategory/Index', [
            'bookCategories' => BookCategory::all()
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
        $request->validate([
            'name' => 'required',
        ]);

        BookCategory::create($request->all());

        return redirect()->route('book-category.index')->with('success', 'Book category created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(BookCategory $bookCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BookCategory $bookCategory)
    {
        return inertia('BookCategory/Edit', [
            'bookCategory' => $bookCategory
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BookCategory $bookCategory)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $bookCategory->update($request->all());

        return redirect()->route('book-category.index')->with('success', 'Book category updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BookCategory $bookCategory)
    {
        $bookCategory->delete();

        return redirect()->route('book-category.index')->with('success', 'Book category deleted successfully.');
    }
}
