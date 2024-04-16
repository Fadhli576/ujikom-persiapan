<?php

namespace App\Http\Controllers;

use App\Exports\BorrowedExport;
use App\Models\Loan;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;

class LoanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $loan = Loan::with(['book', 'user']);
        if (Auth::user()-> role === "user") {
            $loan = $loan->where('user_id', Auth::id());
        }

        return inertia('Book/Borrow/Index', [
            'loans' => $loan->get()
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
    public function borrow(Request $request)
    {
        $loan = Loan::where('book_id', $request->book_id)->first();

        if ($loan) {
            if ($loan->status == 'loaned'){
                return redirect()->back()->with('error', 'The book have already been borrowed.');
            }
        }
        Loan::create([
            'book_id' => $request->book_id,
            'user_id' => $request->user_id,
            'loaned_at' => now(),
        ]);

        return redirect()->back()->with('success', 'Book borrowed successfully.');
    }

    public function returnBorrowed(Loan $loan)
    {
        $loan->update([
            'status' => 'returned',
            'returned_at' => now(),
        ]);

        return redirect()->back()->with('success', 'Book returned successfully.');
    }

    public function downloadPDF() {
        $loans = Loan::get();
        $pdf = Pdf::loadView('pdf', compact('loans'));

        return $pdf->download('borrowed-books-'.now().'.pdf');
    }

    public function downloadExcel() {
        return Excel::download(new BorrowedExport, 'borrowed-books-'.now().'.xlsx');
    }

    /**
     * Display the specified resource.
     */
    public function show(Loan $loan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Loan $loan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Loan $loan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Loan $loan)
    {
        //
    }
}
