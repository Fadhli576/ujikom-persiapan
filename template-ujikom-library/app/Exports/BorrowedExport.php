<?php

namespace App\Exports;

use App\Models\Loan;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;

class BorrowedExport implements FromCollection, WithHeadings, ShouldAutoSize
{
    /**
    * @return \Illuminate\Support\Collection
    */

    public function headings(): array
    {
        return [
            'No',
            'Borrower',
            'Book',
            'BorrowedAt',
            'ReturnedAt',
            'Status',
        ];
    }

    public function collection(): \Illuminate\Support\Collection
    {
      $loans = Loan::all();

    return $loans->map(function ($loan) {
        return [
            'No' => $loan->id,
            'Borrower' => $loan->user->name,
            'Book' => $loan->book->title,
            'BorrowedAt' => $loan->loaned_at,
            'ReturnedAt' => $loan->returned_at ? $loan->returned_at : '-',
            'Status' => $loan->status,
        ];
    });
    }

}
