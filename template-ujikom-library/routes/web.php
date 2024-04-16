<?php

use App\Http\Controllers\BookCategoryController;
use App\Http\Controllers\BookCollectionController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\LoanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/book/borrow', [LoanController::class, 'index'])->name('book.borrow.index');
    Route::post('/book/borrow', [LoanController::class, 'borrow'])->name('book.borrow');
});

Route::middleware(['auth', 'role:admin, pertugas'])->group(function () {
    Route::get('/user', [UserController::class, 'index'])->name('user.index');
    Route::post('/user', [UserController::class, 'store'])->name('user.store');
    Route::get('/user/{user}', [UserController::class, 'edit'])->name('user.edit');
    Route::put('/user/{user}', [UserController::class, 'update'])->name('user.update');
    Route::delete('/user/delete/{user}', [UserController::class, 'destroy'])->name('user.destroy');

    Route::get('/book', [BookController::class, 'index'])->name('book.index');
    Route::post('/book', [BookController::class, 'store'])->name('book.store');
    Route::get('/book/{book}', [BookController::class, 'edit'])->name('book.edit');
    Route::post('/book/{book}', [BookController::class, 'update'])->name('book.update');
    Route::delete('/book/{book}', [BookController::class, 'destroy'])->name('book.destroy');

    Route::get('/book-category', [BookCategoryController::class, 'index'])->name('book-category.index');
    Route::post('/book-category', [BookCategoryController::class, 'store'])->name('book-category.store');
    Route::get('/book-category/{bookCategory}', [BookCategoryController::class, 'edit'])->name('book-category.edit');
    Route::put('/book-category/{bookCategory}', [BookCategoryController::class, 'update'])->name('book-category.update');
    Route::delete('/book-category/{bookCategory}', [BookCategoryController::class, 'destroy'])->name('book-category.destroy');

    Route::get('/book/borrow/pdf', [LoanController::class, 'downloadPDF'])->name('book.borrow.pdf');
    Route::get('/book/borrow/excel/', [LoanController::class, 'downloadExcel'])->name('book.borrow.excel');
});

Route::middleware(['auth', 'role:user'])->group(function () {
    Route::get('/collections', [BookCollectionController::class, 'index'])->name('book-collections.index');
    Route::post('/wishlist', [BookCollectionController::class, 'store'])->name('book.wishlist');
    Route::delete('/wishlist-remove/{bookCollection}', [BookCollectionController::class, 'destroy'])->name('book.wishlist.destroy');

    Route::post('/review', [ReviewController::class, 'store'])->name('review.store');
    Route::get('/book-list', [BookController::class, 'indexBookList'])->name('book-list.index');
    Route::get('/book-detail/{book}', [BookController::class, 'bookDetail'])->name('book.detail');

    Route::put('/book/return/{loan}', [LoanController::class, 'returnBorrowed'])->name('book.returned');
});

require __DIR__.'/auth.php';
